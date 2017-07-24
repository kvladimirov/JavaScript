const fs = require('fs')
const path = require('path')
const dbPath = path.normalize(path.join(__dirname, '/database.json'))

function getProducts () {
  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, '[]')
    return []
  }

  let json = fs.readFileSync(dbPath).toString() || '[]'
  let products = JSON.parse(json)
  return products
}

function saveProducts (products) {
  let json = JSON.stringify(products, null, 2)
  fs.writeFileSync(dbPath, json)
}

module.exports.products = {}

module.exports.products.getAll = getProducts

module.exports.products.add = (product) => {
  let products = getProducts()
  console.log(products)
  product.id = products.length + 1
  products.push(product)
  saveProducts(products)
}

module.exports.products.findByName = (name) => {
  return getProducts().filter(p => p.name.toLowerCase().includes(name))
}
