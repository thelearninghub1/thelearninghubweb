import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TbBrandLinkedin } from "react-icons/tb";
import { CiYoutube } from 'react-icons/ci';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import logo from '../../../assets/logo.png';
import './Header.css';

const services = [
  { name: "Skills Development Courses", nameLink: "skills-development-courses" },
  { name: "Subjects Summary", nameLink: "subjects-summary" },
  { name: "Instructional Methods", nameLink: "instructional-methods" },
  { name: "Academic Support", nameLink: "academic-support" },
  { name: "Academic Calendar", nameLink: "academic-calendar" },
  { name: "Extra Curricular Activities", nameLink: "extra-curricular-activities" }
];

const admissions = [
  { name: "How to Register", nameLink: "registeration-guide" },
  { name: "Apply Now", nameLink: "apply-now" },
];

const contactUs = [
  { name: "Contact Us", nameLink: "contact-us" },
  { name: "Partner With Us", nameLink: "partner-with-us" },
];

const aboutUs = [
  { name: "Our History", nameLink: "our-history" },
  { name: "Our Team", nameLink: "our-team" },
  { name: "Our Teachers", nameLink: "our-teachers" },
  { name: "Affiliation Accreditation", nameLink: "affiliation-accreditation" },
  { name: "Technology Partners", nameLink: "technology-partners" },
  { name: "Career", nameLink: "career" },
];

const locations = [
  { name: "UAE", nameLink: "uae" },
  { name: "KSA", nameLink: "ksa" },
  { name: "Oman", nameLink: "oman" },
  { name: "Turkey", nameLink: "turkey" },
  { name: "Qatar", nameLink: "qatar" },
  { name: "Bahrain", nameLink: "bahrain" },
  { name: "Malaysia", nameLink: "malaysia" },
];

const media = {
  facebook: "https://www.facebook.com/share/19yGzABBd5/",
  linkedin: "https://www.linkedin.com/company/thelearninghubpk/",
  instagram: "https://www.instagram.com/tlh_school?igsh=YzNwM3Nybjc3NGg0",
  youtube: "https://youtube.com/@thelearninghub_tlh.?si=HTuOvOPLsPBva8Yu"
};

const Header = () => {


  const [clicked, setClicked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [openMenus, setOpenMenus] = useState({
    about: false,
    admission: false,
    academics: false,
    location: false,
    contact: false,
  });

  const handleClick = () => setClicked(!clicked);

  const toggleMenu = (menuName) => {
    if (screenWidth <= 900) {
      setOpenMenus(prev => ({
        ...prev,
        [menuName]: !prev[menuName]
      }));
    }
  };

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMobile = screenWidth <= 900;

  return (
    <nav className={`navbarContainer ${isScrolled ? "scrolled" : ""}`}>
      <div className="leftNavbar">
        <Link to={`/`}>
          <img src={logo} alt="logo" />
        </Link>
        <div className="hamburger" id="mobile" onClick={handleClick}>
          {clicked ? <IoCloseSharp /> : <GiHamburgerMenu />}
        </div>
      </div>

      <div className={clicked ? "midNavbar active" : "midNavbar"} id='midNavbar'>
        <ul>

          {/* ABOUT US */}
          <li className='minilist' onClick={() => toggleMenu("about")}>
            <Link to={`/about-us`}>About Us</Link> <IoIosArrowDown />
            <div className='minilistAboutContainer' style={{ display: isMobile ? (openMenus.about ? "flex" : "none") : undefined }}>
              {aboutUs.map((item) => (
                <li key={item.name} onClick={handleClick}>
                  <Link to={`/${item.nameLink}`}>{item.name}</Link>
                </li>
              ))}
            </div>
          </li>

          {/* ADMISSIONS */}
          <li className='minilist' onClick={() => toggleMenu("admission")}>
            <Link to={`/apply-now`}>Admission</Link> <IoIosArrowDown />
            <div className='minilistAdmissionContainer' style={{ display: isMobile ? (openMenus.admission ? "flex" : "none") : undefined }}>
              {admissions.map((item) => (
                <li key={item.name} onClick={handleClick}>
                  <Link to={`/${item.nameLink}`}>{item.name}</Link>
                </li>
              ))}
            </div>
          </li>

          {/* ACADEMICS */}
          <li className='minilist' onClick={() => toggleMenu("academics")}>
            <Link to={`/skills-development-courses`}>Academics</Link> <IoIosArrowDown />
            <div className='minilistContainer' style={{ display: isMobile ? (openMenus.academics ? "flex" : "none") : undefined }}>
              {services.map((item) => (
                <li key={item.name} onClick={handleClick}>
                  <Link to={`/${item.nameLink}`}>{item.name}</Link>
                </li>
              ))}
            </div>
          </li>

          {/* LOCATIONS */}
          <li className='minilist' onClick={() => toggleMenu("location")}>
            <Link to={`/uae`}>Locations</Link> <IoIosArrowDown />
            <div className='minilistLocationContainer' style={{ display: isMobile ? (openMenus.location ? "flex" : "none") : undefined }}>
              {locations.map((item) => (
                <li key={item.name} onClick={handleClick}>
                  <Link to={`/${item.nameLink}`}>{item.name}</Link>
                </li>
              ))}
            </div>
          </li>

          {/* CONTACT US */}
          <li className='minilist' onClick={() => toggleMenu("contact")}>
            <Link to={`/contact-us`}>Contact Us</Link> <IoIosArrowDown />
            <div className='minilistContactContainer' style={{ display: isMobile ? (openMenus.contact ? "flex" : "none") : undefined }}>
              {contactUs.map((item) => (
                <li key={item.name} onClick={handleClick}>
                  <Link to={`/${item.nameLink}`}>{item.name}</Link>
                </li>
              ))}
            </div>
          </li>

        </ul>
      </div>

      <div className="rightNavbar">
        <div><MdOutlinePhoneInTalk /></div>
        <div>
          <p>Call anytime</p>
          <p className='ikbhai'>+352 621 508 645</p>
          <div className='socialMedia'>
            <a href={media.facebook} target='blank'><RiFacebookCircleLine /></a>
            <a href={media.linkedin} target='blank'><TbBrandLinkedin /></a>
            <a href={media.instagram} target='blank'><FaInstagram /></a>
            <a href={media.youtube} target='blank'><CiYoutube /></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
