import React from "react";
import StoryCard from "./story-card";

const fakeData = [
  { id: 1, seen: true },
  { id: 2, seen: false },
  { id: 3, seen: false },
  { id: 4, seen: false },
  { id: 5, seen: false },
  { id: 6, seen: false }
];

function StoryCards() {
  return (
    <div className="flex overflow-x-auto w-full px-8 py-4 bg-white">
      {fakeData.map(data => (
        <StoryCard key={data.id} data={data} />
      ))}
    </div>
  );
}

export default StoryCards;
