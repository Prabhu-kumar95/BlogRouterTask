import React, { useState } from "react";
import CareerData from "../CareerComponents/CareerData";
import CareerDataCard from "../CareerComponents/CareerDataCard";
const Career = () => {
  const [careerDataDetails] = useState(CareerData);
  return (
    <div>
      <CareerDataCard careerDataDetails={careerDataDetails} />
    </div>
  );
};
export default Career;
