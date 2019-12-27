import React from "react";
import StoryCard from "./story-card";

const fakeStories = [
  { id: 1, picture: "https://picsum.photos/160/300", seen: true },
  { id: 2, picture: "https://picsum.photos/160/300", seen: false },
  { id: 3, picture: "https://picsum.photos/160/300", seen: false },
  { id: 4, picture: "https://picsum.photos/160/300", seen: false },
  { id: 5, picture: "https://picsum.photos/160/300", seen: false },
  { id: 6, picture: "https://picsum.photos/160/300", seen: false }
];

const currentUser = {
  picture: "https://picsum.photos/160/300"
};

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
