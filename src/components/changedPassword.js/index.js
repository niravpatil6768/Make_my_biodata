import React, { useState } from "react";
import {
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Styles from "./style";
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import ImagePath from "../../assets/images";
import { UseMediaQuery } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
// import "react-phone-input-2/lib/style.css";
const theme = createTheme();

const CssTextField1 = styled(TextField)({
  "& label.Mui-focused": {
    color: "grey",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "red",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "lightgrey",
      borderRadius: 5,
      borderWidth: 1,
      background: "#f4f4f4",
    },
    "&:hover fieldset": {
      borderColor: "#f35491",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#f35491",
    },
  },
});

const CustomFormControl = styled(FormControl)({
  "& label.Mui-focused": {
    color: "grey",
  },
  "& .MuiInput-underline:after": {
    // borderBottomColor: "red",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "lightgrey",
      borderRadius: 5,
      borderWidth: 1,
      background: "#f4f4f4",
    },
    "&:hover fieldset": {
      borderColor: "#f35491",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#f35491",
    },
  },
});

const initialValues = {
  password: "",
  confirmPassword: "",
};

const ChangedPassword = () => {
  return (
    <Grid container style={Styles.container}>
      <Grid
        container
        style={Styles.grid1}
        lg={6}
        md={6}
        sm={6.5}
        sx={{ display: { xs: "none", sm: "flex" } }}
      >
        <Grid lg={12} md={12} sm={12} style={{}}>
          <img src={ImagePath.Icon} style={Styles.image1}></img>
        </Grid>
        <Grid lg={12} md={12} sm={12} style={Styles.grid12}>
          {/* <img src={Iphone} style={Styles.image2}></img>
          <img src={Card} style={Styles.image3}></img>

          <div style={Styles.blurOverlay}></div> */}
        </Grid>
      </Grid>

      <Grid lg={6} md={6} sm={5.5} xs={12} style={Styles.grid2}>
        <form style={Styles.form}>
          <Grid
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={ImagePath.Success} style={Styles.image4}></img>
          </Grid>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              style={{
                alignContent: "center",
                justifyContent: "center",
                display: "flex",
                //   backgroundColor: "red",
              }}
            >
              <h2
                style={{
                  alignContent: "center",
                  fontWeight: "bolder",
                  marginBottom: -18,
                }}
              >
                Password Changed!
              </h2>
            </Typography>
            <Typography
              style={{
                alignContent: "left",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h5 style={{ fontWeight: "bold", color: "grey" }}>
                Your password has been changed success fully.
              </h5>
            </Typography>
          </div>

          <Link to={"/"}>
            <Button
              variant="contained"
              color="primary"
              to={`/`}
              fullWidth
              style={Styles.Button}
            >
              <Typography style={{ fontSize: 20, fontWeight: "normal" }}>
                Back to Login
              </Typography>
            </Button>
          </Link>
        </form>
      </Grid>
    </Grid>
  );
};

export default ChangedPassword;
