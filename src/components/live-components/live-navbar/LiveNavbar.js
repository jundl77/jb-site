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
        // Define CSS styles for the UI element
        def styles() = "font-family: Roboto Mono, monospace; color: #707070"

        // Render the UI element
        override def render(): Text.TypedTag[String] = {
          a(style := styles(), href := "${url}")("${content}")
        }
      }
    `

    let haskellCode = `
       -- :: String defines styles to be of type string
      styles :: String
      styles = "font-family: Roboto Mono, monospace"

      -- A_ is the HTML <a> tag, and A denotes that we want to
      -- add attributes to the tag
      render = a_A (A.style_ styles # A.href_ "${url}") "${content}"
    `

    let rustCode = `
      fn render() -> DOMTree<String> {
        let styles = "font-family: Roboto Mono, monospace; color: #707070";

        return html!(
            <a style=styles href="${url}">"${content}"</a>
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
      <nav className="navbar header-nav navbar-expand navbar-scroll" style={{paddingLeft: 0, paddingRight: 0}}>
        <ul className="navbar-nav center">
          <li style={{marginLeft: 0}}>{this._generateNavbarElement('/', '// Me')}</li>
          <li>{this._generateNavbarElement('projects', '// Projects')}</li>
          <li>{this._generateNavbarElement('https://github.com/jundl77', '// GitHub')}</li>
          <li
            style={{marginRight: 0}}>{this._generateNavbarElement('https://www.linkedin.com/in/julianbrendl/', '// LinkedIn')}</li>
        </ul>
      </nav>
    )
  }
}