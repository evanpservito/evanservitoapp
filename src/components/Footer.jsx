import React from "react";

const Footer = () => {
  return (
    <div className="py-5 text-center">
      <p className="text-xm mt-10 opacity-50">
        &copy; {new Date().getFullYear()} Evan Servito. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
