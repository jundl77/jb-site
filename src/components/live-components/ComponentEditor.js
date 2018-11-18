import React from 'react'
import PropTypes from 'prop-types'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import Card from '@material-ui/core/Card'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import CloseIcon from '@material-ui/icons/Close'

export default class ComponentEditor extends React.Component {

  static propTypes = {
    code: PropTypes.string.isRequired,
    tab: PropTypes.number.isRequired,
    visible: PropTypes.bool.isRequired,
    hoverable: PropTypes.bool.isRequired,
    anchor: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    onTabChange: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      visible: props.visible,
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

    const tabStyle = {
      width: '5rem',
      outlineWidth: 0
    }

    const tabs =
      <Tabs
        style={{display: 'inline-block'}}
        value={this.props.tab}
        indicatorColor='primary'
        onChange={this.props.onTabChange}
      >
        <Tab icon={<img src="../img/reactl.svg" width="80px"/>} style={tabStyle}/>
        <Tab icon={<img src="../img/scalal.svg" width="80px"/>} style={tabStyle}/>
        <Tab icon={<img src="../img/hsl.svg" width="100px"/>} style={tabStyle}/>
        <Tab icon={<img src="../img/rustl.svg" width="80px"/>} style={tabStyle}/>
      </Tabs>

    // Style differently depending on whether it is hoverable or not
    if (!this.props.hoverable) {
      return (
        <div>
          <AppBar position="static" color="default" elevation={0} style={{backgroundColor: 'white'}}>
            <Toolbar>{tabs}</Toolbar>
          </AppBar>
          <CodeMirror value={this.props.code}
                      onChange={this.props.onChange}
                      options={options}
                      autoCursor={false}/>
        </div>
      )
    }

    return (
      <Card elevation={3}>
        <AppBar position="static" color="default" root={{backgroundColor: 'white'}} elevation={0}>
          <Toolbar>
            <Button color="inherit" onClick={this.props.onClose} aria-label="Menu" style={{display: 'inline-block'}}>
              <CloseIcon/>
            </Button>
            {tabs}
          </Toolbar>
        </AppBar>
        <CodeMirror value={this.props.code} onChange={this.props.onChange} options={options} autoCursor={false}/>
      </Card>
    )
  }
}
