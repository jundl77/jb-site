import AppDispatcher from "../dispatchers/appDispatcher"
import BaseStore from "./baseStore"
import ErrorConstants from "../constants/errorConstants"
import assign from "object-assign"

// Current settings
let _message = null

const ErrorStore = assign({}, BaseStore, {
  setMessage(message) {
    _message = message
  },
  getMessage() {
    return _message
  }
})

AppDispatcher.register(action => {
  switch (action.actionType) {
    case ErrorConstants.SHOW_ERROR:
      ErrorStore.setMessage(action.message)
      ErrorStore.emitChange()
      break
    case ErrorConstants.HIDE_ERROR:
      ErrorStore.setMessage(null)
      ErrorStore.emitChange()
      break
    default:
    // no op
  }
})

export default ErrorStore