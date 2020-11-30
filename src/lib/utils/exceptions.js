module.exports = {
  InvalidClientError: (msg) => {
    return new Error(`InvalidClientError: ${msg}`)
  }
}
