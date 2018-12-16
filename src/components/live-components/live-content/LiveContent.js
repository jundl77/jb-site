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

          // Render the UI element
          return (
            <div>
              <div className="row pb3">
                <div className="col-12 center">
                  <img src="${props.image}"/>
                </div>
              </div>
              
              <div className="pl3 pr3">
                <div className="row pb1" style={{paddingTop: '8px'}}>
                  <div className="col-12">
                      <h2 className="f3 mf">${props.title}</h2>
                  </div>
                </div>
  
                <div className="row pb1">
                  <div className="col-12">
                      <a style={{color: "#2196F3"}} className="mf" href="${props.link}" target="_blank">See more</a>
                  </div>
                </div>
  
                <div className="row">
                  <div className="col-12">
                    <p style={{color: "#707070"}} className="mf">${props.description}</p>
                  </div>
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
        <CardContent style={{padding: 0}}>
          {this._generateContentElement(this.props)}
        </CardContent>
      </Card>
    )
  }
}