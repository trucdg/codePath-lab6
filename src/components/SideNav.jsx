import React from "react";
import CryptoScam from "./CryptoScam";

const SideNav = () => {
  return (
    <div className="sideNav">
      <p>
        Here is a list of coins and platforms involved in recent crypto-related
        scams:
      </p>
      <CryptoScam />
    </div>
  );
};

export default SideNav;
