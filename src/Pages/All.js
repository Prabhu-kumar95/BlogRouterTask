import React, { useState } from "react";
import AllData from "../AllData";
import AllDataCard from "../AllDataCard";
const All = () => {
  const [allDataData] = useState(AllData);
  return (
    <div>
      <AllDataCard allDataData={allDataData} />
    </div>
  );
};
export default All;
