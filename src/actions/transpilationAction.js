import AppDispatcher from "../dispatchers/appDispatcher"
import TranspilationConstants from "../constants/transpilationConstants"

export const updateServerStatus = (server, status) => {
  AppDispatcher.dispatch({
    actionType: TranspilationConstants.UPDATE_STATUS,
    server: server,
    status: status
  })
}
