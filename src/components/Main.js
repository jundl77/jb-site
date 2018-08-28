import React from 'react'
import MuiTheme from './theme/MuiTheme'
import LiveEdit from './live-edit/LiveEdit'

export default class Main extends React.Component {
  render() {
    return (
      <MuiTheme>
        <div>
          <div>
            <h1>Write some fancy code</h1>
          </div>

          <LiveEdit>
            <h1>Hello World!</h1>
          </LiveEdit>
        </div>
      </MuiTheme>
    )
  }
}