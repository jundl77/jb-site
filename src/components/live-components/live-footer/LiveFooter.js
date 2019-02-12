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
            <div className="footer footer-copy">
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
          )
        }
      }
    `

    let scalaCode = `
      new ReactComponent {
        def styles() = "font-family: Roboto Mono, monospace; color: white"
        def email() = "julianbrendl@gmail.com"

        override def render(): Text.TypedTag[String] = {
          div(\`class\` := "footer footer-copy") (
            div(\`class\` := "row") (
              div(\`class\` := "col-12") (
                p(\`class\` := "f6 dib pr2", style := styles()) (
                  "Contact @ ",
                  a(style := "color: #408EE0", href := "mailto:" + email()) (email())
                )
              )
            )
          )
        }
      }`

    let haskellCode = `
      -- define the CSS styles used 
      font = "font-family: Roboto Mono, monospace;"
      textClass = "f6 dib pr2"

      -- render is the main function, it builds the footer element
      render = div_A (A.class_ "footer footer-copy") (row text)
  
      -- below are the helper functions that generate HTML components to display the footer
      row content = div_A (A.class_ "row") $ div_A (A.class_ "col-12") content
      text = p_A (A.class_ textClass # A.style_ (font ++ "color: white")) "Contact @ " # email "julianbrendl@gmail.com"
      email target = a_A (A.class_ textClass # A.style_ (font ++ "color: #408EE0") # A.href_ ("mailto:" ++ target)) target
    `

    let rustCode = `
      fn render() -> DOMTree<String> {
        let styles = "font-family: Roboto Mono, monospace; color: white";

        return html!(
          <div class="footer footer-copy">
            <div class="row">
              <div class="col-12">
                <p class="f6 dib pr2" style=styles>
                  "Contact @ "
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