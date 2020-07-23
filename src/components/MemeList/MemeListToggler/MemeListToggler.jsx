import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import "./MemeListToggler.css";

export default function MemeListToggler({
  updateTogglerClicked,
  togglerClicked
}) {
  const togglerPosition = {
    left: togglerClicked ? "14.5rem" : "-0.2rem"
  };

  const rotate = {
    transform: togglerClicked ? "rotate(180deg)" : "rotate(0)",
    transition: "400ms"
  };

  return (
    <div
      className="memeList-toggler"
      style={togglerPosition}
      onClick={updateTogglerClicked}
    >
      <FaArrowAltCircleRight style={rotate} />
    </div>
  );
}
