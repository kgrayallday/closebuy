import React from 'react';
import './Footer.css';

function Footer() {
  return(
    <footer>
      <div className='footer-content'>
        <div className='footer-inner'>
          <img src='https://github.com/kgrayallday/closebuy/blob/design/close-buy/public/logo192.png?raw=true'/>
          <div className='footer-copy'>
            <p> CloseBuy was build and designed by </p>
            <p> Kyle Gray, Ricky Darke and Sanghwan Jeon</p>
          </div>
          <div className='footer-socials'>

            <a><i className="fab fa-facebook-f fa-lg"></i></a>

            <a><i className="fab fa-twitter fa-lg"></i></a>

            <a><i className="fab fa-google fa-lg"></i></a>

            <a><i className="fab fa-instagram fa-lg"></i></a>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer;