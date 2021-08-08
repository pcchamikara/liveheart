import {
  TextField,
  Grid,
  Box,
  Button,
  Divider,
  Checkbox,
  Icon
} from "@material-ui/core";
import React from "react";
import image2 from "../../images/image2.jpg";
import google from "../../images/google.svg";
import facebook from "../../images/facebook.svg";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login-form">
      <div className="login-left login-section">
        <div className="img-wrapper">
          <img className="main-img-login" src={image2}></img>
        </div>
      </div>
      <div className="login-right">
        <div className="login-right-wrapper">
          <div className="header">
            <img src={logo}></img>
            <h3> Welcome to liveheart </h3>
            <span> Don't have an account ? </span>{" "}
            <Link href="/signup" color="primary">
              Sign up
            </Link>
          </div>
          <Box mb={5} mt={5}>
            <Divider />
          </Box>
          <Grid item xs="12" mb={3}>
            <Box mb={5}>
              <TextField
                required
                placeholder="Enter your emil address"
                label="Email address"
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item xs="12">
            <Box mb={5}>
              <TextField
                required
                label="Password "
                placeholder="Enter your password"
                type="password"
                fullWidth
              />
            </Box>
          </Grid>
          <Checkbox /> I agree to{" "}
          <Link href="#" color="primary">
            Terms and Conditions
          </Link>{" "}
          and{" "}
          <Link href="#" color="primary">
            Privacy Policy
          </Link>
          .<Box mb={5}></Box>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            href="#contained-buttons"
          >
            Login
          </Button>
          <Box mb={5} mt={5} className="devider-text-wrap">
            <Divider />
            <span className="devider-text">Or</span>
          </Box>
          <div className="two-section">
            <Button variant="outlined" color="" href="#contained-buttons">
              <img src={google} className="button-icon"></img>
              Login with google
            </Button>
            <Button
              variant="contained"
              color=""
              href="#contained-buttons"
              className="btn-facebook"
            >
              <img src={facebook} className="button-icon"></img>Login up with
              Facebook
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
