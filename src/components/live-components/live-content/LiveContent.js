import React from 'react'
import PropTypes from 'prop-types'
import LiveComponent from '../LiveComponent'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export default class LiveContent extends React.Component {

  static propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }

  _generateContentElement = props => {
    let reactCode = `
      class extends React.Component {
        render() {

          // Define CSS styles for the UI element
          const titleStyles = {
            fontFamily: 'Roboto Mono, monospace'
          }

          // Define CSS styles for the UI element
          const textStyles = {
            fontFamily: 'Roboto Mono, monospace',
            color: '#707070'
          }

          // Render the UI element
          return (
            <div className="pl2 pr2">
              <div className="row pb3" style={{paddingTop: '8px'}}>
                <div className="col-12 center">
                  <img src="${props.image}"/>
                </div>
              </div>

              <div className="row pb1" style={{paddingTop: '8px'}}>
                <div className="col-12">
                    <h2 style={titleStyles} className="f3">${props.title}</h2>
                </div>
              </div>

              <div className="row pb1">
                <div className="col-12">
                    <a style={titleStyles} href="${props.link}" target="_blank">See more</a>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <p style={textStyles}>${props.description}</p>
                </div>
              </div>
            </div>
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
      <Card elevation={10} className="mb4">
        <CardContent>
          {this._generateContentElement(this.props)}
        </CardContent>
      </Card>
    )
  }
}