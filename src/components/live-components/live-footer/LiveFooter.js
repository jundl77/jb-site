import React from 'react'
import LiveComponent from '../LiveComponent'

export default class LiveFooter extends React.Component {

  _generateFooterElement = () => {
    let reactCode = `
      class extends React.Component {
        render() {

          // Define CSS styles for the UI element
          const styles = {
            fontFamily: 'Roboto Mono, monospace',
            color: 'white'
          }

          // Render the UI element
          return (
            <footer className="footer pl3 pr3 pt2 pb2">
              <section className="footer-section">
                  <div className="footer-copy">
                    <div className="row">
                      <div className="col-12">
                        <p className="f6 dib pr2" style={styles}>
                          Contact @
                          <a style={{color: '#408EE0'}}href="mailto:julianbrendl@gmail.com">
                          julianbrendl@gmail.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
              </section>
            </footer>
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

    let rustCode = `
      fn render() -> DOMTree<String> {
        let styles = "font-family: Roboto Mono, monospace; color: white";

        return html!(
          <div class="footer pl3 pr3 pt2 pb2 footer-section footer-copy">
            <div class="row">
              <div class="col-12">
                <p class="f6 dib pr2" style=styles>
                  "Contact @"
                  <a style="color: #408EE0" href="mailto:julianbrendl@gmail.com">
                  "julianbrendl@gmail.com"</a>
                </p>
              </div>
            </div>
          </div>
        );
      }
    `

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
        {this._generateFooterElement()}
      </div>
    )
  }
}