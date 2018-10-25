import React from 'react'
import LiveComponent from './LiveComponent'
import {LiveError, LivePreview, LiveProvider} from 'react-live'
import ComponentEditor from './ComponentEditor'
import Card from '@material-ui/core/Card'

export default class VisibleLiveComponent extends LiveComponent {

  render() {

    // check if there has been an error
    let color = this._errorCheck()

    const previewStyles = {
      ...this.props.previewStyles,
      backgroundColor: color
    }

    // Get the correct code to display
    const code = this.state.code[this.state.tabValue]

    return (
      <div>
        <Card elevation={20}>
          <LiveProvider style={{display: 'flex'}} code={code} mountStylesheet={false}>
            <LivePreview onMouseEnter={this._handlePopoverOpenWithAnchor}
                         style={previewStyles}
                         onMouseLeave={this._handlePopoverClose}/>
            <div ref={this.liveError}>
              <LiveError style={{display: 'none'}}/>
            </div>
          </LiveProvider>
          <ComponentEditor code={code}
                           tab={this.state.tabValue}
                           style={{backgroundColor: 'white !important'}}
                           hoverable={false}
                           anchor={this.state.anchor}
                           onChange={this._updateCode}
                           onTabChange={this._handleTabChange}
                           visible={true}
                           onClose={this._closeEditor}/>
        </Card>
      </div>
    )
  }
}