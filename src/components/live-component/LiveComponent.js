import React from 'react'
import PropTypes from 'prop-types'
import reactElementToJSXString from 'react-element-to-jsx-string'
import { LiveError, LivePreview, LiveProvider } from 'react-live'
import ComponentEditor from './ComponentEditor'
import Button from '@material-ui/core/Button'
import Grow from '@material-ui/core/Grow'


export default class LiveComponent extends React.Component {

  static propTypes = {
    children: PropTypes.element.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      code: this._reactToString(this.props.children),
      visibleEditor: false,
      anchor: false
    }
  }

  _reactToString = reactElement => {
    return reactElementToJSXString(reactElement).split(' ref={undefined}').join('')
  }

  _handlePopoverOpen = event => {
    if (!this.state.visibleEditor)
      this.setState({ anchor: event.currentTarget })
  }

  _handlePopoverClose = () => {
    this.setState({ anchor: null })
  }

  _showEditor = () => {
    this.setState({
      visibleEditor: !this.state.visibleEditor,
      anchor: null
    })
  }

  _updateCode = (editor, data, value) => {
    this.setState({ code: value })
  }

  render() {

    let buttonDOM =
      <Button size="small"
              onClick={this._showEditor}
              onMouseEnter={this._handlePopoverOpen}
              onMouseLeave={this._handlePopoverClose}>
        code
      </Button>

    if (this.state.anchor == null)
      buttonDOM = <div style={{display: 'none'}}/>

    const livePreview = <LivePreview onMouseEnter={this._handlePopoverOpen} onMouseLeave={this._handlePopoverClose}/>

    return (
      <div>
        <LiveProvider code={this.state.code} mountStylesheet={false}>
          {livePreview}
          <LiveError/>
        </LiveProvider>
        <Grow in={this.state.anchor != null}>
          {buttonDOM}
        </Grow>
        <ComponentEditor code={this.state.code} anchor={this.state.anchor} onChange={this._updateCode}
                         visible={this.state.visibleEditor}/>
      </div>
    )
  }
}