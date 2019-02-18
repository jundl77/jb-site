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
    
    // Define the color of a link
    const linkColor = {
      color: '#408EE0'
    }

    // Render the UI element
    return (
      <div style={styles}>
        <h1 className="pb3">Hi!</h1>

        <div className="pb3">
          I'm Julian, I'm 22, and I'm a software engineer at Optiver!
        </div>
  
        <div className="pb3">
          I have a bachelors degree in computer-science from the KIT in Germany, where I focused on data science
          and machine learning (NLP). I have a solid background in programming, and I love to create
          new things. I enjoy any challenge, with a special affinity for data related problems.
        </div>
  
        <div className="pb3">
          In my spare time I experiment with various different ideas (e.g. this website). For more,
          follow me on <a style={linkColor} href="https://github.com/jundl77" target="_blank">GitHub</a>. 
        </div>
        
        <h1 className="pb3 pt3">What is this Website?</h1>

        <div className="pb3">
          Glad you ask! If you <strong>hover over any element on this website </strong>
          (except for this one), you will be able to edit the component using multiple different languages, of which
          most are not meant for web programming, hehe. This was part of the challenge, how do you edit a website in
          Scala, Haskell or Rust?
        </div>
        
        <div className="pb3">
          If you are curious, check out the
          <a style={linkColor} href="https://github.com/jundl77/jb-site" target="_blank">GitHub repository</a>!
          Now try it out press some of the buttons below!
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
            <div className="col-md-9 col-xs-9 center">
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