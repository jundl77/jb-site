import * as request from "request-promise"
import * as serverStatus from "../actions/serverStatusAction"


export const serverStatusChecks = () => {
    scalaStatusCheck()

    // call every 60 seconds
    setTimeout(serverStatusChecks, 60)
}

const scalaStatusCheck = () => {
  const requestParams = {
    method: 'GET',
    uri: 'http://julianbrendl.com:3001/status',
  }

  request(requestParams)
    .then(() => {
      serverStatus.checkServerStatus('scala', true)
    })
    .catch(() => {
      serverStatus.checkServerStatus('scala', false)
    })
}

// const transpileFromScala = code => {
//
// 	// Define request parameters
// 	const requestParams = {
// 		method: 'POST',
//         uri: 'http://julianbrendl.com:3001/transpile',
// 		body: {
// 			codeState: code
// 		},
// 		json: true // Automatically stringifies the body to JSON
// 	}
//
// 	request(requestParams)
// 		.then(response => {
// // eslint-disable-next-line no-console
// 			console.log(response)
// 		})
// 		.catch(err => {
// // eslint-disable-next-line no-console
// 			console.log(err)
// 		})
//
// 	return code
// }

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
