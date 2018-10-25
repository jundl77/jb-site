const request = require("request-promise")

const transpileFromScala = code => {

	// Define request parameters
	const requestParams = {
		method: 'POST',
		uri: 'http://localhost:3001/transpile',
		body: {
			code: code
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

let code = `
new ReactComponent {
  def myName() = "Julian Brendl"

	override def render(): Text.TypedTag[String] = {
		div(
			h1("Test"),
			div(
			 p("My name is: " + myName()),
			 p("This is my second paragraph"),
			 p("This is my third paragraph")
			)
		)
	}
}`

transpileFromScala(code)
