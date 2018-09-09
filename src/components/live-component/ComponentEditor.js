import React from 'react'
import PropTypes from 'prop-types'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import Card from '@material-ui/core/Card'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Popover from '@material-ui/core/Popover'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import CloseIcon from '@material-ui/icons/Close'

export default class ComponentEditor extends React.Component {

  static propTypes = {
    code: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    anchor: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
  }
  _handleTabChange = (event, tabValue) => {
    this.setState({tabValue})
  }

  constructor(props) {
    super(props)

    this.state = {
      visible: props.visible,
      tabValue: 0,
      editorDisplay: 'none'
    }
  }

  render() {
    const options = {
      mode: 'javascript',
      theme: 'material',
      lineNumbers: true
    }

    if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
      require('codemirror/mode/xml/xml')
      require('codemirror/mode/javascript/javascript')
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
            <Toolbar>
              <Button color="inherit"
                      onClick={this.props.onClose}
                      aria-label="Menu"
                      style={{display: 'inline-block'}}>
                <CloseIcon/>
              </Button>
              <Tabs
                style={{display: 'inline-block'}}
                value={this.state.tabValue}
                onChange={this._handleTabChange}
              >
                <Tab label="React" style={{width: '5rem'}}/>
                <Tab label="Haskell" style={{width: '5rem'}}/>
                <Tab label="Rust" style={{width: '5rem'}}/>
              </Tabs>
            </Toolbar>
          </AppBar>
          <CodeMirror value={this.props.code} onChange={this.props.onChange} options={options} autoCursor={false}/>
        </Card>
      </Popover>
    )
  }
}
