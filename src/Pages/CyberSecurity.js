import React, { useState } from "react";
import CyberSecurityData from "../CyberSecurityComponents/CyberSecurityData";
import CyberSecurityDataCard from "../CyberSecurityComponents/CyberSecurityDataCard";
const CyberSecurity = () => {
  const [cyberSecurityDataDetails, setCyberSecurityDataDetails] =
    useState(CyberSecurityData);
  return (
    <div>
      <CyberSecurityDataCard
        cyberSecurityDataDetails={cyberSecurityDataDetails}
      />
    </div>
  );
};
export default CyberSecurity;
