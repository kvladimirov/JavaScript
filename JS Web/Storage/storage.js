const fs = require('fs')
const dataFile = 'storage.dat'

let data = {}

let validateKey = (key) => {
  if (typeof key !== 'string') {
    throw new Error('Key must be a string')
  }
}

let checkForRepeatedKey = (key) => {
  if (data.hasOwnProperty(key)) {
    throw new Error('This key already exists.')
  }
}

let checkIfKeyExists = (key) => {
  if (!data.hasOwnProperty(key)) {
    throw new Error('The key doesn`t exists')
  }
}

let put = (key, value) => {
  validateKey(key)
  checkForRepeatedKey(key)

  data[key] = value
  console.log(data)
}

let get = (key) => {
  validateKey(key)
  checkIfKeyExists(key)

  return data[key]
}

let update = (key, value) => {
  validateKey(key)
  checkIfKeyExists(key)

  data[key] = value
}

let deleteItem = (key) => {
  validateKey(key)
  checkIfKeyExists(key)

  delete data[key]
}

let clearAll = () => {
  data = {}
}

let save = () => {
  let dataAsString = JSON.stringify(data)
  fs.writeFileSync(dataFile, dataAsString)
}

let load = () => {
  let dataAsString = fs.readFileSync(dataFile, 'utf8')
  data = JSON.parse(dataAsString)
}

module.exports = {
  put: put,
  get: get,
  update: update,
  delete: deleteItem,
  clear: clearAll,
  save: save,
  load: load
}
