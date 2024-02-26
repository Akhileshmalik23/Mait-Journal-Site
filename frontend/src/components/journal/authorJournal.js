import React from "react";
import Navbar from "../navbar/Navbar";
import MediaCard from "./cardsAuthorJournal";

const AuthorJournal = () => {
  return (
    <div style={{ backgroundColor: "#CCD3CA", height: "120vh" }}>
      <Navbar />
      <MediaCard />
    </div>
  );
};

export default AuthorJournal;
