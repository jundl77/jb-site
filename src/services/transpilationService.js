import * as request from "request-promise"
import * as serverStatus from "../actions/serverStatusAction"
import constants from "../constants/transpilationConstants"


export const serverStatusChecks = () => {
    _serverStatusCheck('scala')

    // call every 5 seconds
    setTimeout(serverStatusChecks, 5000)
}

const _serverStatusCheck = server => {
  const requestParams = {
    method: 'GET',
    uri: constants.CHECK_STATUS_URL_FUNC(server),
  }

  request(requestParams)
    .then(response => {
      if (response === '200')
        serverStatus.updateServerStatus(server, true)
      else
        serverStatus.updateServerStatus(server, false)
    })
    .catch(() => {
      serverStatus.updateServerStatus(server, false)
    })
}

export const transpileFromScala = code => {

	// Define request parameters
	const requestParams = {
		method: 'POST',
      uri: constants.TRANSPILE_URL_FUNC('scala'),
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

// let code = `
// new ReactComponent {
//   def myName() = "Julian Brendl"
//
// 	override def render(): Text.TypedTag[String] = {
// 		div(
// 			h1("Test"),
// 			div(
// 			 p("My name is: " + myName()),
// 			 p("This is my second paragraph"),
// 			 p("This is my third paragraph")
// 			)
// 		)
// 	}
// }`
// transpileFromScala(code)
