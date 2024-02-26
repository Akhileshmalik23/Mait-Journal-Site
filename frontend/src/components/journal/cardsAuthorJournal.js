import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

export default function MediaCard() {
  return (
    <div>
      <h2 style={{ margin: "20px" }}>Author Journals: </h2>
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
              Author: Dr. Alan Smith
            </Typography>
            <Typography gutterBottom varient="h4" component="div">
              Title: "Advancements in Quantum Computing"
            </Typography>
            <Typography variant="body2" color="text.secondary">
              In our research, we explored novel algorithms for quantum
              computers, pushing the boundaries of computational capabilities.
              Our work lays the foundation for solving complex problems in
              cryptography and optimization with unprecedented speed.
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
              Author: Dr. Maria Rodriguez
            </Typography>
            <Typography gutterBottom varient="h4" component="div">
              Title: "Biotechnological Innovations for Sustainable Agriculture"
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Applying machine learning techniques to medical data, our research
              demonstrates the potential of artificial intelligence in accurate
              and early disease diagnosis. This paves the way for personalized
              and efficient healthcare solutions.
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
              Author: Prof. David Chang
            </Typography>
            <Typography gutterBottom varient="h4" component="div">
              Title: "Artificial Intelligence in Healthcare Diagnosis"
            </Typography>
            <Typography variant="body2" color="text.secondary">
              In the field of robotics, our study explores the integration of
              state-of-the-art technologies in manufacturing processes. The
              research showcases increased production efficiency, precision, and
              the potential for reshaping the future of industrial automation.
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
              Author: Dr. Elena Kim
            </Typography>
            <Typography gutterBottom varient="h4" component="div">
              Title: "Materials Science Breakthroughs for Energy Storage"
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Our investigation into advanced materials for energy storage
              devices unveils remarkable improvements in efficiency and
              durability. These findings contribute significantly to the
              development of sustainable energy solutions.
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
              Author: Prof. Raj Patel
            </Typography>
            <Typography gutterBottom varient="h4" component="div">
              Title: "Robotics in Manufacturing: A Paradigm Shift"
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Exploring the integration of robotics in manufacturing processes,
              our work showcases increased production efficiency and precision.
              This research has implications for reshaping the future of
              industrial automation.
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
              Author: Dr. Aisha Khan
            </Typography>
            <Typography gutterBottom varient="h4" component="div">
              Title: "Neuroscience Insights into Learning and Memory"
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Our neuroscientific study delves into the mechanisms underlying
              learning and memory. By unraveling the complexities of the brain,
              we contribute valuable knowledge for enhancing educational
              strategies.
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
