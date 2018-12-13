import AppDispatcher from "../dispatchers/appDispatcher"
import BaseStore from "./baseStore"
import ServerStatusConstants from "../constants/serverStatusConstants"
import assign from "object-assign"
import * as Immutable from 'immutable'

let _statusStore = Immutable.Map()

const ServerStatusStore = assign({}, BaseStore, {
    setStatus(server, status) {
        _statusStore = _statusStore.set(server, status)
    },
    getStatus(server) {
        return _statusStore.get(server)
    }
})

AppDispatcher.register(action => {
    switch (action.actionType) {
        case ServerStatusConstants.CHECK_STATUS:
            ServerStatusStore.setStatus(action.server, action.status)
            ServerStatusStore.emitChange()
            break
        default:
        // no op
    }
})

export default ServerStatusStore
