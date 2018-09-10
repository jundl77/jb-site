import React from 'react'
import App from '../app/App'
import LiveParagraph from '../live-pp/LivePP'

export default class Main extends React.Component {

  render() {
    return (
      <App>
        <div className="container pt5">
          <div className="row">
            <div className="col-md-10 col-xs-9 center">
              <LiveParagraph content="Hover over any element on this website for a little surprise. :)"/>
            </div>
          </div>
        </div>
      </App>
    )
  }
}