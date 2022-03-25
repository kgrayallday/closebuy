import React from 'react';
import './About.css';

function About() {

  return(
    <div className='about-container'>
      <h1>About The Developers</h1>

      <div className='about-cards-container'>
        <div className='about-dev-card'>
          <h2>Kyle Gray</h2>
          <div className='about-dev-content'>
          <div className='about-dev-mug'>
            <img src='https://res.cloudinary.com/tadabase/image/upload/v1577943236/client/suiteupstairs/placeholder_male1_hn5ybs.jpg' alt=''></img>
          </div>
          <div className='about-dev-desc'>
            <p> I come from the Net. Through systems peoples and cities to this place Mainframe. My format Guardian - To mend and defend - To defend my new found friends - Their hopes and dreams - To defend them from their enemies </p>
          </div>
          </div>
        </div>

        <div className='about-dev-card'>
          <h2>Ricky Darke</h2>
          <div className='about-dev-content'>
          <div className='about-dev-mug'>
            <img src='https://res.cloudinary.com/tadabase/image/upload/v1577943236/client/suiteupstairs/placeholder_male1_hn5ybs.jpg' alt=''></img>
          </div>

          <div className='about-dev-desc'>
            <p> They say the User lives outside the Net And inputs games for pleasure - No one knows for sure but I intend to find out </p>
          </div>
          </div>

        </div>

        <div className='about-dev-card'>
          <h2>Sanghwan Jeon</h2>
          <div className='about-dev-content'>
          <div className='about-dev-mug'>
            <img src='https://res.cloudinary.com/tadabase/image/upload/v1577943236/client/suiteupstairs/placeholder_male1_hn5ybs.jpg' alt=''></img>
          </div>

          <div className='about-dev-desc'>
            <p> So-and-so is a developer from a place where developers come from. The Developed there and then developments were made that led them here. Now they continue to develope here and there and everywhere. </p>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;

