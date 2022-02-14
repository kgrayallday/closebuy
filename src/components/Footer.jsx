import React from 'react';
import './Footer.css';

function Footer() {
  return(
    <footer>
      <div className='footer-content'>
        <div className='footer-inner'>
          <img src='https://github.com/kgrayallday/closebuy/blob/design/close-buy/public/logo192.png?raw=true' alt="logo192"/>
          <div className='footer-copy'>
            <p> CloseBuy was build and designed by </p>
            <p> Kyle Gray, Ricky Darke and Sanghwan Jeon</p>
          </div>
          <div className='footer-socials'>

            <a><i className="fab fa-facebook-f fa-lg" href="www.facebook.com"></i></a>

            <a><i className="fab fa-twitter fa-lg" href="www.twitter.com"></i></a>

            <a><i className="fab fa-google fa-lg" href="www.google.com"></i></a>

            <a><i className="fab fa-instagram fa-lg" href="www.instagram.com"></i></a>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer;
