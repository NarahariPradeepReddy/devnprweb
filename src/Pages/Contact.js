import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  CircularProgress,
} from "@mui/material";
import emailjs from "emailjs-com";
import Logo from "../assets/logo.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(""); // Corrected typo

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/;

      if (!emailRegex.test(value)) {
        setEmailError("Please enter a valid email");
      } else {
        setEmailError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_s414jhu",
        "template_cbr07in",
        e.target,
        "7ppHo-4BBaJ1RLagy"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send the message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <Box
      sx={{
        padding: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(45deg, #ffffff, #e0e0e0, #a9a9a9, #6e6e6e)",
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
      <Box
        sx={{
          padding: 3,
          display: "flex",
          flexDirection: "column",
          maxWidth: 400,
          gap: 2,
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          background: "#fefefe",
          boxShadow: "1px 10px 8px 4px rgb(0,0,0,0.3)",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h4" gutterBottom color="#264d22">
          Contact Me
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            placeholder="Enter your name"
            variant="outlined"
            required
            fullWidth
            value={formData.name}
            onChange={handleChange}
            sx={{ mb: 1 }}
          />
          <TextField
            label="Email"
            name="email"
            placeholder="Enter your email"
            variant="outlined"
            fullWidth
            required
            value={formData.email}
            onChange={handleChange}
            error={!!emailError}
            helperText={emailError}
            sx={{ mb: 1 }}
          />
          <TextField
            label="Message"
            name="message"
            placeholder="Enter your message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            sx={{ mb: 1 }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ marginTop: 2 }}
            disabled={loading || !!emailError}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </Box>
    </Box>
  );
}
