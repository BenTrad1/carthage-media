import React from "react";
import FooterInfoContainer from "../containers/FooterInfoContainer";

const Footer = () => {
  return (
    <div className="footer bg-gradient-to-tl from-stone-950 to-orange-900 from-60% relative">
      <div className="flex flex-col">
        <FooterInfoContainer />

        <hr />

        <p className="text-white py-5 pl-6">
          <b>Carthage Media</b> | All Rights Reserved | All Wrongs Reversed
        </p>

        <hr />

        <p className="text-white py-2 pl-6 text-center">
          © 2023 Carthage Media
        </p>
      </div>
    </div>
  );
};

export default Footer;
