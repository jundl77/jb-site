import React from 'react'
import App from '../app/App'
import VisibleLiveComponent from '../live-components/VisibleLiveComponent'

let email = "julianbrendl@gmail.com"

let reactCode = `
class extends React.Component {
  render() {

    // Define CSS styles for the UI element
    const styles = {
      fontFamily: 'Roboto Mono, monospace',
      padding: '2rem',
    }

    // Render the UI element
    return (
      <div style={styles}>
        <h1 className="pb3">Hi!</h1>
        <div className="pb3">I'm Julian, and I am a comp-sci student in Germany.</div>
        <div className="pb3">
          <strong>Hover over any element on this website </strong>
          (except for this one) for a little surprise.
        </div>
        
        <div>
            Shoot me an email at <a style={{color: '#408EE0'}}href="mailto:${email}">${email}</a> to contact me.
        </div>
      </div>
    )
  }
}
`
let scalaCode = `
  new ReactComponent {
    // Define CSS styles for the UI element
    def styles() = "font-family: Roboto Mono, monospace; padding: 2rem"

    // Render the UI element
    override def render(): Text.TypedTag[String] = {
    
      // Render introduction
      div(style := styles()) (
        h1(\`class\` := "pb3")("Hi!"),
        div(\`class\` := "pb3")("I'm Julian, and I am a comp-sci student in Germany."),
        div(\`class\` := "pb3")(
          strong("Hover over any element on this website"),
          " (except for this one) for a little surprise."
        ),
        
        // Render contact section
        div()(
          "Shoot me an email at ",
          a(style := "color: #408EE0", href := "mailto:${email}")("${email}"),
          " to contact me."
        )
      )
    }
  }
`

let haskellCode = ''

let rustCode = ''

export default class Main extends React.Component {

  render() {
    return (
      <App title="Julian Brendl">
        <div className="container pt5">
          <div className="row pb5">
            <div className="col-md-10 col-xs-9 center">
              <VisibleLiveComponent previewStyles={{margin: 'auto'}} code={{
                'react': reactCode,
                'scala': scalaCode,
                'haskell': haskellCode,
                'rust': rustCode
              }}/>
            </div>
          </div>
        </div>
      </App>
    )
  }
}