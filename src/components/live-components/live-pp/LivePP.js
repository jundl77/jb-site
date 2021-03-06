import React from 'react'
import PropTypes from 'prop-types'
import LiveComponent from '../LiveComponent'

export default class LiveParagraph extends React.Component {

  static propTypes = {
    classes: PropTypes.string,
    style: PropTypes.object,
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
        // Define CSS styles for the UI element
        def styles() = "font-family: Roboto Mono, monospace"

        // Render the UI element
        override def render(): Text.TypedTag[String] = {
          div(style := styles(), \`class\` := "${props.classes}")("${props.content}")
        }
      }
    `

    let haskellCode = `
      -- :: String defines styles to be of type string
      styles :: String
      styles = "font-family: Roboto Mono, monospace"

      -- div_ is the HTML <div> tag, and A denotes that we want to add attributes to the tag
      render = div_A (A.style_ styles # A.class_ "${props.classes}") "${props.content}"
    `

    let rustCode = `
      fn render() -> DOMTree<String> {
        let styles = "font-family: Roboto Mono, monospace";

        return html!(
            <div style=styles class="${props.classes}">
              "${props.content}"
            </div>
        );
      }
    `

    let styles = {
      margin: 'auto',
      ...this.props.style
    }

    return (
      <LiveComponent previewStyles={styles} code={{
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