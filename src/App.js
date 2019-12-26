import React from "react";
import StoryCards from "./components/story-cards";

function App() {
  return (
    <div className="h-screen bg-gray-200 flex flex-col items-center justify-around">
      <header>
        <h1 className="text-4xl">Facebook stories demo</h1>
      </header>
      <StoryCards />
      <footer className="text-2xl">
        by{" "}
        <a className="hover:text-gray-700" href="http://twitter.com/cristianbgp" target="blank">
          @cristianbgp
        </a>
      </footer>
    </div>
  );
}

export default App;
