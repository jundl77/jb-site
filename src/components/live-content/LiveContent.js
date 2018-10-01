import React from 'react'
import PropTypes from 'prop-types'
import LiveComponent from '../live-component/LiveComponent'
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
    return (
      <LiveComponent code={`
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
              <div className="row" style={{paddingTop: '8px'}}>

                <div className="col-xs-3 col-md-3 col-lg-3">
                  <img src="${props.image}"/>
                </div>

                <div className="col-xs-9 col-md-9 col-lg-9 pa3">

                  <div className="row">
                    <div className="col-xs-10 col-md-10 col-lg-10 pb2">
                      <h2 style={titleStyles} className="f3">${props.title}</h2>
                    </div>

                    <div className="col-xs-2 col-md-2 col-lg-2 pb2">
                      <a style={titleStyles} href="${props.link}" target="_blank">See more</a>
                    </div>
                  </div>

                  <p style={textStyles}>${props.description}</p>
                </div>
              </div>
            )
          }
        }
      `}/>
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