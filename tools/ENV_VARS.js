/* eslint-disable */
let ENV_VARS

const SERVER_DOMAIN = "${SERVER_DOMAIN}"

if (process.env.NODE_ENV !== "production" || !isProdUrl(SERVER_DOMAIN)) {
  console.log("Dev variables chosen")
  ENV_VARS = {
    SERVER_STATUS_URL_FUNC: (server => "http://localhost:3001/status"),
    SERVER_TRANSPILATION_URL_FUNC: (server => "http://localhost:3001/status")
  }
} else {
  ENV_VARS = {
    SERVER_STATUS_URL_FUNC: (server => `https://${server}.${SERVER_DOMAIN}/status`),
    SERVER_TRANSPILATION_URL_FUNC: (server => `https://${server}.${SERVER_DOMAIN}/transpile`),
    SERVER_URL: `https://${SERVER_DOMAIN}`
  }
}

export default ENV_VARS

// Checks if docker replaced url correctly, otherwise jump back to dev
function isProdUrl(url) {
  return !url.startsWith('$')
}