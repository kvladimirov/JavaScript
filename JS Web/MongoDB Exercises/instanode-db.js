const Tag = require('./models/Tag')
const Image = require('./models/Image')

function updateTag (tagData) {
  return new Promise((resolve, reject) => {
    Tag.findOne({name: tagData.name})
      .then((tag) => {
        tag.images.push(tagData.imageId)
        tag.save()
          .then(() => resolve(`Updated tag ${tagData.name} with image ${tagData.imageId}`))
      })
  })
}

function createTag (tagName) {
  return new Promise((resolve, reject) => {
    Tag.findOne({name: tagName})
      .then((existingTag) => {
        if (existingTag) {
          resolve(existingTag._id)
          return
        }

        Tag.create({name: tagName}).then((tag) => {
          resolve(tag._id)
        })
      })
  })
}

module.exports = {
  saveImage: (imageData) => {
    let tags = imageData.tags

    let imageObj = {
      url: imageData.url,
      description: imageData.description,
      tags: []
    }

    let tagPromises = []
    for (let tagName of tags) {
      tagPromises.push(
        createTag(tagName)
         .then((tagId) => {
           imageObj.tags.push(tagId)
           console.log(`Populated image with tag ${tagName}`)
         })
      )
    }

    Promise.all(tagPromises).then(() => {
      Image.create(imageObj).then((image) => {
        console.log(`Created image ${image._id}`)

        for (let tagName of tags) {
          updateTag({name: tagName, imageId: image._id})
            .then((msg) => console.log(msg))
        }
      })
    })
  },

  findByTagName: (tagName) => {
    return new Promise((resolve, reject) => {
      Tag.findOne({name: tagName}).then((tag) => {
        Image.find({tags: tag._id}).then((images) => {
          let sortedImages = images.sort((a, b) => b.creationDate - a.creationDate)
          resolve(sortedImages)
        })
      })
    })
  },

  filter: (minDate, maxDate, results) => {
    minDate = minDate || new Date(-8640000000000000)
    maxDate = maxDate || Date.now()
    results = results || 10

    return new Promise((resolve, reject) => {
      Image.find({
        creationDate: {
          $gte: minDate,
          $lt: maxDate
        }
      })
        .limit(results)
        .then((images) => {
          resolve(images)
        })
    })
  }
}
