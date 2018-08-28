import React from 'react'
import PropTypes from 'prop-types'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import Card from '@material-ui/core/Card'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Grow from '@material-ui/core/Grow'


export default class ComponentEditor extends React.Component {

  static propTypes = {
    code: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      tabValue: 0,
      editorDisplay: 'none'
    }
  }

  _handleTabChange = (event, tabValue) => {
    this.setState({ tabValue })
  }

  render() {
    const options = {
      mode: 'xml',
      theme: 'material',
      lineNumbers: true
    }

    if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
      require('codemirror/mode/xml/xml')
    }

    if (!this.props.visible)
      return( <div style={{display: 'none'}}/>)

    return (
      <Grow in={this.props.visible}>
        <Card elevation={15}>
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.tabValue}
              onChange={this._handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              fullWidth
            >
              <Tab label="React" />
              <Tab label="Haskell" />
              <Tab label="Rust" />
            </Tabs>
          </AppBar>
          <CodeMirror value={this.props.code} onChange={this.props.onChange} options={options} autoCursor={false}/>
        </Card>
      </Grow>
    )
  }
}
