import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faLinkedinIn, faInstagram, faFacebookF} from '@fortawesome/free-brands-svg-icons';


function Footer () {

return (
  <footer>
      <div className="content">
          <section className="gradient" />
        </div>

        <div className="footer-right">
          {/* Facebook*/}
          <div className="footer-social-icon">
              <FontAwesomeIcon icon={faFacebookF}/>
          </div>

          {/* Twitter */}
          <div className="footer-social-icon">
          <FontAwesomeIcon icon={faTwitter} size="lg"/>             
          </div>
          {/* Linkedin */}
          <div className="footer-social-icon">
          <FontAwesomeIcon icon={faLinkedinIn}/>
          </div>
          {/* Instagram */}
          <div className="footer-social-icon">
          <FontAwesomeIcon icon={faInstagram}/>
          </div>
        </div>

        <div className="footer-left">
          <p className="footerNav">

            <Link to='/about'>
              About
            </Link>

            
            <Link to='/contact'>
              Contact
            </Link>
            <Link to='/help'>
              Help
            </Link>
            
          </p>
        </div>
        
        <div className="footerBrand">
          &copy; {new Date().getFullYear()} Amazon
        </div> 
  </footer>  
)
}

export default Footer;