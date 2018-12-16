import AppDispatcher from "../dispatchers/appDispatcher"
import BaseStore from "./baseStore"
import ServerStatusConstants from "../constants/transpilationConstants"
import assign from "object-assign"
import * as Immutable from 'immutable'

let _statusStore = Immutable.Map()

const TranspilationStore = assign({}, BaseStore, {
  setStatus(server, status) {
    _statusStore = _statusStore.set(server, status)
  },
  getStatus(server) {
    if (!_statusStore.has(server))
      return false
    return _statusStore.get(server)
  }
})

AppDispatcher.register(action => {
  switch (action.actionType) {
    case ServerStatusConstants.UPDATE_STATUS:
      TranspilationStore.setStatus(action.server, action.status)
      TranspilationStore.emitChange()
      break
    default:
    // no op
  }
})

export default TranspilationStore
