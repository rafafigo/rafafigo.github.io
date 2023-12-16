import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import PropTypes from "prop-types";

const ContactUs = (props) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_pxg87xb', 'template_ftlioyl', form.current, '3_iVoWxWaNDxajfYv')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        props.onCloseArticle();
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="field half first">
                <label htmlFor="name">Name</label>
                <input type="text" name="user_name" id="name"/>
            </div>
            <div className="field half">
                <label htmlFor="email">Email</label>
                <input type="email" name="user_email" id="email"/>
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
    );
};

ContactUs.propTypes = {
    onCloseArticle: PropTypes.func,
}

export default ContactUs;

