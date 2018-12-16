import React from 'react'
import PropTypes from 'prop-types'
import MuiTheme from './theme/MuiTheme'
import LiveHero from '../live-components/live-hero/LiveHero'
import LiveNavbar from '../live-components/live-navbar/LiveNavbar'
import LiveFooter from '../live-components/live-footer/LiveFooter'
import ErrorBar from './error-bar/ErrorBar'

export default class App extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
  }

  render() {
    return (
      <div>
        <MuiTheme>
          <div className="pt4 pa2" style={{minHeight: '100vh'}}>
            <div>
              <div className="container">
                <LiveHero title={this.props.title}/>
                <LiveNavbar/>
              </div>
              {this.props.children}
            </div>
          </div>
          <ErrorBar/>
          <LiveFooter/>
        </MuiTheme>
      </div>
    )
  }
}