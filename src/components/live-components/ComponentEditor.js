import React from 'react'
import PropTypes from 'prop-types'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import Card from '@material-ui/core/Card'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import Toolbar from '@material-ui/core/Toolbar'
import CloseIcon from '@material-ui/icons/Close'
import CodeState from "../../util/codeState"
import PlayIcon from '@material-ui/icons/PlayArrow'
import CircularProgress from '@material-ui/core/CircularProgress'
import CheckCircle from '@material-ui/icons/CheckCircle'
import AccessTime from '@material-ui/icons/AccessTime'
import Error from '@material-ui/icons/Error'
import TranspilationStore from '../../stores/transpilationStore'

export default class ComponentEditor extends React.Component {

  static propTypes = {
    code: PropTypes.string.isRequired,
    tab: PropTypes.number.isRequired,
    visible: PropTypes.bool.isRequired,
    hoverable: PropTypes.bool.isRequired,
    anchor: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    onTranspile: PropTypes.func.isRequired,
    onTabChange: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      visible: props.visible,
      editorDisplay: 'none',
      isTranspiling: false
    }
  }

  componentDidMount() {
    TranspilationStore.addChangeListener(this._reRender)
  }

  componentWillUnmount() {
    TranspilationStore.removeChangeListener(this._reRender)
  }

  _reRender = () => {
    this.setState({state: this.state})
  }

  _getMode = () => {
    let lang = CodeState.GetLang(this.props.tab)

    switch (lang) {
      case 'scala':
        return 'text/x-scala'
      case 'react':
        return 'javascript'
    }
  }

  _getTabs = () => {
    const tabStyle = {
      width: '5rem',
      outlineWidth: 0
    }

    return (
      <Tabs
        style={{display: 'inline-block'}}
        value={this.props.tab}
        indicatorColor='primary'
        onChange={this.props.onTabChange}
      >
        <Tab icon={<img src="../img/reactl.svg" width="80px"/>} style={tabStyle}/>
        <Tab icon={<img src="../img/scalal.svg" width="80px"/>} style={tabStyle}/>
        <Tab icon={<img src="../img/hsl.svg" width="110px"/>} style={tabStyle}/>
        <Tab icon={<img src="../img/rustl.svg" width="80px"/>} style={tabStyle}/>
      </Tabs>
    )
  }

  _handleTranspile = () => {
    this.setState({
      isTranspiling: true
    })

    this.props.onTranspile()
      .then(() => {
        this.setState({
          isTranspiling: false
        })
      })
  }

  _getActionMenu = () => {
    let lang = CodeState.GetLang(this.props.tab)

    let paddingRight = "right-1"
    if (!this.props.hoverable) {
      paddingRight = "right-2"
    }

    const classes = "absolute bottom-1 z-max " + paddingRight

    const langTitle = lang.replace(/^./, str => str.toUpperCase())
    const serverStatusDescription = langTitle + " needs to be compiled. That is why your code will be sent to my server " +
      "to run and hopefully return valid HTML if you press the button below. The text above the button tells you whether " +
      "that server is currently online or not (if it is not, you cannot press the button)."

    // if server is down, display action menu as disabled
    let serverStatus = <CheckCircle className="v-mid" style={{color: "#4CAF50", fontSize: "0.75rem"}}/>
    let buttonDisabled = false
    let buttonTextColor = 'white'
    let buttonColor = '#4CAF50'
    if (!CodeState.CanTranspile(this.props.tab)) {
      serverStatus = <Error className="v-mid" style={{color: "#F44336", fontSize: "0.75rem"}}/>
      buttonDisabled = true
      buttonTextColor = '#9E9E9E'
      buttonColor = '#9E9E9E'
    }

    let actionElem = <PlayIcon className="mr1" style={{color: buttonColor, fontSize: "28px"}}/>
    if (this.state.isTranspiling) {
      buttonDisabled = true
      actionElem = <CircularProgress className="mr2" style={{marginTop: "0.125rem", marginBottom: "0.125rem"}}
                                     color="primary"
                                     size={23}
                                     thickness={4}/>
    }

    let actionMenu
    if (lang !== "react") {
      actionMenu =
        <div className={classes}>
          <Tooltip title={serverStatusDescription} placement="top">
            <div className="mf f7 pb1 white tc">
              <span className="v-mid pr1">Server:</span>
              {serverStatus}
            </div>
          </Tooltip>
          <Button variant="contained"
                  disabled={buttonDisabled}
                  color="secondary"
                  onClick={this._handleTranspile}
                  style={{textTransform: "none", color: buttonTextColor, outlineWidth: 0}}>
            {actionElem}
            <span className="mf">Run</span>
          </Button>
        </div>
    } else {
      const styles = {
        padding: "10px 12px 12px",
        background: "#1d1e24",
        borderRadius: "5px",
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 5px 0px," +
                   "rgba(0, 0, 0, 0.14) 0px 2px 2px 0px," +
                   "rgba(0, 0, 0, 0.12) 0px 3px 1px -2px"
      }
      const classes = "absolute bottom-1 z-max " + paddingRight
      const liveUpdateDescription = `Any change you make will take immediate effect, no need to compile!`

      actionMenu =
        <Tooltip title={liveUpdateDescription}>
          <div className={classes}>
            <div className="mf pb1 white tc" style={styles}>
              <AccessTime className="v-mid mr1" style={{color: "#4CAF50", fontSize: "20px"}}/>
              <span className="v-mid f6 pl1">Live</span>
            </div>
          </div>
        </Tooltip>
    }

    return actionMenu
  }

  render() {
    const options = {
      mode: this._getMode(),
      theme: 'one-dark',
      lineNumbers: true
    }

    if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
      require('codemirror/mode/xml/xml')
      require('codemirror/mode/javascript/javascript')
      require('codemirror/mode/clike/clike')
    }

    // Style differently depending on whether it is hoverable or not
    if (!this.props.hoverable) {
      return (
        <div>
          <AppBar position="static" color="default" elevation={0} style={{backgroundColor: 'white'}}>
            <Toolbar>{this._getTabs()}</Toolbar>
          </AppBar>
          <CodeMirror value={this.props.code}
                      onChange={this.props.onChange}
                      options={options}
                      autoCursor={false}/>
          {this._getActionMenu()}
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
            {this._getTabs()}
          </Toolbar>
        </AppBar>
        <CodeMirror value={this.props.code} onChange={this.props.onChange} options={options} autoCursor={false}/>
        {this._getActionMenu()}
      </Card>
    )
  }
}
