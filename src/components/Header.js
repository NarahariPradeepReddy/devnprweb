import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

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
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
        DesignbyNarahari
        </Typography>


        {/* Desktop Navigation Links */}
        <div style={{ display: "flex", gap: "15px", marginLeft: "auto", display: { xs: "none", sm: "block" } }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/portfolio">Portfolio</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
        </div>

        {/* Mobile Drawer Menu */}
        <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
          <List>
            <ListItem button onClick={() => toggleDrawer(false)}>
              <ListItemText>
                <Button color="inherit" component={Link} to="/">Home</Button>
              </ListItemText>
            </ListItem>
            <ListItem button onClick={() => toggleDrawer(false)}>
              <ListItemText>
                <Button color="inherit" component={Link} to="/about">About</Button>
              </ListItemText>
            </ListItem>
            <ListItem button onClick={() => toggleDrawer(false)}>
              <ListItemText>
                <Button color="inherit" component={Link} to="/portfolio">Portfolio</Button>
              </ListItemText>
            </ListItem>
            <ListItem button onClick={() => toggleDrawer(false)}>
              <ListItemText>
                <Button color="inherit" component={Link} to="/contact">Contact</Button>
              </ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
