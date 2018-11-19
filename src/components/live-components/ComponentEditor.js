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
import CodeState from "../../util/codeState"
import PlayIcon from '@material-ui/icons/PlayArrow'

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

  getMode = () => {
    let lang = CodeState.GetLang(this.props.tab)

    switch (lang) {
      case 'scala':
        return 'text/x-scala'
      case 'react':
        return 'javascript'
    }
  }

  render() {
    const options = {
      mode: this.getMode(),
      theme: 'one-dark',
      lineNumbers: true
    }

    if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
      require('codemirror/mode/xml/xml')
      require('codemirror/mode/javascript/javascript')
      require('codemirror/mode/clike/clike')
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

    let lang = CodeState.GetLang(this.props.tab)

    let actionMenu = ""
    if (lang !== "react") {
      let paddingRight = "right-1"
      if (!this.props.hoverable) {
        paddingRight = "right-2"
      }

      const classes = "absolute bottom-1 z-max " + paddingRight

      actionMenu =
        <div className={classes}>
          <Button variant="contained" color="primary" style={{textTransform: "none"}}>
            <PlayIcon className="mr1"/>
            Run
          </Button>
        </div>
    }

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
          {actionMenu}
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
        {actionMenu}
      </Card>
    )
  }
}
