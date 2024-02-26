import React from "react";
// import Navbar from "../navbar/Navbar";
import CardAuthorStudent from "./cardsAdminPanel";

const Admin = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#CCD3CA",
        height: "100vh",
      }}
    >
      <CardAuthorStudent />
    </div>
  );
};

export default Admin;
