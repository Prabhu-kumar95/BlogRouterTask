import React, { useState } from "react";
import AllData from "../AllData";
import AllDataCard from "../AllDataCard";
const All = () => {
  const [allDataData, setAllDataData] = useState(AllData);
  return (
    <div>
      <AllDataCard allDataData={allDataData} />
    </div>
  );
};
export default All;
