import React from "react";
import "./styles.css";

export default function Student(props) {
  // Need to replace video url with embed link to display in html
  let videoURL = props.video.replace("watch?v=", "embed/");
  let social;
  if (props.social === "instagram") {
    social = (
      <img
        height="20px"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png"
      />
    );
  } else if (props.social === "tiktok") {
    social = (
      <img
        height="20px"
        src="https://cliply.co/wp-content/uploads/2021/02/372102780_TIKTOK_ICON_1080.png"
      />
    );
  }

  return (
    <div className="student" style={{ color: props.color }}>
      <h1>{props.name}</h1>
      <p>
        {props.school} class of {props.year}
      </p>
      <p>Favorite genre: {props.genre}</p>
      <p>Prefers: {props.place}</p>
      {social}
      <iframe width="100%" height="50%" src={videoURL}></iframe>
    </div>
  );
}
