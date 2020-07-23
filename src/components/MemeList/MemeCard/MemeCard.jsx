import React from "react";
import "./MemeCard.css";

export default function MemeCard({ src, updateMemeUrl }) {
  return (
    <div className="meme-card">
      <img onClick={updateMemeUrl} className="memeImg" src={src} alt="meme" />
    </div>
  );
}
