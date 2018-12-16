import React from 'react'
import PropTypes from 'prop-types'
import {LiveError, LivePreview, LiveProvider} from 'react-live'
import HoverableComponentEditor from './HoverableComponentEditor'
import Button from '@material-ui/core/Button'
import Popper from '@material-ui/core/Popper'
import Grow from '@material-ui/core/Grow'
import CodeIcon from '@material-ui/icons/Edit'
import { showError, hideError } from "../../actions/errorAction"
import CodeState from "../../util/codeState"

export default class LiveComponent extends React.Component {

  static propTypes = {
    previewStyles: PropTypes.object,
    code: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)

    this.liveError = React.createRef()
    this.state = {
      codeState: new CodeState(props.code),
      tabValue: 0,
      visibleEditor: false,
      visiblePopup: false,
      anchor: null
    }
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
      visiblePopup: false,
    })
  }

  _closeEditor = () => {
    this.setState({visibleEditor: false})
  }

  _updateCode = (editor, data, value) => {
    let code = this.state.codeState
    code.set(this.state.tabValue, value)
    this.setState({codeState: code})
  }

  _transpile = () => {
    return this.state.codeState.transpile(this.state.tabValue)
      .then(codeState => {
        this.setState({
          codeState: codeState
        })
        return true
      })
  }

	_handleTabChange = (event, tabValue) => {
		this.setState({tabValue: tabValue})
	}

	_errorCheck = () => {
    let lang = CodeState.GetLang(this.state.tabValue)

    let color = 'transparent'
    if (lang === 'react') {
      if (this.liveError.current != null && this.liveError.current.children.length > 0) {
        color = '#F44336'
        showError(this.liveError.current.children[0].innerText)
      } else {
        hideError()
      }

      return color
    }

    let error = this.state.codeState.getError(this.state.tabValue)
    if (error != null) {
      color = '#F44336'
      showError(error)
    } else {
      hideError()
    }

    return color
  }

  render() {

    // Check if there has been an error
    let color = this._errorCheck()

    const previewStyles = {
      ...this.props.previewStyles,
      backgroundColor: color
    }

    // Get the correct codeState to display
    const raw = this.state.codeState.getRaw(this.state.tabValue)
    const real = this.state.codeState.getReal(this.state.tabValue)

    const codeButtonStyles = {
      padding: "7.5px 9px 9px",
      background: "#1d1e24",
      borderRadius: "5px",
      outlineWidth: 0,
      boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 5px 0px," +
        "rgba(0, 0, 0, 0.14) 0px 2px 2px 0px," +
        "rgba(0, 0, 0, 0.12) 0px 3px 1px -2px"
    }

    return (
      <div>
        <LiveProvider style={{display: 'flex'}} code={real} mountStylesheet={false}>
          <LivePreview onMouseEnter={this._handlePopoverOpenWithAnchor}
                       style={previewStyles}
                       onMouseLeave={this._handlePopoverClose}/>
          <div ref={this.liveError}>
            <LiveError style={{display: 'none'}}/>
          </div>
        </LiveProvider>
        <Popper placement="bottom-start" open={this.state.visiblePopup} anchorEl={this.state.anchor} transition>
          {/* eslint-disable-next-line */}
          {({TransitionProps}) => (
            <Grow {...TransitionProps} timeout={150}>
              <Button size="small"
                      style={codeButtonStyles}
                      onClick={this._showEditor}
                      onMouseEnter={this._handlePopoverOpen}
                      onMouseLeave={this._handlePopoverClose}>
                <CodeIcon style={{color: "#2196F3", fontSize: "20px"}}/>
                <span className="pl1 f6 ttc mf white">Edit</span>
              </Button>
            </Grow>
          )}
        </Popper>
        <HoverableComponentEditor code={raw}
                                  tab={this.state.tabValue}
                                  anchor={this.state.anchor}
                                  onChange={this._updateCode}
                                  onTranspile={this._transpile}
                                  onTabChange={this._handleTabChange}
                                  visible={this.state.visibleEditor}
                                  onClose={this._closeEditor}/>
      </div>
    )
  }
}