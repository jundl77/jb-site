import * as request from "request-promise"
import * as transpilationActions from "../actions/transpilationAction"
import constants from "../constants/transpilationConstants"
import he from 'he'

export const serverStatusChecks = () => {
  _serverStatusCheck('scala')
  _serverStatusCheck('haskell')
  _serverStatusCheck('rust')

  // call every 5 seconds
  setTimeout(serverStatusChecks, 5000)
}

export const transpile = (code, lang) => {
  const requestParams = {
    method: 'POST',
    uri: constants.TRANSPILE_URL_FUNC(lang),
    body: {
      code: code
    },
    json: true // Automatically stringifies the body to JSON
  }

  return request(requestParams)
    .then(response => {
      let unescapedHTML = he.decode(response)
      if (_checkHTML(unescapedHTML))
        return unescapedHTML
      else
        throw new Error(response)
      //throw new Error("Invalid HTML received from server.")
    })
}

const _checkHTML = html => {
  const doc = document.createElement('div')
  doc.innerHTML = html
  return doc.innerHTML === html
}

const _serverStatusCheck = server => {
  const requestParams = {
    method: 'GET',
    uri: constants.CHECK_STATUS_URL_FUNC(server),
  }

  request(requestParams)
    .then(response => {
      if (response === '200')
        transpilationActions.updateServerStatus(server, true)
      else
        transpilationActions.updateServerStatus(server, false)
    })
    .catch(() => {
      transpilationActions.updateServerStatus(server, false)
    })
}
