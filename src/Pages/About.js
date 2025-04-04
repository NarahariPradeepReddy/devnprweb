import React from "react";
import { Typography, Box, Divider, Chip, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom"; // If using React Router for navigation
import Logo from "../assets/logo.jpg";

export default function About() {
  return (
    <Box
      sx={{
        padding: 4,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(${Logo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        animation: "backgroundAnimation 10s ease infinite",
        "@keyframes backgroundAnimation": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      }}
    >
      <Typography variant="h4" align="center" sx={{ marginBottom: 2 }}>
        About Me
      </Typography>
      <Typography variant="body1" align="center" sx={{ marginBottom: 3 }}>
        I am a Senior React.js Developer with over 5 years of IT experience,
        including 2 years specializing in frontend development with React.
        Skilled in creating responsive and user-friendly websites that enhance
        user experience.
      </Typography>

      <Divider sx={{ marginY: 3 }} />
      <Typography variant="h6" align="center">
        Key Skills
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: 2,
        }}
      >
        {[
          "HTML5",
          "CSS3",
          "JavaScript",
          "React.js",
          "TypeScript",
          "React Redux",
        ].map((skill) => (
          <Chip
            label={skill}
            key={skill}
            color="primary"
            sx={{ margin: 0.5,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#fefefe", 
                color: "#555",
              },
             }}
          />
        ))}
      </Box>

      <Divider sx={{ marginY: 3 }} />
      <Typography variant="h6" align="center">
        Technical Skills
      </Typography>
      <Typography variant="body2" align="center" sx={{ marginBottom: 2 }}>
        <strong>Web Technologies:</strong> HTML, CSS, Reactstrap
        <br />
        <strong>Programming & Frameworks:</strong> JavaScript, React Hooks,
        Redux
        <br />
        <strong>Tools:</strong> Visual Studio Code, Postman
        <br />
        <strong>Operating Systems:</strong> Linux, UNIX, Windows 10
      </Typography>

      <Divider sx={{ marginY: 3 }} />
      <Typography variant="h6" align="center">
        Education
      </Typography>
      <Typography variant="body2" align="center">
        Bachelor of Technology (B.Tech) in Mechanical Engineering
        <br />
        Sri Venkateswara Institute of Technology, 2017
      </Typography>

      <Divider sx={{ marginY: 3 }} />
      <Typography variant="h6" align="center">
        Experience Highlights
      </Typography>
      <Typography variant="body2" align="center">
        <strong>ProtonsHub Technologies:</strong> Sr. Software Engineer
        <br />
        Led development on high-quality, responsive applications with React.js.
        <br />
        <strong>Concentrix:</strong> Sr. Representative
        <br />
        Developed excellent communication and problem-solving skills.
      </Typography>

      <Divider sx={{ marginY: 3 }} />
      <Typography variant="h6" align="center">
        Notable Projects
      </Typography>
      <Typography variant="body2" align="center">
        <strong>JaldiLab:</strong> Developed legal information platform pages.
        <br />
        <strong>Sourceasy:</strong> Built key authentication components.
      </Typography>

      <Divider sx={{ marginY: 3 }} />
      <Typography variant="h6" align="center">
        Personal Attributes
      </Typography>
      <Typography variant="body2" align="center">
        Problem-solving, critical thinking, strong communication, and team
        collaboration skills.
      </Typography>

      <Box sx={{ textAlign: "center", marginTop: 4 }}>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ padding: "0.75rem 2rem" }}
          component={Link}
          to="/contact"
        >
          Contact Me
        </Button>
      </Box>
    </Box>
  );
}
