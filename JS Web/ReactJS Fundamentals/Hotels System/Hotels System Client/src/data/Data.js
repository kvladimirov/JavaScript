import Auth from '../components/users/Auth'

const baseUrl = 'http://localhost:5000/'

const getOptions = () => ({
  mode: 'cors',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

const handleJSONresponse = res => res.json()

const applyAuthorizationHeader = (options, authenticated) => {
  if (authenticated) {
    options.headers.Authorization = `bearer ${Auth.getToken()}`
  }
}

class Data {
  static get (url, authenticated) {
    let options = getOptions()
    options.method = 'GET'

    applyAuthorizationHeader(options, authenticated)

    let result = window.fetch(`${baseUrl}${url}`,
    options)
        .then(handleJSONresponse)

    return result
  }

  static post (url, data, authenticated) {
    let options = getOptions()
    options.method = 'POST'
    options.body = JSON.stringify(data)

    applyAuthorizationHeader(options, authenticated)
    // if (authenticated) {
    //   options.headers.Authorization = `bearer ${Auth.getToken()}`
    // }

    let result = window.fetch(`${baseUrl}${url}`,
    options)
        .then(handleJSONresponse)

    return result
  }
}

export default Data
