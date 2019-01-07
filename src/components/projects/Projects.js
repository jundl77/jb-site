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

    this.projects = projectData.map((project, i) => [project, <LiveProject key={'live-project' + i}
                                                                                     image={project.image}
                                                                                     title={project.title}
                                                                                     type={project.type}
                                                                                     description={project.description}
                                                                                     links={project.links}/>])

    this.state = {
      projectType: 'all',
    }
  }

  _handleProjectTypeChange = event => {
    this.setState({ projectType: event.target.value })
  }

  _renderHighlightedProjects = () => {
    let projects = this.projects.filter(elem => elem[0].type === this.state.projectType || this.state.projectType === 'all')
      .filter(elem => elem[0].priority)

    return this._renderProjects(projects)
  }

  _renderNormalProjects = () => {
    let projects = this.projects.filter(elem => elem[0].type === this.state.projectType || this.state.projectType === 'all')
      .filter(elem => !elem[0].priority)

    return this._renderProjects(projects)
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
    return (
      <App title="Projects">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-xs-9 center pt5">
              <LiveParagraph classes="f5 tj pb3"
                             content="These are my projects that I have worked on over the years. Some are new and
                             up-to-date, but others might not be. Some dependencies might be
                             outdated and the project itself might no longer work as expected."/>

              <LiveParagraph classes="f5 tj pb3"
                             style={{margin: '0 !important'}}
                             content="Below you can choose the type of project you want to see:"/>
            </div>
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
                    label="Software"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    control={<Radio color="primary" />}
                    value='pm'
                    label="Project Management"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    control={<Radio color="primary" />}
                    value='data'
                    label="Data Science"
                    labelPlacement="end"
                  />
                </RadioGroup>
              </FormControl>
            </div>

            <div className="col-md-10 col-xs-9 center pt5">

              <LiveParagraph classes="f3 pb3" content="Highlighted Projects"/>
              <LiveParagraph classes="f5 pb5"
                             content="Below you can choose the type of project you want to see:"/>
              {this._renderHighlightedProjects()}
            </div>

            <div className="col-md-10 col-xs-9 center pt5">
              <LiveParagraph classes="f3 pb3" content="More Projects"/>
              <LiveParagraph classes="f5 pb5"
                             content="Below you can choose the type of project you want to see:"/>
              {this._renderNormalProjects()}
            </div>

            <div className="col-md-10 col-xs-9 center pt5">
              <LiveParagraph classes="f3 pb3" content="Even More Projects"/>
              <LiveParagraph classes="f5 bc pb5 tc" content="If you would like to see even more projects, feel
              free to check out my <a style={{color: '#2196F3'}} href='https://github.com/jundl77' target='_blank' rel='noopener noreferrer'>GitHub</a> page."/>
            </div>
          </div>
        </div>
      </App>
    )
  }
}