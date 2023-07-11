import React, { useState } from "react";
import FullStackData from "../FullStackComponents/FullStackData";
import FullStackDataCard from "../FullStackComponents/FullStackDataCard";
const FullStack = () => {
  const [fullStackDataData, setfullStackDataData] = useState(FullStackData);
  return (
    <div>
      <FullStackDataCard fullStackDataData={fullStackDataData} />
    </div>
  );
};
export default FullStack;
