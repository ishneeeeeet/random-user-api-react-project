import React from "react";

const Card = ({ details }) => {
  return (
    <div>
      <img height="150" src={details.picture?.large} alt="" />
      <br />
      {details.gender}
      <br />
      {details.email}
      <br />
      {details.cell}
    </div>
  );
};
export default Card;
