import React from 'react';
import { Box, Typography, Grid, Paper, Button, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import Prpic from '../assets/Prpic1.png'
import Logo from "../assets/logo.jpg";

export default function Home() {
  return (
    <Box
      sx={{
        padding: { xs: 2, md: 4 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(45deg, #ffffff, #e0e0e0, #a9a9a9, #6e6e6e)',
        backgroundImage: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(${Logo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >

      <Grid container justifyContent="center" sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
          <Avatar
              alt="Narahari Pradeep Kumar Reddy"
              src={Prpic} 
              sx={{ width: 100, height: 100, marginBottom: 2, mx: 'auto' }}
            />
            <Typography variant="h4">Welcome to Design by Narahari</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Hi, I’m Narahari Pradeep Kumar Reddy, a Frontend Developer specializing in React, TypeScript, and Material-UI.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 3,
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "blue"
                }
               }}
              component={Link} to="/about" 
            >
              Learn More About Me
            </Button>
          </Paper>
        </Grid>
      </Grid>

      {/* About Section Preview */}
      <Grid container justifyContent="center" sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h5">About Me</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              I have over 5 years of experience in web development, working with technologies like React.js, TypeScript, and more. 
              Explore my journey in the About section.
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              sx={{ mt: 3,
                "&:hover": {
                  backgroundColor: "#1565c0",
                  color: "#fff"
                }
               }}
              component={Link} to="/about" 
            >
              Read My Story
            </Button>
          </Paper>
        </Grid>
      </Grid>

      {/* Portfolio Section Preview */}
      <Grid container justifyContent="center" sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h5">My Work</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Check out some of the projects I’ve worked on. My portfolio showcases various works across different industries.
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              sx={{ mt: 3,
                 "&:hover": {
                  backgroundColor: "#1565c0",
                  color: "#fff"
                } }}
              component={Link} to="/portfolio" 
            >
              View Portfolio
            </Button>
          </Paper>
        </Grid>
      </Grid>

      {/* Contact Section Preview */}
      <Grid container justifyContent="center" sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h5">Contact Me</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Interested in working together or have questions? Feel free to reach out!
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              sx={{ mt: 3,
                "&:hover": {
                  backgroundColor: "#1565c0",
                  color: "#fff"
                }
               }}
              component={Link} to="/contact"
            >
              Get in Touch
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
