import React from 'react'
import Button from '@material-ui/core/Button'
import ErrorIcon from '@material-ui/icons/Error'
import CloseIcon from '@material-ui/icons/Close'
import Snackbar from '@material-ui/core/Snackbar'
import ErrorStore from "../../../stores/errorStore"

export default class ErrorBar extends React.Component {
  state = {
    open: false,
    message: ''
  }

  componentDidMount() {
    ErrorStore.addChangeListener(this._handleErrorDisplay)
  }

  componentWillUnmount() {
    ErrorStore.removeChangeListener(this._handleErrorDisplay)
  }

  _handleErrorDisplay = () => {
    const errorMsg = ErrorStore.getMessage()

    if (errorMsg == null) {
      this.setState({
        open: false,
        message: ''
      })
    } else {
      this.setState({
        open: true,
        message: errorMsg
      })
    }
  }

  _handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    this.setState({
      open: false,
      message: ''
    })
  }

  _formatError = message => {
    if (message === '')
      return message

    let messages = message.split('\n')
    const index = messages.indexOf(messages.find(msg => /^\d/.test(msg)))

    let code = []
    if (index >= 0) {
      code = messages.splice(index)
    }

    messages = messages.map((msg, i) => <span key={i}>{msg}<br/></span>)
    code = code.map((str, i) => <span key={i} className="pl3">{str}<br/></span>)
    return messages.concat(code)
  }

  render() {

    const styles = {
      backgroundColor: '#F44336',
      minWidth: '30vw'
    }

    const content = this._formatError(this.state.message)

    return (
      <Snackbar
        open={this.state.open}
        autoHideDuration={4000}
        ContentProps={{style: styles}}
        onClose={this.handleClose}
        message={
          <span style={{display: 'flex', alignItems: 'center'}}>
            <ErrorIcon style={{fontSize: '20px'}}/>
            <div className="pl2 tl">{content}</div>
          </span>
        }
        action={
          <Button key="close"
                  style={{outlineWidth: 0}}
                  aria-label="Close"
                  color="inherit"
                  onClick={this._handleClose}>
            <CloseIcon/>
          </Button>
        }
      />
    )
  }
}