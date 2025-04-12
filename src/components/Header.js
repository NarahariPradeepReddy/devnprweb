import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Button, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#017d23" }}>
      <Toolbar>
        {/* Mobile Menu Icon */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { sm: "none" } }}
          onClick={() => toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={Logo} alt="Logo" style={{ height: "40px", marginRight: "10px" }} />
          <Typography variant="h6">DesignbyNarahari</Typography>
        </Box>

        {/* Desktop Navigation Links */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "15px", marginLeft: "auto" }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/portfolio">Portfolio</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
        </Box>

        {/* Mobile Drawer Menu */}
        <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
        <List>
  {["Home", "About", "Portfolio", "Contact"].map((text, index) => {
    const path = text === "Home" ? "/" : `/${text.toLowerCase()}`;
    return (
      <ListItem
        button
        key={index}
        component={Link}
        to={path}
        onClick={() => toggleDrawer(false)}
      >
        <ListItemText primary={text} />
      </ListItem>
    );
  })}
</List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
