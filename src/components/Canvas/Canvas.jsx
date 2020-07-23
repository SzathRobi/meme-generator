import React, { useRef, useEffect } from "react";
import "./Canvas.css";

export default function Canvas({
  toggleClicked,
  memeUrl,
  topText,
  bottomText,
  fontSize,
  textColor,
  fontFamily,
  textShadow,
  topTextX,
  topTextY,
  bottomTextX,
  bottomTextY,
}) {
  const canvasRef = useRef();
  const memeImg = new Image();
  memeImg.src = memeUrl;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = canvas.getBoundingClientRect().height;

    ctx.drawImage(memeImg, 0, 0, canvas.width, canvas.height);

    ctx.font = `${fontSize}rem ${fontFamily}`;
    ctx.textAlign = "center";
    ctx.fillStyle = textColor;
    if (textShadow) {
      ctx.shadowColor = "black";
      ctx.shadowBlur = 4;
    }
    ctx.fillText(topText, topTextX, topTextY);
    ctx.fillText(bottomText, bottomTextX, bottomTextY);
  }, [
    memeUrl,
    memeImg,
    topText,
    topTextX,
    topTextY,
    bottomText,
    bottomTextX,
    bottomTextY,
    fontSize,
    textColor,
    fontFamily,
    textShadow,
  ]);

  const shrink = {
    zIndex: toggleClicked ? "-1" : 0,
  };

  return <canvas ref={canvasRef} style={shrink} />;
}
