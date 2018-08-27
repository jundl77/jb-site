import React from 'react'
import {LiveProvider, LiveError, LivePreview} from 'react-live'
import {UnControlled as CodeMirror} from 'react-codemirror2'

export default class LiveEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: this.props.code,
    }
  }

  updateCode = (editor, data, value) => {
    console.log("got here")
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
      require('codemirror/mode/xml/xml');
      require('codemirror/mode/dockerfile/dockerfile');
    }

    return (
      <div>
        <CodeMirror value={this.state.code} onChange={this.updateCode} options={options} autoCursor={false}/>
        <LiveProvider
            code={this.state.code}
            mountStylesheet={false}
          >
            <LivePreview/>
            <LiveError />
          </LiveProvider>
      </div>
    )
  }
}