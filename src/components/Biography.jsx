import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="profile" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who I am</h3>
          <p>
            I am a meticulous and detail-oriented auditor with a passion for ensuring financial integrity and regulatory compliance. With a keen eye for accuracy and a deep understanding of accounting principles, I meticulously examine financial records, analyze data, and assess internal controls to provide valuable insights and recommendations. My commitment to upholding ethical standards and my ability to communicate complex financial information effectively make me a trusted advisor to clients and a valuable asset to any auditing team.
          </p>

        </div>
      </div>
    </>
  );
};

export default Biography;
