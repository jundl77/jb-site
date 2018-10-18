import React from 'react'
import LiveComponent from '../LiveComponent'

export default class LiveFooter extends React.Component {

  _generateFooterElement = () => {
    return (
      <LiveComponent previewStyles={{margin: 'auto'}} code={`
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
      `}/>
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