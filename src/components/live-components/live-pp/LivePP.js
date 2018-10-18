import React from 'react'
import PropTypes from 'prop-types'
import LiveComponent from '../LiveComponent'

export default class LiveParagraph extends React.Component {

  static propTypes = {
    classes: PropTypes.string,
    content: PropTypes.string.isRequired
  }

  _generateParagraphElement = props => {
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
              <div style={styles} className="${props.classes}">${props.content}</div>
            )
          }
        }
      `}/>
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