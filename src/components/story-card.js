import React from "react";
import "./../extra-margin.css";

const ImageStyles = {
  backgroundImage: "url(https://picsum.photos/160/300)",
  border: "1px solid #c7c7c7"
};

const AvatarContainerStyles = {
  boxShadow: "0 0 0px 3px #1474ff",
  padding: "3px",
  boxSizing: "content-box"
};

const AvatarContainerStylesSeen = {
  ...AvatarContainerStyles,
  boxShadow: "0 0 0px 3px #dedede"
};

const AvatarStyles = {
  backgroundImage: "url(https://i.pravatar.cc/300)",
  boxShadow: "0 0 0px 3px #4a4a4a4d"
};

const extraLinearGradientStyles = {
  background: "linear-gradient(rgba(255,255,255,0) 0%, rgba(0,0,0,0.7) 100%)"
};

function StoryCard({ data }) {
  return (
    <div
      className="child relative rounded-lg bg-cover h-64 w-40 flex-none m-1"
      style={ImageStyles}
    >
      <div
        className="h-full w-full rounded-lg flex flex-col justify-between p-4"
        style={extraLinearGradientStyles}
      >
        <div
          className="h-10 w-10 rounded-full"
          style={data.seen ? AvatarContainerStylesSeen : AvatarContainerStyles}
        >
          <div
            className="h-10 w-10 rounded-full bg-contain"
            style={AvatarStyles}
          />
        </div>
        <p className="text-white text-base">John Doe</p>
      </div>
    </div>
  );
}

export default StoryCard;
