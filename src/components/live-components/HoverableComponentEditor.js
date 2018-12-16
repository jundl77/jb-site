import React from 'react'
import PropTypes from 'prop-types'
import ComponentEditor from './ComponentEditor'
import Popover from '@material-ui/core/Popover'

export default class HoverableComponentEditor extends React.Component {

  static propTypes = {
    code: PropTypes.string.isRequired,
    tab: PropTypes.number.isRequired,
    visible: PropTypes.bool.isRequired,
    anchor: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    onTranspile: PropTypes.func.isRequired,
    onTabChange: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Popover
        open={this.props.visible}
        anchorEl={this.props.anchor}
        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
        transformOrigin={{horizontal: 'left', vertical: 'top'}}
      >
        <ComponentEditor code={this.props.code}
                         tab={this.props.tab}
                         hoverable={true}
                         onTabChange={this.props.onTabChange}
                         visible={this.props.visible}
                         onTranspile={this.props.onTranspile}
                         onChange={this.props.onChange}
                         onClose={this.props.onClose}/>
      </Popover>
    )
  }
}