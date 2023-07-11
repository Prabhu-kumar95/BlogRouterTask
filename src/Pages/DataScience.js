import React, { useState } from "react";
import DataScienceData from "../DataScienceComponents/DataScienceData";
import DataScienceCard from "../DataScienceComponents/DataScienceCard";
const DataScience = () => {
  const [dataScienceDataData, setdataScienceDataData] =
    useState(DataScienceData);
  return (
    <div>
      <DataScienceCard dataScienceDataData={dataScienceDataData} />
    </div>
  );
};
export default DataScience;
