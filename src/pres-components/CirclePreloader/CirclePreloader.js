import React from "react";
import "./CirclePreloader.css";

export const CirclePreloader = (props) => {
  return <div className="circle-preloader" style={{marginLeft: `${props.margin_left}`}}><div></div><div></div></div>
};

