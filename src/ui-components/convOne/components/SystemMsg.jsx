// in src/components/SystemMsg/SystemMsg.jsx

import React from "react";
import ConfettiExplosion from 'react-confetti-explosion';
import "./SystemMsg.css";

const SystemMsg = (props) => {
  const msgMarkup =
    <text
      className="system-msg"
    >
      {props.text}
    </text>
  ;

  if (props.confetti) {
    return <div className="system-msg-container">{msgMarkup} <ConfettiExplosion/></div>;
  } else {
    return <div className="system-msg-container">{msgMarkup}</div>;
  }
};

export default SystemMsg;