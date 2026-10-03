import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="head relative  flex justify-between p-3 shadow-md">
      <h2 className="p-2.5 mb-0 no-underline">
        NexCart
      </h2>
      <NavBar></NavBar>
    </div>
  );
};

export default Header;