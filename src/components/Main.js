import React from 'react'
import MuiTheme from './theme/MuiTheme'
import LiveHero from './live-hero/LiveHero'
import LiveNavbar from './live-navbar/LiveNavbar'
import LiveParagraph from './live-pp/LivePP'

export default class Main extends React.Component {
  render() {
    return (
      <div className="main-c">
        <MuiTheme>
          <div>
            <div className="container">
              <LiveHero/>
              <LiveNavbar/>
            </div>

            <div className="container pt5">
              <div className="row">
                <div className="col-md-10 col-xs-9 center">
                  <LiveParagraph content="Hover over any element on this website for a little surprise. :)"/>
                </div>
              </div>
            </div>
          </div>
        </MuiTheme>
      </div>
    )
  }
}