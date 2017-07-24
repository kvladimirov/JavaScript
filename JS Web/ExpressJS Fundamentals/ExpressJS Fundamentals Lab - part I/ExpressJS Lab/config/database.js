let products = [{name: 'Black phone', description: 'Black phone', image: 'http://pngimg.com/uploads/phone/phone_PNG467.png', id: 1}, {name: 'Red phone', description: 'Red phone', image: 'http://pngimg.com/uploads/phone/phone_PNG465.png', id: 2}, {name: 'Blue phone', description: 'Blue phone', image: 'http://pngimg.com/uploads/phone/phone_PNG468.png', id: 3}]
let count = 1

module.exports.products = {}

module.exports.products.getAll = () => {
  return products
}

module.exports.products.add = (product) => {
  product.id = count++
  products.push(product)
}

module.exports.products.findByName = (name) => {
  let product = null
  for (let p of products) {
    if (p === name) {
      return p
    }
  }

  return product
}
