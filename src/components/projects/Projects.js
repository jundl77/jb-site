import React from 'react'
import App from '../app/App'
import LiveContent from '../live-components/live-content/LiveContent'
import LiveParagraph from '../live-components/live-pp/LivePP'

export default class Projects extends React.Component {

  render() {
    return (
      <App title="Projects">
        <div className="container pt5">
          <div className="row">
            <div className="col-md-10 col-xs-9 center">

              <LiveParagraph classes="f3" content="Maintained Projects"/>
              <LiveParagraph classes="f5 bc pt3 pl3 pr3 tc"
                             content="Either I am currently working on the projects listed below or I am maintaining
                                     them. Either way, you can expect them to be more or less up to date!"/>
              <div className="pt5"/>

              <div className="row">
                <div className="col-lg-6 col-10 center">
                  <LiveContent image="img/r1.jpg"
                               title="Exemplator"
                               link="https://exemplator.julianbrendl.com"
                               description="A search tool to easily and seamlessly find Java code samples."/>
                </div>
                <div className="col-lg-6 col-10 center">
                  <LiveContent image="img/r1.jpg"
                               title="Auto-Formatting Tool"
                               link="https://github.com/jundl77/auto-format"
                               description="A light-weight javascript auto-formatting library for code snippets."/>
                </div>
              </div>

              <LiveParagraph classes="f3 pt5" content="Archived Projects"/>
              <LiveParagraph classes="f5 bc pt3 pl3 pr3 tc" content="The projects listed below are <strong>older and no
              longer maintained.</strong> Dependencies might be outdated and the project in general might no longer
              work as expected. Be wary."/>
              <div className="pt5"/>


              <div className="row">
                <div className="col-lg-6 col-10 center">
                  <LiveContent image="img/r1.jpg"
                               title="Truffle Hog"
                               link="https://github.com/truffle-hog"
                               description="A network analysis tool."/>
                </div>
                <div className="col-lg-6 col-10 center">
                  <LiveContent image="img/r1.jpg"
                               title="Digi Dali"
                               link="https://digidali.co"
                               description="A laser engraving robot built out of legos."/>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-10 center">
                  <LiveContent image="img/r1.jpg"
                               title="Izou"
                               link="https://github.com/intellimate"
                               description="A Java API for home automation."/>
                </div>
                <div className="col-lg-6 col-10 center">
                  <LiveContent image="img/r1.jpg"
                               title="SayHi.ai"
                               link="https://github.com/jundl77/auto-format"
                               description="Short text goes here"/>
                </div>
              </div>
              <div className="pt5"/>
            </div>
          </div>
        </div>
      </App>
    )
  }
}