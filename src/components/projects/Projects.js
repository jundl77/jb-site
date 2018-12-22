import React from 'react'
import App from '../app/App'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import LiveContent from '../live-components/live-content/LiveContent'
import LiveParagraph from '../live-components/live-pp/LivePP'

export default class Projects extends React.Component {

  constructor(props) {
    super(props)

    this._populateProjects()

    this.state = {
      projectType: 'all',
    }
  }

  _handleProjectTypeChange = event => {
    this.setState({ projectType: event.target.value })
  }

  _populateProjects = () => {
    this.activeProjects = [
      ['dev', <LiveContent key="acp1"
                           image="img/exemplator.png"
                           type='dev'
                           title="Exemplator"
                           link="https://exemplator.julianbrendl.com"
                           description="A search tool to easily and seamlessly find Java code samples."/>],
      ['pm', <LiveContent key="acp2"
                           image="img/auto-format.png"
                           type='pm'
                           title="Code Auto-Formatting Tool"
                           link="https://github.com/jundl77/auto-format"
                           description="A light-weight javascript auto-formatting library for code snippets."/>]
    ]

    this.archivedProjects = [
      ['dev', <LiveContent key="arp1"
                           image="img/r1.jpg"
                           type='dev'
                           title="Truffle Hog"
                           link="https://github.com/truffle-hog"
                           description="A network analysis tool."/>],
      ['pm', <LiveContent key="arp2"
                           image="img/digidali.png"
                           type='pm'
                           title="Digi Dali"
                           link="https://digidali.co"
                           description="A laser engraving robot built out of legos."/>],
      ['dev', <LiveContent key="arp3"
                           image="img/r1.jpg"
                           type='dev'
                           title="Izou"
                           link="https://github.com/intellimate"
                           description="A Java API for home automation."/>],
      ['data', <LiveContent key="arp4"
                           image="img/sayhi.png"
                           type='data'
                           title="SayHi.ai"
                           link="https://github.com/jundl77/auto-format"
                           description="Short text goes here"/>]
    ]
  }

  _filterProjects = projects => {
      return projects.filter(elem => elem[0] === this.state.projectType || this.state.projectType === 'all')
  }

  _renderProjects = projects => {
    projects = projects.map(elem => elem[1])

    let zip = (list1, list2) => list1.map((elem, i) => [elem, list2[i]])
    let tuples = zip(projects, projects.slice(1)).filter((elem, i) => i % 2 === 0)

    return tuples.map((tuple, i) =>
      <div key={"apr" + i} className="row">
        <div className="col-lg-6 col-10 center">
          {tuple[0]}
        </div>
        <div className="col-lg-6 col-10 center">
          {tuple[1]}
        </div>
      </div>)
  }

  render() {
    let activeProjects = this._filterProjects(this.activeProjects)
    let archiveProjects = this._filterProjects(this.archivedProjects)

    return (
      <App title="Projects">
        <div className="container pt4">
          <div className="row">
            <div className="col-md-10 col-xs-9 center tc">
              <FormControl component="fieldset">
                <RadioGroup
                  value={this.state.projectType}
                  onChange={this._handleProjectTypeChange}
                  row
                >
                  <FormControlLabel
                    control={<Radio color="primary" />}
                    value='all'
                    label="All Projects"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    control={<Radio color="primary" />}
                    value='dev'
                    label="Software Projects"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    control={<Radio color="primary" />}
                    value='pm'
                    label="Project Management Projects"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    control={<Radio color="primary" />}
                    value='data'
                    label="Data Science Projects"
                    labelPlacement="end"
                  />
                </RadioGroup>
              </FormControl>
            </div>

            <div className="col-md-10 col-xs-9 center pt4">

              <LiveParagraph classes="f3" content="Active Projects"/>
              <LiveParagraph classes="f5 bc pt3 pl3 pr3 tc"
                             content="Either I am currently working on the projects listed below or I am maintaining
                                       them. Either way, you can expect them to be more or less up to date!"/>
              <div className="pt5"/>

              {this._renderProjects(activeProjects)}
            </div>

            <div className="col-md-10 col-xs-9 center pt5">
              <LiveParagraph classes="f3" content="Archived Projects"/>
              <LiveParagraph classes="f5 bc pt3 pl3 pr3 tc" content="The projects listed below are <strong>older and no
                longer maintained.</strong> Dependencies might be outdated and the project in general might no longer
                work as expected. Be wary."/>
              <div className="pt5"/>

              {this._renderProjects(archiveProjects)}
              <div className="pt5"/>
            </div>
          </div>
        </div>
      </App>
    )
  }
}