import React from 'react'
import App from '../app/App'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import LiveProject from '../live-components/live-project/LiveProject'
import LiveParagraph from '../live-components/live-pp/LivePP'
import projectData from '../../../data/projectData'

export default class Projects extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      projectType: 'all',
    }
  }

  _handleProjectTypeChange = event => {
    this.setState({ projectType: event.target.value })
  }

  _renderHighlightedProjects = () => {
    let projects = projectData.filter(elem => elem.type === this.state.projectType || this.state.projectType === 'all')
      .filter(elem => elem.priority)

    return this._renderProjects(projects)
  }

  _renderNormalProjects = () => {
    let projects = projectData.filter(elem => elem.type === this.state.projectType || this.state.projectType === 'all')
      .filter(elem => !elem.priority)

    return this._renderProjects(projects)
  }

  _renderProjects = projects => {
    projects = projects.map((project, i) => <LiveProject key={'live-project' + i}
                                                         image={project.image}
                                                         title={project.title}
                                                         type={project.type}
                                                         description={project.description}
                                                         links={project.links}/>)

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

              <LiveParagraph classes="f3" content="Highlighted Projects"/>
              <LiveParagraph classes="f5 bc pt3 pl3 pr3 tc"
                             content="Either I am currently working on the projects listed below or I am maintaining
                                       them. Either way, you can expect them to be more or less up to date!"/>
              <div className="pt5"/>

              {this._renderHighlightedProjects()}
            </div>

            <div className="col-md-10 col-xs-9 center pt5">
              <LiveParagraph classes="f3" content="Remaining Projects"/>
              <LiveParagraph classes="f5 bc pt3 pl3 pr3 tc" content="The projects listed below are <strong>older and no
                longer maintained.</strong> Dependencies might be outdated and the project in general might no longer
                work as expected. Be wary."/>
              <div className="pt5"/>

              {this._renderNormalProjects()}
              <div className="pt5"/>
            </div>
          </div>
        </div>
      </App>
    )
  }
}