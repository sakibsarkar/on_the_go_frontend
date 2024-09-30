"use client";

import CreatePostModal from "../PostCreate/CreatePost";
import FolowingList from "./FolowingList";
import MyFollowers from "./MyFollowers";
const ContentBar = () => {
  return (
    <div className="w-64 bg-white p-4 hidden lg:block">
      <h2 className="font-semibold mb-4">Seemed Stories</h2>
      <CreatePostModal />
      <MyFollowers />
      <FolowingList />
    </div>
  );
};

export default ContentBar;
