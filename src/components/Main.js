import PropTypes from 'prop-types'
import React from 'react'
import ContactUs from "./contact";
import work from '../images/work.jpg'
import rafaAboutMe from '../images/rafaAboutMe.jpeg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{display: 'none'}}
        >
          <h1 className="major">About Me</h1>
          <div className="image main">
            <img style={{ alignSelf: "center"}} src={rafaAboutMe} alt=""/>
          </div>
          <ul>
            <br></br>
            <li>
              Hey there! 👋 I am Rafael Figueiredo, a dedicated Software Engineer with a Master's degree in
              Computer Science and Engineering from IST. Currently contributing my skills to VoiceInteraction,
              where we're at the forefront of speech recognition technology.
            </li>
            <br></br>
            <li>
              On my daily basis I work with a diverse number of technologies such as Javascript
              (Node.js and Angular.js), Java, Python, Bash, Powershell and Elasticsearch.
              For CI/CD I mainly use tools such as Git, Maven, Jenkins, Artifactory, Docker, Gitlab CI/CD
              pipelines and frameworks like JUnit and Mocha for testing.
            </li>
            <br></br>
            <li>
              I consider myself an ambitious and hard-working individual, often recognized for my commitment and ability.
              I handle multiple tasks regularly and competently, working well under pressure.
            </li>
            <br></br>
            <li>
              When I am not coding, you'll find me reading books, hanging with friends,
              or binge-watching the latest series.
            </li>
          </ul>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{display: 'none'}}
        >
          <h1 className="major">Experience</h1>
          <span className="image main">
            <img src={work} alt=""/>
          </span>
          <p>
            <ul>
              <li>
                <b>Software Engineer | VoiceInteraction</b>
                <ul>
                  <li><b>Date</b>: October 2022 - Present</li>
                  <li><b>Description</b>:
                    <ul>
                      <li>
                        VoiceInteraction specialises in cutting-edge speech recognition technology, striving to enhance human communication through innovative solutions.
                      </li>
                      <li>
                        In my daily work, I engage with a variety of tools, including Javascript, Java, Python, Bash, Powershell, and Elasticsearch.
                        My CI/CD workflow involves utilizing Maven, Git, Jenkins, Artifactory, Docker, Gitlab CI/CD pipelines, and testing frameworks like JUnit and Mocha.
                      </li>
                      <li><b>Tools</b>:  Java · Elasticsearch · Spring Framework · AngularJS · Node.js · Jenkins · Mocha · JUnit · Python
                        · Docker · Ffmpeg · AWS · Git · JFrog Artifactory</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <b>Teaching Assistant | IST</b>
                <ul>
                  <li><b>Date</b>: March 2022 - August 2022 (6 Months)</li>
                  <li><b>Description</b>:
                    <ul>
                      <li>
                        Teaching laboratory classes of Artificial Intelligence course
                      </li>
                      <li>
                        <b>Tools:</b> Python · Active Listening · Communication
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <b> Internship | SureThing Project</b>
                <ul>
                  <li><b>Date:</b> September 2021 - November 2022 (1 year and 2 Months)</li>
                  <li><b>Description:</b>
                    <ul>
                      <li>
                        Research and development related to a thesis on
                        "SureRepute:User Reputation in Location Certification Systems"
                      </li>
                      <li>
                        <b>Tools:</b> Java · Docker · Google Cloud Platform (GCP) · Google Kubernetes Engine (GKE) · PostgreSQL · Git
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <b>Trainee at Link Consulting</b>
                <ul>
                  <li><b>Date:</b> July 2019 to September 2022 (3 Months)</li>
                  <li><b>Description:</b>
                    <ul>
                      <li>
                        Working with Service Virtualization
                      </li>
                      <li>
                        <b>Tools:</b> Python · ReadyAPI · WireMock · Traffic Parrot · Hoverfly
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{display: 'none'}}
        >
          <h1 className="major">Contact</h1>
          <ContactUs onCloseArticle={this.props.onCloseArticle}></ContactUs>
          <ul className="icons">
            <li>
              <a
                href="https://github.com/rafafigo"
                className="icon fa-github"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a href="https://wa.me/351925204278" className="icon fa-whatsapp">
                <span className="label">Whatsapp</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rafafigo/"
                className="icon fa-linkedin"
              >
                <span className="label">Discord</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
