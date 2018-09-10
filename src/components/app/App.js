import React from 'react'
import PropTypes from 'prop-types'
import MuiTheme from '../theme/MuiTheme'
import LiveHero from '../live-hero/LiveHero'
import LiveNavbar from '../live-navbar/LiveNavbar'

export default class App extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }

  render() {
    return (
      <div className="pa5">
        <MuiTheme>
          <div>
            <div className="container">
              <LiveHero/>
              <LiveNavbar/>
            </div>

            {this.props.children}
          </div>
        </MuiTheme>
      </div>
    )
  }
}