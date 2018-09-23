import React from 'react'
import App from '../app/App'
import LiveContent from '../live-content/LiveContent'

export default class Projects extends React.Component {

  render() {
    return (
      <App title="Projects">
        <div className="container pt5">
          <div className="row">
            <div className="col-md-10 col-xs-9 center">
              <LiveContent image="img/r1.jpg"
                           title="Rogue One"
                           link="https://www.imdb.com/title/tt03748528/"
                           description="The daughter of an Imperial scientist joins the Rebel Alliance in a risky
                                        move to steal the Death Star plans."/>
              <LiveContent image="img/r1.jpg"
                           title="Rogue One"
                           link="https://www.imdb.com/title/tt03748528/"
                           description="The daughter of an Imperial scientist joins the Rebel Alliance in a risky
                                        move to steal the Death Star plans."/>
              <LiveContent image="img/r1.jpg"
                           title="Rogue One"
                           link="https://www.imdb.com/title/tt03748528/"
                           description="The daughter of an Imperial scientist joins the Rebel Alliance in a risky
                                        move to steal the Death Star plans."/>
              <LiveContent image="img/r1.jpg"
                           title="Rogue One"
                           link="https://www.imdb.com/title/tt03748528/"
                           description="The daughter of an Imperial scientist joins the Rebel Alliance in a risky
                                        move to steal the Death Star plans."/>
              <LiveContent image="img/r1.jpg"
                           title="Rogue One"
                           link="https://www.imdb.com/title/tt03748528/"
                           description="The daughter of an Imperial scientist joins the Rebel Alliance in a risky
                                        move to steal the Death Star plans."/>
            </div>
          </div>
        </div>
      </App>
    )
  }
}