import React from 'react'
import PropTypes from 'prop-types'
import LiveComponent from '../live-component/LiveComponent'

export default class LiveParagraph extends React.Component {

  static propTypes = {
    content: PropTypes.string.isRequired
  }

  _generateParagraphElement = content => {
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
              <div style={styles}>${content}</div>
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
          {this._generateParagraphElement(this.props.content)}
        </div>
      </div>
    )
  }
}