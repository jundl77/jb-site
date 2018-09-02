import React from 'react'
import MuiTheme from './theme/MuiTheme'
import LiveComponent from './live-component/LiveComponent'

export default class Main extends React.Component {
  render() {
    return (
      <div className="main-c">
        <MuiTheme>
          <div>
            <div>
              <h4>Write some fancy code</h4>
            </div>

            <LiveComponent>
              <h1>Hello World!</h1>
            </LiveComponent>

            <div>
              <h4>Write some fancy code</h4>
            </div>
            <div>
              <h4>Write some fancy code</h4>
            </div>
            <div>
              <h4>Write some fancy code</h4>
            </div>
            <div>
              <h4>Write some fancy code</h4>
            </div>
            <div>
              <h4>Write some fancy code</h4>
            </div>
          </div>
        </MuiTheme>
      </div>
    )
  }
}