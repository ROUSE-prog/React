// Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h6" className="navbar-brand">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            ReactiveBug
          </Link>
        </Typography>
        <Button color="inherit" component={Link} to="/create" className="navbar-create">
          Create Bug
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
