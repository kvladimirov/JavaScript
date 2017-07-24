const server = require('./server/database')
let data = require('./server/data')

server().then(() => {
  data.saveBook({
    title: 'test',
    description: 'test',
    author: 'Kosyo',
    price: '50.00',
    image: 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg',
    comments: []
  })

//   instanodeDb.saveImage({
//     url: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/affenpinscher-dog-breed-pictures/10-floorhappy.jpg',
//     description: 'such dog much wow',
//     tags: ['dog', 'affenpinscher']
//   })

//   instanodeDb.saveImage({
//     url: 'http://blog.caranddriver.com/wp-content/uploads/2016/12/2017-EC-Crossovers-SUVs-Porsche-Macan.jpg',
//     description: 'The base engine is a 252-hp 2.0-liter turbo four. The S has a 340-hp twin-turbo V-6; the GTS makes 360.',
//     tags: ['car', 'porsche', 'macan']
//   })

  // instanodeDb.findByTagName('macan').then((images) => {
  //   images.forEach(img => console.log(img))
  // })

//  instanodeDb.filter('2017-06-02T13:57:10.375Z', null).then((images) => images.forEach(img => console.log(img)))
})
