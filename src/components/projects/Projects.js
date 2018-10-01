import React from 'react'
import App from '../app/App'
import LiveContent from '../live-content/LiveContent'
import LiveParagraph from '../live-pp/LivePP'

export default class Projects extends React.Component {

  render() {
    return (
      <App title="Projects">
        <div className="container pt5">
          <div className="row">
            <div className="col-md-10 col-xs-9 center">

              <LiveParagraph classes="f3" content="Maintained Projects"/>
              <LiveParagraph classes="f5 bc pt3 pl3 pr3 tc" content="The projects listed below are <strong>older and no
              longer maintained.</strong> Dependencies might be outdated and the project in general might no longer
              work as expected. Be warned."/>
              <div className="pt5"/>

              <LiveContent image="img/r1.jpg"
                           title="Search Tool for Java Code Samples"
                           link="https://github.com/truffle-hog"
                           description="Developed an Atom plugin and a React based website with a server that takes a
                           piece of Java code and searches GitHub for other, semantically similar pieces of Java code.
                           The results can be used as guiding examples while coding."/>
              <LiveContent image="img/r1.jpg"
                           title="Auto-Formatting Tool"
                           link="https://github.com/jundl77/auto-format"
                           description="Built a Javascript/ES6 library that can auto-format blocks of Java code."/>

              <LiveParagraph classes="f3 pt5" content="Archived Projects"/>
              <LiveParagraph classes="f5 bc pt3 pl3 pr3 tc" content="The projects listed below are <strong>older and no
              longer maintained.</strong> Dependencies might be outdated and the project in general might no longer
              work as expected. Be warned."/>
              <div className="pt5"/>


              <LiveContent image="img/r1.jpg"
                           title="Network Analysis Tool"
                           link="https://github.com/truffle-hog"
                           description="A 6 man project for KIT / the Fraunhofer Institute. The tool we built, written
                           in Java and C, works together with snort to visually represent a PROFINET network graph."/>
              <LiveContent image="img/r1.jpg"
                           title="Laser Engraving Robot"
                           link="https://digidali.co"
                           description="Built from scratch a Lego robot and a website to control the robot using C,
                           C#, Java, PHP, Javascript and HTML/CSS to laser engrave pictures onto a piece of wood.."/>
              <LiveContent image="img/r1.jpg"
                           title="Java API for Home Automation"
                           link="https://github.com/intellimate"
                           description="Built a big home automation API written in Java. It runs on the Raspberry PI
                           and manages interactions between apps, which can be installed on it."/>
              <LiveContent image="img/r1.jpg"
                           title="Human Response API for Conversational Bots"
                           link="https://github.com/jundl77/auto-format"
                           description="Built an API (in React and NodeJS) that generates engaging responses with
                           varying personalities in order to simulate human speech for conversational bots."/>
              <div className="pt5"/>
            </div>
          </div>
        </div>
      </App>
    )
  }
}