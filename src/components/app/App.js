import React from 'react'
import PropTypes from 'prop-types'
import MuiTheme from '../theme/MuiTheme'
import LiveHero from '../live-hero/LiveHero'
import LiveNavbar from '../live-navbar/LiveNavbar'
import LiveFooter from '../live-footer/LiveFooter'

export default class App extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
  }

  render() {
    return (
      <div>
        <div className="pt4 pa2" style={{minHeight: '95vh'}}>
          <MuiTheme>
            <div>
              <div className="container">
                <LiveHero title={this.props.title}/>
                <LiveNavbar/>
              </div>
              {this.props.children}
            </div>
          </MuiTheme>
        </div>
        <LiveFooter/>
      </div>
    )
  }
}