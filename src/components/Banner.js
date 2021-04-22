import React from "react";
import "./Banner.css";

function Banner({ children, banner }) {
  return <header className={banner}>{children}</header>;
}

export default Banner;
