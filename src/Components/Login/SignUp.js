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
import image1 from "../../images/image1.png";
import google from "../../images/google.svg";
import facebook from "../../images/facebook.svg";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import lhheart from "../../images/lhheart.svg";
import lhlike from "../../images/lhlike.svg";
import lhcup from "../../images/lhcup.svg";
import lhring from "../../images/lhring.svg";

export default function SignUp() {
  return (
    <div className="login-form">
      <div className="login-left">
        <img src={lhheart} className="lhheart"></img>
        <img src={lhlike} className="lhlike"></img>
        <img src={lhring} className="lhring"></img>
        <img src={lhcup} className="lhcup"></img>
        <div className="img-wrapper">
          <img className="main-img" src={image1}></img>
        </div>
      </div>
      <div className="login-right">
        <div className="login-right-wrapper">
          <div className="header">
            <img src={logo}></img>
            <h3> Welcome to liveheart </h3>
            <span> Already have an account ? </span>{" "}
            <Link href="/login" color="primary">
              Login
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
            Create an Account
          </Button>
          <Box mb={5} mt={5} className="devider-text-wrap">
            <Divider />
            <span className="devider-text">Or</span>
          </Box>
          <div className="two-section">
            <Button variant="outlined" color="" href="#contained-buttons">
              <img src={google} className="button-icon"></img>
              Sign up with google
            </Button>
            <Button
              variant="contained"
              color=""
              href="#contained-buttons"
              className="btn-facebook"
            >
              <img src={facebook} className="button-icon"></img>Sign up with
              Facebook
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
