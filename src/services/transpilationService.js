import * as request from "request-promise"
import * as transpilationActions from "../actions/transpilationAction"
import constants from "../constants/transpilationConstants"


export const serverStatusChecks = () => {
    _serverStatusCheck('scala')

    // call every 5 seconds
    setTimeout(serverStatusChecks, 5000)
}

export const transpile = (code, lang) => {
  const requestParams = {
    method: 'POST',
    uri: constants.TRANSPILE_URL_FUNC(lang),
    body: {
      codeState: code
    },
    json: true // Automatically stringifies the body to JSON
  }

  request(requestParams)
    .then(response => {
// eslint-disable-next-line no-console
      console.log(response)
    })
    .catch(err => {
// eslint-disable-next-line no-console
      console.log(err)
    })

  return code
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

