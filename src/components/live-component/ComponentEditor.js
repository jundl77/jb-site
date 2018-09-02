import React from 'react'
import PropTypes from 'prop-types'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import Card from '@material-ui/core/Card'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Popover from '@material-ui/core/Popover'

export default class ComponentEditor extends React.Component {

  static propTypes = {
    code: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    anchor: PropTypes.object,
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

    return (
      <Popover
        open={this.props.visible}
        anchorEl={this.props.anchor}
        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
        transformOrigin={{horizontal: 'left', vertical: 'top'}}
      >
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
      </Popover>
    )
  }
}
