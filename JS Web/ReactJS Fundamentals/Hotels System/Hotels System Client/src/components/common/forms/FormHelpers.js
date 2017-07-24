class FormHandlers {
  static handleFormChange (event, statefield) {
    const target = event.target
    const name = target.name
    const value = target.value

    const state = this.state[statefield]
    state[name] = value

    this.setState({ [statefield]: state })
  }

  static getFirstError (data) {
    let firstError = data.message
    if (data.errors) {
      firstError = Object.keys(data.errors).map(k => data.errors[k])[0]
    }

    return firstError
  }
}

export default FormHandlers
