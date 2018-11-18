import React from 'react'
import PropTypes from 'prop-types'
import LiveComponent from '../LiveComponent'

export default class LiveParagraph extends React.Component {

  static propTypes = {
    classes: PropTypes.string,
    content: PropTypes.string.isRequired
  }

  _generateParagraphElement = props => {
    let reactCode = `
      class extends React.Component {
        render() {

          // Define CSS styles for the UI element
          const styles = {
            fontFamily: 'Roboto Mono, monospace'
          }

          // Render the UI element
          return (
            <div style={styles} className="${props.classes}">${props.content}</div>
          )
        }
      }
      `

    let scalaCode = `
      new ReactComponent {
        def myName() = "Julian Brendl"

        override def render(): Text.TypedTag[String] = {
          div(
            h1("Test"),
            div(
              p("My name is: " + myName()),
              p("This is my second paragraph"),
              p("This is my third paragraph")
            )
          )
        }
      }`

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
      <div>
        {this._generateParagraphElement(this.props)}
      </div>
    )
  }
}