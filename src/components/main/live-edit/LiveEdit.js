import React from 'react'
import PropTypes from 'prop-types'
import reactElementToJSXString from 'react-element-to-jsx-string'
import {LiveError, LivePreview, LiveProvider} from 'react-live'
import {UnControlled as CodeMirror} from 'react-codemirror2'

LiveEdit.propTypes = {
  children: PropTypes.element.isRequired
}

export default class LiveEdit extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      code: this._reactToString(this.props.children)
    }
  }

  _reactToString = (reactElement) => {
    return reactElementToJSXString(reactElement).split(' ref={undefined}').join('')
  }

  _updateCode = (editor, data, value) => {
    this.setState({
      code: value
    })
  }

  render() {
    const options = {
      mode: 'xml',
      theme: 'material',
      lineNumbers: true
    }

    if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
      require('codemirror/mode/xml/xml')
      require('codemirror/mode/dockerfile/dockerfile')
    }

    return (
      <div>
        <CodeMirror value={this.state.code} onChange={this._updateCode} options={options} autoCursor={false}/>
        <LiveProvider code = {this.state.code} mountStylesheet = {false}>
          <LivePreview/>
          <LiveError/>
        </LiveProvider>
      </div>
    )
  }
}