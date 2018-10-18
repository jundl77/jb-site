import React from 'react'
import LiveComponent from '../LiveComponent'

export default class LiveNavbar extends React.Component {

  _generateNavbarElement = (url, content) => {
    return (
      <LiveComponent code={`
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
      `}/>
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