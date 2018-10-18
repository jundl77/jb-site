import React from 'react'
import PropTypes from 'prop-types'
import {LiveError, LivePreview, LiveProvider} from 'react-live'
import HoverableComponentEditor from './HoverableComponentEditor'
import Button from '@material-ui/core/Button'
import Popper from '@material-ui/core/Popper'
import Paper from '@material-ui/core/Paper'
import Grow from '@material-ui/core/Grow'
import CodeIcon from '@material-ui/icons/Code'
import { showError, hideError } from "../../actions/errorAction"

export default class LiveComponent extends React.Component {

  static propTypes = {
    previewStyles: PropTypes.object,
    code: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)

    this.liveError = React.createRef()
    this.state = {
      code: this._formatCodeString(this.props.code),
      visibleEditor: false,
      visiblePopup: false,
      anchor: null
    }
  }

  _formatCodeString = code => {
    const re = new RegExp('^( *)')

    let lines = code.split('\n')
    lines = lines.filter(line => line.trim().length > 0)

    const min = lines.reduce((len, str) => Math.min(re.exec(str)[0].length, len), 1000, lines)
    return lines.map(line => line.replace(' '.repeat(min), ''), lines).join('\n')
  }

  _handlePopoverOpenWithAnchor = event => {
    if (!this.state.visibleEditor) {
      this.setState({
        anchor: event.currentTarget,
        visiblePopup: true
      })
    }
  }

  _handlePopoverOpen = () => {
    if (!this.state.visibleEditor) {
      this.setState({visiblePopup: true})
    }
  }

  _handlePopoverClose = () => {
    this.setState({visiblePopup: false})
  }

  _showEditor = () => {
    this.setState({
      visibleEditor: true,
      visiblePopup: false
    })
  }

  _closeEditor = () => {
    this.setState({visibleEditor: false})
  }

  _updateCode = (editor, data, value) => {
    this.setState({code: value})
  }

  _errorCheck = () => {
    let color = 'transparent'
    if (this.liveError.current != null && this.liveError.current.children.length > 0) {
      color = '#F44336'
      showError(this.liveError.current.children[0].innerText)
    } else {
      hideError()
    }

    return color
  }

  render() {

    // check if there has been an error
    let color = this._errorCheck()

    const previewStyles = {
      ...this.props.previewStyles,
      backgroundColor: color
    }

    return (
      <div>
        <LiveProvider style={{display: 'flex'}} code={this.state.code} mountStylesheet={false}>
          <LivePreview onMouseEnter={this._handlePopoverOpenWithAnchor}
                       style={previewStyles}
                       onMouseLeave={this._handlePopoverClose}/>
          <div ref={this.liveError}>
            <LiveError style={{display: 'none'}}/>
          </div>
        </LiveProvider>
        <Popper placement="bottom-start" open={this.state.visiblePopup} anchorEl={this.state.anchor} transition>
          {({TransitionProps}) => (
            <Grow {...TransitionProps} timeout={150}>
              <Paper>
                <Button size="small"
                        onClick={this._showEditor}
                        onMouseEnter={this._handlePopoverOpen}
                        onMouseLeave={this._handlePopoverClose}>
                  <CodeIcon/>
                </Button>
              </Paper>
            </Grow>
          )}
        </Popper>
        <HoverableComponentEditor code={this.state.code}
                                  anchor={this.state.anchor}
                                  onChange={this._updateCode}
                                  visible={this.state.visibleEditor}
                                  onClose={this._closeEditor}/>
      </div>
    )
  }
}