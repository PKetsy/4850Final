import React from 'react';
import './OurTeam.css';

const OurTeam = () => {
  return (
    <div>
      <div className="team-img">
        <div className="container">
          <div className="team-content">
            <h1 className="heading-primary">Our team</h1>

            <p>We are passionate about quality!</p>
          </div>
        </div>
      </div>
      {/* Team Info */}
      <div className="container">
        <div className="grid-container py-md">
          <div className="grid-item team-info">
            <h1 className="heading-tertiary">
              Keith <span>Last Name</span>
            </h1>
            <h4 className="heading-secondary">Enter Role here</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              iusto et cumque cum excepturi repudiandae maxime beatae illo.
              Facere mollitia architecto dolorem nobis provident libero delectus
              voluptates. Commodi, odio modi!
            </p>
          </div>

          <div className="grid-item team-info">
            <h3 className="heading-tertiary">
              Employee2 <span>Last Name</span>
            </h3>
            <h4 className="heading-secondary">Enter Role here</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              iusto et cumque cum excepturi repudiandae maxime beatae illo.
              Facere mollitia architecto dolorem nobis provident libero delectus
              voluptates. Commodi, odio modi!
            </p>
          </div>

          <div className="grid-item team-info">
            <h3 className="heading-tertiary">
              Employee3 <span>Last Name</span>
            </h3>
            <h4 className="heading-secondary">Enter Role here</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              iusto et cumque cum excepturi repudiandae maxime beatae illo.
              Facere mollitia architecto dolorem nobis provident libero delectus
              voluptates. Commodi, odio modi!
            </p>
          </div>

          <div className="grid-item team-info">
            <h3 className="heading-tertiary">
              Employee4 <span>Last Name</span>
            </h3>
            <h4 className="heading-secondary">Enter Role here</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              iusto et cumque cum excepturi repudiandae maxime beatae illo.
              Facere mollitia architecto dolorem nobis provident libero delectus
              voluptates. Commodi, odio modi!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
