import React from "react";
import StoryCard from "./story-card";
import { fakeStories, currentUser } from "./../utils/fake-data";

function StoryCards() {
  const containerScroll = React.useRef(null);
  const [scrollStyle, setScrollStyle] = React.useState(false);

  function handleOnScroll() {
    containerScroll.current.scrollLeft > 50
      ? setScrollStyle(true)
      : setScrollStyle(false);
  }

  return (
    <div
      className="flex overflow-x-auto w-full px-8 py-4 bg-white"
      ref={containerScroll}
      onScroll={handleOnScroll}
    >
      <StoryCard currentUser={currentUser} scrollStyle={scrollStyle} />
      {fakeStories.map(data => (
        <StoryCard key={data.id} data={data} />
      ))}
    </div>
  );
}

export default StoryCards;
