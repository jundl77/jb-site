import React from 'react'
import App from '../app/App'
import LiveEdit from './live-edit/LiveEdit'

export default class Main extends React.Component {
    render() {
      return (
        <App>
            <div>
                <div>
                    Write some component classes...
                </div>
                <LiveEdit code="<h1>Hello World</h1>"/>
            </div>
        </App>
      )
    }
  }