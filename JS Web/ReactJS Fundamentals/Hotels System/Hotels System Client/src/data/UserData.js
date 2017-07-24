// const baseUrl = 'http://localhost:5000/auth'

// const getOptions = () => ({
//   method: 'POST',
//   mode: 'cors',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   }
// })

// const handleJSONresponse = res => res.json()
import Data from './Data'
const baseUrl = 'auth'

class UserData {
  static register (user) {
    return Data.post(`${baseUrl}/signup`, user)
    // const options = getOptions()
    // options.body = JSON.stringify(user)

    // return window.fetch(`${baseUrl}/signup`, options)
    // .then(handleJSONresponse)
  }

  static login (user) {
    return Data.post(`${baseUrl}/login`, user)
    // const options = getOptions()
    // options.body = JSON.stringify(user)
    // // options.body =
    // return window.fetch(`${baseUrl}/login`, options)
    // .then(handleJSONresponse)
  }
}

export default UserData
