import React from 'react'
import App from '../app/App'
import VisibleLiveComponent from '../live-component/VisibleLiveComponent'

export default class Main extends React.Component {

  render() {
    return (
      <App title="Julian Brendl">
        <div className="container pt5">
          <div className="row pb5">
            <div className="col-md-10 col-xs-9 center">
              <VisibleLiveComponent previewStyles={{margin: 'auto'}} code={`
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
                        <div>
                          <strong>Hover over any element on this website </strong>
                          (except for this one) for a little surprise.
                        </div>
                      </div>
                    )
                  }
                }
              `}/>
            </div>
          </div>
        </div>
      </App>
    )
  }
}