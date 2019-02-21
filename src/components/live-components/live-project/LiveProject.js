import React from 'react'
import PropTypes from 'prop-types'
import LiveComponent from '../LiveComponent'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export default class LiveProject extends React.Component {

  static propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    links: PropTypes.array.isRequired
  }

  _generateLinks = () => {
    let reactCode = this.props.links.reduce((total, elem) => total +
      `<span className="mf f5">
                      <a style={{color: "#2196F3"}} href="${elem[1]}" target="_blank" rel="noopener noreferrer">
                        ${elem[0]}
                      </a>
                      <span>  </span>
                    </span>\n                    `, '')

    let scalaCodeBlocks = this.props.links.map(elem =>
     `span( \`class\` := "mf f5") (
        a(style := "color: #2196F3", href := "${elem[1]}", target := "_blank", rel := "noopener noreferrer") ("${elem[0]}"),
        span(" ")
      )`)
    let scalaCode =  scalaCodeBlocks.join(",\n")

    let haskellCodeBlocks = this.props.links.map(elem => `(link "${elem[1]}" "${elem[0]}")`)
    let haskellCode =  haskellCodeBlocks.join(" # ")

    let rustCodeBlocks = this.props.links.map(elem => `{ text!(render_links(&"${elem[0]}", &"${elem[1]}")) }`)
    let rustCode = rustCodeBlocks.join("\n                  ")


    return {
      react: reactCode,
      scala: scalaCode,
      haskell: haskellCode,
      rust: rustCode
    }
  }

  _generateContentElement = props => {

    let links = this._generateLinks()
    let descr = ''

    switch (this.props.type) {
      case 'dev':
        descr = 'Software'
        break
      case 'pm':
        descr = 'Project Management'
        break
      case 'data':
        descr = 'Data Science'
        break
      default:
        // no-op
    }


    let reactCode = `
      class extends React.Component {
        render() {

          // Render the UI element
          return (
            <div>
              <div className="row">
                <div className="col-12 center">
                  <img src="${props.image}"/>
                </div>
              </div>
              
              <div className="pl3 pr3 pt3 relative"
                   style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 15px -1px", minHeight: "12rem"}}>
                <div className="row">
                  <div className="col-12 pb3">
                    <div className="mf f5">${descr}</div>
                  </div>
                </div>
                
                <div className="row pb1">
                  <div className="col-12">
                      <h2 className="f3 mf">${props.title}</h2>
                  </div>
                </div>
  
                <div className="row pb3">
                  <div className="col-12">
                    ${links['react']}
                  </div>
                </div>
  
                <div className="row">
                  <div className="col-12">
                    <p style={{color: "#707070"}} className="mf">${props.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      }
    `

    let scalaCode = `
      new ReactComponent {
        def myName() = "Julian Brendl"

        override def render(): Text.TypedTag[String] = {
          div(
            div(\`class\` := "row") (
              div(\`class\` := "col-12 center") (
                img(src := "${props.image}")
              )
            ),
            
            div(\`class\` := "pl3 pr3 pt3 relative",
                 style := "box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 15px -1px; min-height: 12rem") (
              div(\`class\` := "row") (
                div(\`class\` := "col-12 pb3") (
                  div(\`class\` := "mf f5") ("${descr}")
                )
              ),
              
              div(\`class\` := "row pb1") (
                div(\`class\` := "col-12") (
                  div(\`class\` := "mf f3") ("${props.title}")
                )
              ),
              
              div(\`class\` := "row pb3") (
                div(\`class\` := "col-12") (
                  ${links['scala']}
                )
              ),
              
              div(\`class\` := "row") (
                div(\`class\` := "col-12") (
                  p(\`class\` := "mf", style := "color: #707070") (
                    "${props.description}"
                  )
                )
              )
            ) 
          )
        }
      }`

    let haskellCode = `
      -- Main function, this renders the element 
      render = div_ (image # body (projectType # title # links # description))
      
      -- General functions that envelop other functions
      body = div_A (A.class_ "pl3 pr3 pt3 relative" #
                    A.style_ "box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 15px -1px; min-height: 12rem")
      divWrapper
                    
      -- Specific component definitions for each component. Each of these function is independent of anything else
      image = div_A (A.class_ "row") (div_A (A.class_ "col-12 center") (img_A (A.src_ "${props.image}")))
      projectType = div_A (A.class_ "row") (div_A (A.class_ "col-12 pb3") (div_A (A.class_ "mf f5") ("${descr}")))
      title = div_A (A.class_ "row pb1") (div_A (A.class_ "col-12") (div_A (A.class_ "mf f3") ("${props.title}")))
      links = div_A (A.class_ "row pb3") (div_A (A.class_ "col-12")
              (${links['haskell']}))
      description = div_A (A.class_ "row") (div_A (A.class_ "col-12") (div_A (A.class_ "mf" # A.style_ "color: #707070")
                    ("${props.description}")))
      
      -- Helper functions, here used for link generation
      linkAttributes url = A.style_ "color: #2196F3" # A.href_ url # A.target_ "_blank" # A.rel_ "noopener noreferrer"
      link url name = span_A (A.class_ "mf f5") ((a_A (linkAttributes url) name) # span_ " ")
    `

    let rustCode = `
      fn render_links(name: &str, url: &str) -> String {
        return format!("
          <span class=\\"mf f5\\">
            <a style=\\"color: #2196F3\\" href=\\"{}\\">{}</a>
            <span> </span>
          </span>
        ", url, name);
      }
      
      fn render() -> DOMTree<String> {
        return html!(
          <div>
            <div class="row">
              <div class="col-12 center">
                <img src="${props.image}"/>
              </div>
            </div>
            
            <div class="pl3 pr3 pt3 relative"
                 style="box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 15px -1px; min-height: 12rem">
              <div class="row">
                <div class="col-12 pb3">
                  <div class="mf f5">"${descr}"</div>
                </div>
              </div>
              
              <div class="row pb1">
                <div class="col-12">
                    <h2 class="f3 mf">"${props.title}"</h2>
                </div>
              </div>

              <div class="row pb3">
                <div class="col-12">
                  ${links['rust']}
                </div>
              </div>

              <div class="row">
                <div class="col-12">
                  <p style="color: #707070" class="mf">"${props.description}"</p>
                </div>
              </div>
            </div>
          </div>
        );
      }
    `

    return (
      <LiveComponent previewStyles={{margin: 'auto'}} code={{
        'react': reactCode,
        'scala': scalaCode,
        'haskell': haskellCode,
        'rust': rustCode
      }}/>
    )
  }

  render() {
    return (
      <Card elevation={10} className="mb4">
        <CardContent style={{padding: 0}}>
          {this._generateContentElement(this.props)}
        </CardContent>
      </Card>
    )
  }
}