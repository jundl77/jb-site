import React from 'react'
import LiveComponent from '../LiveComponent'
import PropTypes from 'prop-types'

export default class LiveHero extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired
  }

  _generateHeroElement = content => {
    let reactCode = `
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
    `

    let scalaCode = `
      new ReactComponent {
        // Define CSS styles for the UI element
        def styles() = "font-family: Roboto Mono, monospace"

        // Render the UI element
        override def render(): Text.TypedTag[String] = {
          h1(style := styles())("${content}")
        }
      }
    `

    let haskellCode = ''

    let rustCode = ''

    return (
      <LiveComponent previewStyles={{margin: 'auto'}} code={{
        'react': reactCode,
        'scala': scalaCode,
        'haskell': haskellCode,
        'rust': rustCode
      }}/>
    )
  }

  render() {
    return (
      <div id="nav-bar-logo" className="row pt2 pl2 pr2 pb3">
        <div className="col-md-10 col-xs-9 center">
          {this._generateHeroElement(this.props.title)}
        </div>
      </div>
    )
  }
}