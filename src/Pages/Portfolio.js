import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  List,
  ListItem,
} from "@mui/material";

export default function Portfolio() {
  const projects = [
    {
      title:
        "SliceTheFruits - E-Commerce Platform with Real-Time Order Tracking",
      overview:
        "A React-based e-commerce platform that allows customers to order fruits, manage the shopping process, and track orders in real-time.",
      features: [
        "User Authentication with secure login/signup and password reset",
        "Product pages with detailed views and a search bar",
        "Shopping Cart & Checkout for order placement",
        "Real-time Order Tracking with status updates and estimated delivery",
        "Responsive UI using Material-UI and Bootstrap",
        "Routing & Navigation with React Router",
      ],
      techStack: [
        "React.js",
        "Material-UI",
        "Bootstrap",
        "React Router",
        "GitHub Pages",
      ],
      impact:
        "This platform provides a smooth online shopping experience with real-time order tracking and an intuitive UI.",
      link: "https://naraharipradeepreddy.github.io/slicethefruits/",
    },
    {
      title: "Admin Dashboard - Management Interface",
      overview:
        "An advanced Admin Dashboard built with React and TypeScript, focusing on user management, data visualization, and responsive design.",
      features: [
        "Data Visualization with interactive charts",
        "User Management including authentication and access control",
        "Responsive Design across all devices",
      ],
      techStack: ["React.js", "TypeScript", "Chart.js", "GitHub"],
      impact:
        "The dashboard streamlines data management, enhancing decision-making for administrators.",
      link: "https://naraharipradeepreddy.github.io/Admin-Dashboard/",
    },
  ];

  return (
    <Box
      sx={{
        padding: 3,
        background:
          "linear-gradient(45deg, #ffffff, #e0e0e0, #a9a9a9, #6e6e6e)",
        animation: "backgroundAnimation 10s ease infinite",
        "@keyframes backgroundAnimation": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      }}
    >
      <Typography variant="h4" textAlign="center" gutterBottom>
        My Projects
      </Typography>

      <Grid container spacing={3}>
        {projects.length === 0 ? (
          <Grid item xs={12}>
            <Typography variant="body1" align="center">
              No projects available.
            </Typography>
          </Grid>
        ) : (
          projects.map((project, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Paper sx={{ padding: 3, minHeight: 400 }}>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    background:
                      "linear-gradient(60deg,#375c59,#5a8a86, #59a8a1, #a4d2ce, #9beae3, #78cfc7,  #a4d2ce, #59a8a1,  #375c59)",
                    color: "#fefefe",
                    padding: 2,
                  }}
                >
                  {project.title}
                </Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                  {project.overview}
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold">
                  Key Features:
                </Typography>
                <List>
                  {project.features.map((feature, idx) => (
                    <ListItem key={idx}>
                      <Typography variant="body2">{feature}</Typography>
                    </ListItem>
                  ))}
                </List>
                <Typography variant="subtitle1" fontWeight="bold">
                  Technologies Used:
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {project.techStack.join(", ")}
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold">
                  Project Impact:
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {project.impact}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={project.link}
                  target="_blank"
                  sx={{ mt: 2 }}
                >
                  View Project
                </Button>
              </Paper>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
}
