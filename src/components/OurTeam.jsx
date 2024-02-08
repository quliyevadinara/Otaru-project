import React from "react";

const OurTeam = ({ props }) => {
  console.log(props);
  return (
      <div className="our-team-info">
        <img src={props.image} alt="our-team" />
        <p>{props.name}</p>
        <span>{props.job}</span>
      </div>
  );
};

export default OurTeam;
