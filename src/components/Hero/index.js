import React from "react";
import "./style.css";

const Hero = () => {
  return (
    <div className="jumbotron jumbotron-fluid header">
      <div className="container">
        <h1 className="display-4">Employee Directory</h1>
        <h4 className="lead">Use searchbox to filter and sort by employee.</h4>
      </div>
    </div>
  )
}

export default Hero;