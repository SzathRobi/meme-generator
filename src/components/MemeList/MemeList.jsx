import React from "react";
import MemeListToggler from "./MemeListToggler/MemeListToggler";
import MemeCard from "./MemeCard/MemeCard";

import "./MemeList.css";

export default function MemeList({
  memes,
  togglerClicked,
  updateTogglerClicked,
  updateMemeUrl
}) {
  const listPosition = {
    width: togglerClicked ? "15rem" : 0,
    padding: togglerClicked ? "0.5rem" : 0,
    borderTopRightRadius: togglerClicked ? "8px" : "70px"
  };

  const padding = {
    padding: togglerClicked ? "0.3rem" : 0
  };

  return (
    <div className="memeList-container" style={listPosition}>
      <MemeListToggler
        togglerClicked={togglerClicked}
        updateTogglerClicked={updateTogglerClicked}
      />
      <div className="meme-list" style={padding}>
        {memes.map((meme, index) => (
          <MemeCard key={index} src={meme} updateMemeUrl={updateMemeUrl} />
        ))}
      </div>
    </div>
  );
}
