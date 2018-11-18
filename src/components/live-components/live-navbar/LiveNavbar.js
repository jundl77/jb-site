import React from 'react'
import LiveComponent from '../LiveComponent'

export default class LiveNavbar extends React.Component {

  _generateNavbarElement = (url, content) => {
    let reactCode = `
      class extends React.Component {
        render() {

          // Define CSS styles for the UI element
          const styles = {
            fontFamily: 'Roboto Mono, monospace',
            color: '#707070'
          }

          // Render the UI element
          return (
            <a style={styles} href="${url}">${content}</a>
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
      <nav className="navbar header-nav navbar-expand navbar-scroll" style={{paddingLeft: 0, paddingRight: 0}}>
        <ul className="navbar-nav center">
          <li style={{marginLeft: 0}}>{this._generateNavbarElement('/', '// Me')}</li>
          <li>{this._generateNavbarElement('projects', '// Projects')}</li>
          <li>{this._generateNavbarElement('https://github.com/jundl77', '// GitHub')}</li>
          <li style={{marginRight: 0}}>{this._generateNavbarElement('https://www.linkedin.com/in/julianbrendl/', '// LinkedIn')}</li>
        </ul>
      </nav>
    )
  }
}