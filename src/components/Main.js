import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/rafaLandscape1.jpeg'
import pic02 from '../images/work.jpg'

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
                    <span className="image main">
            <img src={pic01} alt=""/>
          </span>
                    <ul>
                        <li>
                            Hello, My name is Rafael Figueiredo and I'm currently a student at IST (Instituto Superior
                            Tecnico),
                            where I'm on my last year of a Master's degree in Computer Science and Engineering.
                        </li>
                        <br></br>
                        <li>
                            I consider myself an ambitiuous and hard-working individual, often recognized by my
                            commmitment on my tasks.
                        </li>
                        <br></br>
                        <li>
                            On my free time I like to spend time with my family and friends, programming, watching
                            series and movies, etc.

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
            <img src={pic02} alt=""/>
          </span>
                    <p>
                        <ul>
                            <li>
                                <b>Teaching Assistant at IST</b>
                                <ul>
                                    <li><b>Date</b>: March to July 2022 (5 Months)</li>
                                    <li><b>Description</b>: Teaching laboratory classes of Artificial Intelligence
                                        course
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <b>Student Internship at INESC-ID</b>
                                <ul>
                                    <li><b>Date:</b> September 2021 to November 2022 (1 year and 2 Months)</li>
                                    <li><b>Description:</b> Research related to the development of a thesis on
                                        "SureRepute:User
                                        Reputation in Location Certification Systems"
                                    </li>
                                </ul>
                            </li>
                            <li><b>Trainee at Link Consulting</b>
                                <ul>
                                    <li><b>Date:</b> July 2019 to September 2022 (3 Months)</li>
                                    <li><b>Description:</b> Working with Service Virtualization</li>
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
                    <form method="post" action="mailto:rafafigo@gmail.com">
                        <div className="field half first">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name"/>
                        </div>
                        <div className="field half">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email"/>
                        </div>
                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" rows="4"></textarea>
                        </div>
                        <ul className="actions">
                            <li>
                                <input type="submit" value="Send Message" className="special"/>
                            </li>
                            <li>
                                <input type="reset" value="Reset"/>
                            </li>
                        </ul>
                    </form>
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
