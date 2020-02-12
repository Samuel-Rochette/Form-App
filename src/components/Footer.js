import React from 'react';
import {
    FaPhone,
    FaMapMarkerAlt,
    FaEnvelope,
    FaFacebookSquare,
    FaTwitterSquare,
    FaInstagram,
    FaRegCopyright
} from 'react-icons/fa';
import './Footer.css'

function Footer() {
    return (
        <React.Fragment>
            <div className="footer-menu default-text">
                <div className="row">
                    <div className="col-3">
                        <ul>
                            <li className="footer-label">FEATURES</li>
                            <li className="footer-menu-item">Event organizer tool</li>
                            <li className="footer-menu-item">Timer tools</li>
                            <li className="footer-menu-item">Charity co-ordinator tools</li>
                            <li className="footer-menu-item">Participant experience</li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul>
                            <li className="footer-label">TOOLS</li>
                            <li className="footer-menu-item">Dashboard maker</li>
                            <li className="footer-menu-item">Data & analytics</li>
                            <li className="footer-menu-item">Email marketing tool</li>
                            <li className="footer-menu-item">Social promotion tool</li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul>
                            <li className="footer-label">CONTACT</li>
                            <li className="footer-menu-item"><FaPhone /> 1-888-555-5555</li>
                            <li className="footer-menu-item"><FaMapMarkerAlt /> example@example.com</li>
                            <li className="footer-menu-item"><FaEnvelope /> 123 Fake Steet, London, ON A1B-2C3</li>
                        </ul>
                    </div>
                    <div className="col">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.835132231701!2d-81.24981268506941!3d42.981746479150054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405bc8cee169d9c7%3A0xdff05c225d99dbcf!2sRace%20Roster!5e0!3m2!1sen!2sca!4v1581353702472!5m2!1sen!2sca" title="sampleMap" width="100%" height="140" frameBorder="0" allowFullScreen=""></iframe>
                    </div>
                </div>  
            </div>
            <div className="footer-base white-text">
                <div className="row">
                    <div className="col-3 offset-1">
                        <p className="footer-label vertical-center"><FaRegCopyright /> Copyright Acme Inc. [20XX]</p>
                    </div>
                    <div className="col-2 offset-5">
                        <div className="row">
                            <div className="col"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookSquare className="vertical-center social-media-link" color="#FFFFFF" size="30px" /></a></div>
                            <div className="col"><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitterSquare className="vertical-center social-media-link" color="#FFFFFF" size="30px" /></a></div>
                            <div className="col"><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram className="vertical-center social-media-link" color="#FFFFFF" size="30px" /></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Footer;
