import AppDispatcher from "../dispatchers/appDispatcher"
import ErrorConstants from "../constants/errorConstants"

export const showError = message => {
  AppDispatcher.dispatch({
    actionType: ErrorConstants.SHOW_ERROR,
    message: message
  })
}

export const hideError = () => {
  AppDispatcher.dispatch({
    actionType: ErrorConstants.HIDE_ERROR
  })
}
