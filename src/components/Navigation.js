import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import axios from "axios";
import DashBord from "./DashBord";
import SearchBar from "./SearchBar";

class Navigation extends React.Component {
  state = { query: "", results: [], isLoggedIn: false };

  componentDidMount() {
    this.checkLoginStatus();
  }

  checkLoginStatus = () => {
    const url = "http://localhost:5000/loginStatus";
    const data = {
      cookie: document.cookie
    };
    axios
      .post(url, data, { withCredentials: true })
      .then((res) => {
        if (res.data.status === "success") {
          this.setState({ isLoggedIn: true });
        } else {
          this.setState({ isLoggedIn: false });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <AppBar position="static" style={{ backgroundColor: "#34515e" }}>
        <Container maxWidth="xl">
          <Toolbar>
            <Typography>
            <NavLink
                to="/About"
                className="active"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginRight: "15px",
                }}
              >
                About
              </NavLink>
              <NavLink
                to="/"
                className="active"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginRight: "15px",
                }}
              >
                Home
              </NavLink>

              <NavLink
                to="/newpost"
                className="active"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginRight: "15px",
                }}
              >
                New Post
              </NavLink>
            </Typography>
            <SearchBar />
            <div style={{ display: "flex", justifyContent: "flex-end", flexGrow: 1 }}>
              {!this.state.isLoggedIn ? (
                <>
                  <Button color="inherit">
                    <NavLink
                      to="/login"
                      className="active"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Login
                    </NavLink>
                  </Button>
                  <Button color="inherit">
                    <NavLink
                      to="/register"
                      className="active"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Register
                    </NavLink>
                  </Button>
                </>
              ) : (
                <DashBord />
              )}
            </div>
          </Toolbar>
        </Container>  
      </AppBar>
    );
  }
}

export default Navigation;
