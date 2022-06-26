import PropTypes from 'prop-types'
import React from 'react'
import {navigate} from "gatsby"
import profile from '../images/rafa.jpeg'
import cv from '../assets/CV.pdf'


const Header = props => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <img className={"profile"} src={profile} alt=""/>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Rafael Figueiredo</h1>
                <h3>
                    Computer Science and Engineering Student at <a href={'https://tecnico.ulisboa.pt/'}>Instituto
                    Superior Técnico (IST)</a>
                </h3>
            </div>
        </div>
        <nav>
            <ul>
                <li>
                    <button
                        onClick={() => {
                            props.onOpenArticle('intro')
                        }}
                    >
                        About Me
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            props.onOpenArticle('work')
                        }}
                    >
                        Experience
                    </button>
                </li>
                <li>
                    <button onClick={() => {
                        navigate("https://github.com/rafafigo/College-Projects")
                    }}>
                        Projects
                    </button>
                </li>
                <li>
                    <a href={cv}>
                        <button>Curriculum</button>
                    </a>
                </li>
                <li>
                    <button
                        onClick={() => {
                            props.onOpenArticle('contact')
                        }}
                    >
                        Contact
                    </button>
                </li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool,
}

export default Header
