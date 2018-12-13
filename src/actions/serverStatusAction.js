import AppDispatcher from "../dispatchers/appDispatcher"
import ServerStatusConstants from "../constants/serverStatusConstants"

export const checkServerStatus = (server, status) => {
    AppDispatcher.dispatch({
        actionType: ServerStatusConstants.SHOW_ERROR,
        server: server,
        status: status
    })
}
