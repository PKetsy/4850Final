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
              Keith <span>Rapp</span>
            </h1>
            <h4 className="heading-secondary">Owner</h4>
          </div>
          <hr />
          <div className="grid-item team-info">
            <h3 className="heading-tertiary">
              Lorrin <span>Charboneau</span>
            </h3>
            <h4 className="heading-secondary">CEO</h4>
          </div>
          <hr />
          <div className="grid-item team-info">
            <h3 className="heading-tertiary">
              Cheryll <span>Sullens</span>
            </h3>
            <h4 className="heading-secondary">Operations Manager</h4>
            <h4 className="heading-secondary">Wholesale Manager</h4>
          </div>
          <hr />
          <div className="grid-item team-info">
            <h3 className="heading-tertiary">
              Tyler <span>Henson</span>
            </h3>
            <h4 className="heading-secondary">CFO</h4>
          </div>
          <hr />
          <div className="grid-item team-info">
            <h3 className="heading-tertiary">
              Mare <span></span>
            </h3>
            <h4 className="heading-secondary">Marketing Manager</h4>
          </div>
          <hr />
          <div className="grid-item team-info">
            <h3 className="heading-tertiary">
              Luke <span>Charboneau</span>
            </h3>
            <h4 className="heading-secondary">Social Media Manager</h4>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
