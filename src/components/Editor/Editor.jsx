import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import "./Editor.css";

export default function Editor({
  topTextValue,
  updateTopTextValue,
  updateTopText,
  bottomTextValue,
  updateBottomTextValue,
  updateBottomText,
  fontSize,
  updateFontSize,
  updateTextColor,
  updateFontFamily,
  textShadow,
  updateTextShadow,
  topTextX,
  updateTopTextX,
  topTextY,
  updateTopTextY,
  bottomTextX,
  updateBottomTextX,
  bottomTextY,
  updateBottomTextY,
}) {
  const addText = (event) => {
    event.preventDefault();
    updateTopText();
    updateBottomText();
    setPlusClicked(false);
  };

  const [plusClicked, setPlusClicked] = useState(false);
  const updatePlusClicked = () => setPlusClicked(!plusClicked);

  const editorStyle = {
    bottom: plusClicked ? "0" : "-35rem",
  };

  const rotate = {
    transform: plusClicked ? "rotate(45deg)" : "rotate(0)",
  };

  return (
    <div className="editor" style={editorStyle}>
      <FaPlusCircle
        className="plus-icon"
        onClick={updatePlusClicked}
        style={rotate}
      />
      <form onSubmit={addText}>
        <input type="text" value={topTextValue} onChange={updateTopTextValue} />
        <input
          type="text"
          value={bottomTextValue}
          onChange={updateBottomTextValue}
        />
        <button>
          <h2>Add Text</h2>
        </button>
        <div className="font-size">
          <h3>font-size:</h3>
          <input
            type="range"
            min="1"
            max="5"
            value={fontSize}
            onChange={updateFontSize}
            step="0.2"
          />
        </div>
        <div className="text-color">
          <h3>Text Color:</h3>
          <input type="color" onChange={updateTextColor} />
        </div>
        <div className="typography">
          <h3>Typography:</h3>
          <select onChange={updateFontFamily}>
            <option value="Arial">Arial</option>
            <option value="Times">Times</option>
            <option value="Cambria">Cambria</option>
            <option value="fantasy">Fantasy</option>
          </select>
        </div>
        <div>
          <label>
            <h3>Text Shadow:</h3>
            <input
              type="checkbox"
              checked={textShadow}
              onChange={updateTextShadow}
            />
          </label>
        </div>
        <div className="text-position">
          <h3>Top Text :</h3>
          <div>
            X:
            <input
              type="range"
              min="50"
              max="800"
              step="10"
              value={topTextX}
              onChange={updateTopTextX}
            />
            Y:
            <input
              type="range"
              min="20"
              max="700"
              step="10"
              value={topTextY}
              onChange={updateTopTextY}
            />
          </div>
        </div>
        <div className="text-position">
          <h3>Bottom Text:</h3>
          <div>
            X:
            <input
              type="range"
              min="50"
              max="800"
              step="10"
              value={bottomTextX}
              onChange={updateBottomTextX}
            />
            Y:
            <input
              type="range"
              min="10"
              max="700"
              step="10"
              value={bottomTextY}
              onChange={updateBottomTextY}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
