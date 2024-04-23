import React from "react";

const Navbar = () => {
  return (
    <div className="bg-blue-400 px-10  items-center flex justify-between">
      <div className="">
        <p>Logo</p>
      </div>
      <div className="flex  gap-5">
        <p>Home</p>
        <p>Sercives</p>
        <p>Contacts</p>
      </div>
    </div>
  );
};

export default Navbar;
