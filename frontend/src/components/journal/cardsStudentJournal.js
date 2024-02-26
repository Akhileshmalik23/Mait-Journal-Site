import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

export default function MediaCardStudents() {
  return (
    <div>
      <h2 style={{ margin: "20px" }}>Student Journals: </h2>
      <div style={{ display: "flex" }}>
        <Card
          sx={{
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            margin: "6px",
            padding: "4px",
            height: "300px",
            width: "1200px",
            backgroundColor: "#98ABEE",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "translateY(8px)",
            },
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Student: Emily Thompson
            </Typography>
            <Typography gutterBottom varient="h4" component="div">
              Title: "Exploring the Impact of Social Media on Mental Health"
            </Typography>
            <Typography variant="body2" color="text.secondary">
              n this study, we delve into the correlation between social media
              usage and mental health among college students. Our findings shed
              light on the potential negative effects of excessive screen time
              and offer insights into developing healthier digital habits for
              improved well-being.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <DoneIcon />
            </Button>

            <Button size="small">
              <CloseIcon />
            </Button>
          </CardActions>
        </Card>

        <Card
          sx={{
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            margin: "6px",
            padding: "4px",
            height: "300px",
            width: "1200px",
            backgroundColor: "#98ABEE",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "translateY(8px)",
            },
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Student: Raj Patel
            </Typography>
            <Typography gutterBottom varient="h4" component="div">
              Title: "Green Energy Solutions for Sustainable Campus Living"
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Our research focuses on implementing renewable energy sources
              within the university campus. By exploring solar and wind energy
              solutions, we propose practical approaches for creating a more
              sustainable and eco-friendly environment. This work contributes to
              the campus's commitment to reducing its carbon footprint.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <DoneIcon />
            </Button>

            <Button size="small">
              <CloseIcon />
            </Button>
          </CardActions>
        </Card>

        <Card
          sx={{
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            margin: "6px",
            padding: "4px",
            height: "300px",
            width: "1200px",
            backgroundColor: "#98ABEE",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "translateY(8px)",
            },
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Student: Aisha Khan
            </Typography>
            <Typography gutterBottom varient="h4" component="div">
              Title: "Augmented Reality in Education: Enhancing Classroom
              Learning"
            </Typography>
            <Typography variant="body2" color="text.secondary">
              In this journal, we discuss the integration of augmented reality
              (AR) technology to enhance traditional classroom learning
              experiences. Our findings reveal the positive impact of AR in
              increasing student engagement and understanding complex concepts.
              The study explores the potential of AR as a valuable educational
              tool.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <DoneIcon />
            </Button>

            <Button size="small">
              <CloseIcon />
            </Button>
          </CardActions>
        </Card>
      </div>

      {/* ####################################### */}

      <div style={{ display: "flex" }}>
        <Card
          sx={{
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            margin: "6px",
            padding: "4px",
            height: "300px",
            width: "1200px",
            backgroundColor: "#98ABEE",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "translateY(8px)",
            },
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Student: Carlos Mendez
            </Typography>
            <Typography gutterBottom varient="h4" component="div">
              Title: "Urban Gardening: Transforming Campus Spaces"
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Our project focuses on transforming underutilized campus spaces
              into thriving urban gardens. By involving students in sustainable
              gardening practices, we aim to create green havens that promote
              environmental awareness, community engagement, and provide fresh
              produce for the campus community.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <DoneIcon />
            </Button>

            <Button size="small">
              <CloseIcon />
            </Button>
          </CardActions>
        </Card>

        <Card
          sx={{
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            margin: "6px",
            padding: "4px",
            height: "300px",
            width: "1200px",
            backgroundColor: "#98ABEE",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "translateY(8px)",
            },
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Student: Mei Ling Wu
            </Typography>
            <Typography gutterBottom varient="h4" component="div">
              Title: "Cybersecurity Awareness Among University Students"
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Examining the level of cybersecurity awareness among university
              students, our research highlights common misconceptions and
              vulnerabilities. We propose strategies for enhancing cybersecurity
              education, promoting responsible online behavior, and mitigating
              potential risks for both individuals and the institution.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <DoneIcon />
            </Button>

            <Button size="small">
              <CloseIcon />
            </Button>
          </CardActions>
        </Card>

        <Card
          sx={{
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            margin: "6px",
            padding: "4px",
            height: "300px",
            width: "1200px",
            backgroundColor: "#98ABEE",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "translateY(8px)",
            },
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Student: David Chang
            </Typography>
            <Typography gutterBottom varient="h4" component="div">
              Title: "Innovative Solutions for Student Stress Management"
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This study explores innovative approaches to address stress among
              college students. From mindfulness techniques to incorporating
              stress-relief activities into the academic schedule, our research
              aims to contribute practical strategies for creating a more
              supportive and mentally healthy campus environment.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <DoneIcon />
            </Button>

            <Button size="small">
              <CloseIcon />
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
