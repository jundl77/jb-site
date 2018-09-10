import React from 'react'
import App from '../app/App'
import LiveParagraph from '../live-pp/LivePP'

export default class Projects extends React.Component {

  render() {
    return (
      <App>
        <div className="container pt5">
          <div className="row">
            <div className="col-md-10 col-xs-9 center">
              <LiveParagraph content="See my awesome projects here!"/>
            </div>
          </div>
        </div>
      </App>
    )
  }
}