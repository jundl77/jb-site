import React from 'react'
import PropTypes from 'prop-types'
import LiveComponent from '../LiveComponent'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export default class LiveProject extends React.Component {

  static propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    links: PropTypes.array.isRequired
  }

  _generateLinks = () => {
    let reactCode = this.props.links.reduce((total, elem) => total +
      `<span className="mf f5">
                      <a style={{color: "#2196F3"}} href="${elem[1]}" target="_blank" rel="noopener noreferrer">
                        ${elem[0]}
                      </a>
                      <span>  </span>
                    </span>\n                    `, '')

    return {
      react: reactCode,
      scala: '',
      haksell: '',
      rust: ''
    }
  }

  _generateContentElement = props => {

    let links = this._generateLinks()
    let descr = ''

    switch (this.props.type) {
      case 'dev':
        descr = 'Software'
        break
      case 'pm':
        descr = 'Project Management'
        break
      case 'data':
        descr = 'Data Science'
        break
      default:
        // no-op
    }


    let reactCode = `
      class extends React.Component {
        render() {

          // Render the UI element
          return (
            <div>
              <div className="row">
                <div className="col-12 center">
                  <img src="${props.image}"/>
                </div>
              </div>
              
              <div className="pl3 pr3 pt3 relative"
                   style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 15px -1px", minHeight: "12rem"}}>
                <div className="row">
                  <div className="col-12 pb3">
                    <div className="mf f5">${descr}</div>
                  </div>
                </div>
                
                <div className="row pb1">
                  <div className="col-12">
                      <h2 className="f3 mf">${props.title}</h2>
                  </div>
                </div>
  
                <div className="row pb3">
                  <div className="col-12">
                    ${links['react']}
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