import React from "react";
import Navbar from "../navbar/Navbar";
import MediaCardStudents from "./cardsStudentJournal";

const StudentJournal = () => {
  return (
    <div style={{ backgroundColor: "#CCD3CA", height: "120vh" }}>
      <Navbar />
      <MediaCardStudents />
    </div>
  );
};

export default StudentJournal;
