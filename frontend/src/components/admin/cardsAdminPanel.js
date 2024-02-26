import * as React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 400,
  height: 400,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
  backgroundColor: "#50C4ED", //Color of palette
  color: "white",
}));

const imgStyle = {
  width: "100%", // Adjust the width as needed
  height: "auto", // Maintain aspect ratio
  marginTop: "15px",
};

const studentButtonStyle = {
  marginTop: "20px",
};
const authorButtonStyle = {
  marginTop: "50px",
};

export default function CardAuthorStudent() {
  // function sendToAuthorJournal() {
  //     <a href="adminpanel/src/pages/authorJournal.js"/>
  // }

  return (
    <div
      style={{
        marginTop: "40px",
      }}
    >
      <Stack direction="row" spacing={2} className="res">
        <DemoPaper square>
          Review Journal submitted by authors{" "}
          <img
            src="imagesForAdminPanel/Journalimg4.avif"
            alt="Logo"
            style={imgStyle}
          />
          <Link to="/authorJournal">
            <Button
              variant="contained"
              disableElevation
              style={authorButtonStyle}
            >
              Author Journal
            </Button>
          </Link>
        </DemoPaper>
        <DemoPaper square>
          Review Journal submitted by students{" "}
          <img
            src="imagesForAdminPanel/Journalimg3.avif"
            alt="Logo"
            style={imgStyle}
          />
          <Link to="/studentJournal">
            <Button
              variant="contained"
              disableElevation
              style={studentButtonStyle}
            >
              Student Journal
            </Button>
          </Link>
        </DemoPaper>
      </Stack>
    </div>
  );
}
