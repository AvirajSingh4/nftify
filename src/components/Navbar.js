import React from "react";
import "../App.css";
 
const Navbar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">
          <img src="" alt="" /><h3 className="logo">NFTify</h3>
        </span>
      </div>
 
      <div className="center">
        <ul>
          <li>
            
            <span className="option">Token Address</span>
          </li>
 
          <li>
            <span className="option">Pair Address</span>
          </li>
        </ul>
      </div>
 
      
      </div>
  );
};
 
export default Navbar;
