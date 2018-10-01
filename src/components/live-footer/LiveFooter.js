import React from 'react'
import LiveComponent from '../live-component/LiveComponent'

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
                            No ewaks came to harm during the creation of this website
                          </p>
                          <i className="icon f6 dib ti-heart" style={{color: "#ff4850"}}/>
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