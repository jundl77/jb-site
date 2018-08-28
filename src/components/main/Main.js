import React from 'react'
import App from '../app/App'
import LiveEdit from './live-edit/LiveEdit'

export default class Main extends React.Component {
  render() {
    return (
      <App>
        <div>
          <h1>Write some fancy code</h1>
        </div>

        <LiveEdit>
          <h1>Hello World!</h1>
        </LiveEdit>
      </App>
    )
  }
}