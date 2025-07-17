import React, { Fragment } from 'react';
import logo from '../../../assets/logo.png';
import './Footer.css';
import { Link } from 'react-router-dom';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa';
import { TbBrandLinkedin } from 'react-icons/tb';
import { CiYoutube } from "react-icons/ci";

const services = [
    { _id: 1, name: "Skills Development", nameLink: "skills-development-courses" },
    { _id: 2, name: "Instructional Methods", nameLink: "instructional-methods" },
    { _id: 3, name: "Academic Support", nameLink: "academic-support" },
    { _id: 4, name: "Subjects Summary", nameLink: "subjects-summary" },
    { _id: 5, name: "STEM LMS", nameLink: "https://lms.thelearninghubedu.com/" },
];

const media = {
    facebook: "https://www.facebook.com/share/19yGzABBd5/",
    linkedin: "https://www.linkedin.com/company/thelearninghubpk/",
    instagram: "https://www.instagram.com/tlh_school?igsh=YzNwM3Nybjc3NGg0",
    youtube: "https://youtube.com/@thelearninghub_tlh.?si=HTuOvOPLsPBva8Yu"
};

const Footer = () => {
    return (
        <Fragment>
            <footer>
                <div>
                    <div className="leftFooter">
                        <img src={logo} alt="logo" />
                        <p>Shaping minds through innovative online schooling, personalized tutoring, and immersive, tech-enabled learning experiences — accessible everywhere!</p>
                    </div>
                    <div className="midFooter1">
                        <h1>Academics</h1>
                        {services.map((ser) =>
                            ser._id === 5 ? (
                                <a
                                    key={ser._id}
                                    href={ser.nameLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {ser.name}
                                </a>
                            ) : (
                                <Link key={ser._id} to={`/${ser.nameLink}/`}>
                                    {ser.name}
                                </Link>
                            )
                        )}
                    </div>
                    <div className="midFooter2">
                        <h1>Useful Links</h1>
                        <Link to={`/about-us`}>About Us</Link>
                        <Link to={`/apply-now`}>Admissions</Link>
                        <Link to={`/uae`}>Locations</Link>
                        <Link to={`/contact-us`}>Contact Us</Link>
                        <Link to={`/partner-with-us`}>Join Us</Link>
                    </div>
                    <div className="rightFooter">
                        <h1>Get In Touch</h1>
                        <p>Phone: +352 621 508 645</p>
                        <p>Email: ithelearninghub@gmail.com</p>
                        <p>Address: 123 Main Street, City, Country</p>
                    </div>
                </div>
                <div className="miniFooter">
                    <div>
                        <p>&copy; 2018 - {new Date().getFullYear()} The Learning Hub</p>
                    </div>
                    <div className='FooterSocial'>
                        <a href={media.facebook} target="_blank" rel="noopener noreferrer"><RiFacebookCircleLine /></a>
                        <a href={media.linkedin} target="_blank" rel="noopener noreferrer"><TbBrandLinkedin /></a>
                        <a href={media.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href={media.youtube} target="_blank" rel="noopener noreferrer"><CiYoutube /></a>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
};

export default Footer;
