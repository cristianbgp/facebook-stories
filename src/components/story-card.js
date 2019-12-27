import React from "react";
import "./../extra-margin.css";
import PlusIconSVG from "./icons/plus";

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

const plusIconStyles = {
  ...AvatarContainerStyles,
  boxShadow: "0 0 0px 3px white",
  transition: "all 0.25s ease-in-out",
  top: "412px",
  left: "0"
};

function PlusIcon({ scrollStyle }) {
  const noScrollStyles =
    "h-10 w-10 rounded-full bg-white flex justify-center items-center";
  const scrollStyles =
    "rounded-l-none z-10 fixed h-10 w-10 rounded-full bg-white flex justify-center items-center";

  return (
    <div
      className={scrollStyle ? scrollStyles : noScrollStyles}
      style={plusIconStyles}
    >
      <div className="h-5 w-5 rounded-full bg-contain">
        <PlusIconSVG fill="#1474ff" />
      </div>
    </div>
  );
}

function StoryCard({ data, currentUser, scrollStyle }) {
  return (
    <div
      className="child relative rounded-lg bg-cover h-64 w-40 flex-none m-1"
      style={ImageStyles}
    >
      <div
        className={`h-full w-full rounded-lg flex flex-col p-4 relative ${
          scrollStyle ? "justify-end" : "justify-between"
        }`}
        style={extraLinearGradientStyles}
      >
        {currentUser ? (
          <PlusIcon scrollStyle={scrollStyle} />
        ) : (
          <div
            className="h-10 w-10 rounded-full"
            style={
              !currentUser && data.seen
                ? AvatarContainerStylesSeen
                : AvatarContainerStyles
            }
          >
            <div
              className="h-10 w-10 rounded-full bg-contain"
              style={AvatarStyles}
            />
          </div>
        )}
        <p className="text-white text-base">
          {currentUser ? "Add to Story" : "John Doe"}
        </p>
      </div>
    </div>
  );
}

export default StoryCard;
