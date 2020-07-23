import React, { useState } from "react";
import MemeList from ".//components/MemeList/MemeList";
import Canvas from "./components/Canvas/Canvas";
import Editor from "./components/Editor/Editor";
import mt1 from "./memes/mt1.jpg";
import mt2 from "./memes/mt2.jpg";
import mt3 from "./memes/mt3.jpg";
import mt4 from "./memes/mt4.jpg";
import mt5 from "./memes/mt5.jpg";
import mt6 from "./memes/mt6.png";
import mt7 from "./memes/mt7.jpg";
import mt8 from "./memes/mt8.jpg";
import "./styles.css";

export default function App() {
  const [memes, setMemes] = useState([mt1, mt2, mt3, mt4, mt5, mt6, mt7, mt8]);
  const [memeUrl, setMemeUrl] = useState(mt1);
  const updateMemeUrl = (event) => {
    setMemeUrl(event.target.src);
    setTopText("");
    setBottomText("");
  };

  const [togglerClicked, setTogglerClicked] = useState(true);
  const updateTogglerClicked = () => setTogglerClicked(!togglerClicked);

  const [topTextValue, setTopTextValue] = useState("");
  const updateTopTextValue = (event) => {
    setTopTextValue(event.target.value);
  };
  const [topText, setTopText] = useState("");
  const updateTopText = () => {
    setTopText(topTextValue);
    setTopTextValue("");
  };

  const [bottomTextValue, setBottomTextValue] = useState("");
  const updateBottomTextValue = (event) => {
    setBottomTextValue(event.target.value);
  };
  const [bottomText, setBottomText] = useState("");
  const updateBottomText = () => {
    setBottomText(bottomTextValue);
    setBottomTextValue("");
  };

  const [fontSize, setFontSize] = useState(2);
  const updateFontSize = (event) => setFontSize(event.target.value);

  const [textColor, setTextColor] = useState("");
  const updateTextColor = (event) => setTextColor(event.target.value);

  const [fontFamily, setFontFamily] = useState("Arial");
  const updateFontFamily = (event) => setFontFamily(event.target.value);

  const [textShadow, setTextShadow] = useState(false);
  const updateTextShadow = () => {
    setTextShadow(!textShadow);
    console.log(textShadow);
  };

  const [topTextX, setTopTextX] = useState(150);
  const updateTopTextX = (event) => setTopTextX(event.target.value);
  const [topTextY, setTopTextY] = useState(50);
  const updateTopTextY = (event) => setTopTextY(event.target.value);

  const [bottomTextX, setBottomTextX] = useState(150);
  const updateBottomTextX = (event) => setBottomTextX(event.target.value);
  const [bottomTextY, setBottomTextY] = useState(450);
  const updateBottomTextY = (event) => setBottomTextY(event.target.value);

  return (
    <div className="App">
      <MemeList
        memes={memes}
        togglerClicked={togglerClicked}
        updateTogglerClicked={updateTogglerClicked}
        updateMemeUrl={updateMemeUrl}
      />
      <Canvas
        memeUrl={memeUrl}
        togglerClicked={togglerClicked}
        topText={topText}
        bottomText={bottomText}
        fontSize={fontSize}
        textColor={textColor}
        fontFamily={fontFamily}
        textShadow={textShadow}
        topTextX={topTextX}
        topTextY={topTextY}
        bottomTextX={bottomTextX}
        bottomTextY={bottomTextY}
      />
      <Editor
        topTextValue={topTextValue}
        updateTopTextValue={updateTopTextValue}
        updateTopText={updateTopText}
        bottomTextValue={bottomTextValue}
        updateBottomTextValue={updateBottomTextValue}
        updateBottomText={updateBottomText}
        fontSize={fontSize}
        updateFontSize={updateFontSize}
        updateTextColor={updateTextColor}
        updateFontFamily={updateFontFamily}
        textShadow={textShadow}
        updateTextShadow={updateTextShadow}
        topTextX={topTextX}
        updateTopTextX={updateTopTextX}
        topTextY={topTextY}
        updateTopTextY={updateTopTextY}
        bottomTextX={bottomTextX}
        updateBottomTextX={updateBottomTextX}
        bottomTextY={bottomTextY}
        updateBottomTextY={updateBottomTextY}
      />
    </div>
  );
}
