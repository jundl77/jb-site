import React from 'react'
import LiveComponent from '../live-component/LiveComponent'

export default class LiveNavbar extends React.Component {

  _generateNavbarElement = (url, content) => {
    return (
      <LiveComponent code={`
        class extends React.Component {
          render() {

            // Define CSS styles for the UI element
            const styles = {
              fontFamily: 'Roboto Mono, monospace'
            }

            // Render the UI element
            return (
              <a style={styles} href="${url}">${content}</a>
            )
          }
        }
      `}/>
    )
  }

  render() {
    return (
      <nav className="navbar header-nav header-nav-light navbar-expand-lg">
        <ul className="navbar-nav center">
          <li>{this._generateNavbarElement('/', '// Me')}</li>
          <li>{this._generateNavbarElement('projects', '// Projects')}</li>
          <li>{this._generateNavbarElement('https://github.com/jundl77', '// GitHub')}</li>
          <li>{this._generateNavbarElement('https://www.linkedin.com/in/julianbrendl/', '// LinkedIn')}</li>
        </ul>
      </nav>
    )
  }
}