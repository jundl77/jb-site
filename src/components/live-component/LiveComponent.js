import React from 'react'
import PropTypes from 'prop-types'
import reactElementToJSXString from 'react-element-to-jsx-string'
import { LiveError, LivePreview, LiveProvider } from 'react-live'
import ComponentEditor from './ComponentEditor'
import Button from '@material-ui/core/Button'
import Popper from '@material-ui/core/Popper'
import Paper from '@material-ui/core/Paper'
import Grow from '@material-ui/core/Grow'
import CodeIcon from '@material-ui/icons/Code'

export default class LiveComponent extends React.Component {

  static propTypes = {
    children: PropTypes.element.isRequired
  }

  constructor(props) {
    super(props)

    this.liveError = React.createRef()

    this.state = {
      code: this._reactToString(this.props.children),
      visibleEditor: false,
      visiblePopup: false,
      anchor: null
    }
  }

  _reactToString = reactElement => {
    return reactElementToJSXString(reactElement).split(' ref={undefined}').join('')
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
    this.setState({ visiblePopup: false })
  }

  _showEditor = () => {
    this.setState({
      visibleEditor: true,
      visiblePopup: false
    })
  }

  _closeEditor = () => {
    this.setState({ visibleEditor: false })
  }

  _updateCode = (editor, data, value) => {
    this.setState({ code: value })
  }

  render() {

    // check if there has been an error
    let color = 'transparent'
    if (this.liveError.current != null && this.liveError.current.children.length > 0)
      color = 'red'

    return (
      <div>
        <LiveProvider style={{display: 'flex'}} code={this.state.code} mountStylesheet={false}>
          <LivePreview onMouseEnter={this._handlePopoverOpenWithAnchor}
                       style={{backgroundColor: color}}
                       onMouseLeave={this._handlePopoverClose}/>
          <div ref={this.liveError}>
            <LiveError style={{display: 'none'}}/>
          </div>
        </LiveProvider>
        <Popper placement="bottom-start" open={this.state.visiblePopup} anchorEl={this.state.anchor} transition>
          {({ TransitionProps }) => (
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
        <ComponentEditor code={this.state.code} anchor={this.state.anchor} onChange={this._updateCode}
                         visible={this.state.visibleEditor} onClose={this._closeEditor}/>
      </div>
    )
  }
}