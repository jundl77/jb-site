import React from 'react'
import LiveComponent from '../live-component/LiveComponent'

export default class LiveHero extends React.Component {

  _generateHeroElement = content => {
    return (
      <LiveComponent previewStyles={{margin: 'auto'}} code={`
        class extends React.Component {
          render() {

            // Define CSS styles for the UI element
            const styles = {
              fontFamily: 'Roboto Mono, monospace'
            }

            // Render the UI element
            return (
              <h1 style={styles}>${content}</h1>
            )
          }
        }
      `}/>
    )
  }

  render() {
    return (
      <div id="nav-bar-logo" className="row pt2 pl2 pr2 pb3">
        <div className="col-md-10 col-xs-9 center">
          {this._generateHeroElement('Julian Brendl')}
        </div>
      </div>
    )
  }
}