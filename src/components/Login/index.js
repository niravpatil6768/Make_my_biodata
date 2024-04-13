import React from "react";
import {
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Styles from "./style";
import { styled } from "@mui/material/styles";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import ImagePath from "../../assets/images";
import { UseMediaQuery } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Field, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { signinSchema } from "../../schemas/signin";
import { loginService } from "../../services/ApiService";
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
  email: "",
  password: "",
};

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [focusedField, setFocusedField] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(true);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { values, errors, handleSubmit, handleBlur, handleChange, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signinSchema,
      onSubmit: async (values) => {
        try {
          const response = await loginService(values);
          // Check if the response has a 'status' property
          if (response.status === "success") {
            console.log("login successfully: ", response);
            setError(null);
            navigate("/homepage");
          } else if (response.status === "error") {
            // Check if the response has an 'error' property
            console.log("login failed: ", response);
            console.log(response.message);
            const loginerror = response.message;
            setError(loginerror);
          }  else if (response.status === "fail") {
            // Check if the response has an 'error' property
            console.log("login failed: ", response);
            console.log(response.message);
            const loginerror = response.message;
            setError(loginerror);
          }
        } catch (error) {
          // Handle errors from the network request
          setSubmitted(false);
          console.log("error in login user: ", error);
          const loginerror = error.message || "Network request failed";
          setError(loginerror);
        }
      },
    });

  // Custom handleBlur function to update the focused field
  const customHandleBlur = (fieldName) => (event) => {
    setFocusedField(fieldName);
    handleBlur(event);
  };

  // Custom handleChange function to update the focused field
  const customHandleChange = (fieldName) => (event) => {
    setFocusedField(fieldName);
    handleChange(event);
  };

  const submitForm = () => {
    // setFocusedField("");
    handleSubmit();
  };

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
        <Grid lg={12} md={12} sm={12} style={{}}></Grid>
        <Grid lg={12} md={12} sm={12} style={Styles.grid12}>
          <img src={ImagePath.Iphone} style={Styles.image2}></img>
          <img src={ImagePath.Card} style={Styles.image3}></img>
        </Grid>
      </Grid>

      <Grid
        style={Styles.blurOverlay}
        sx={{ display: { xs: "none", sm: "flex" } }}
      >
        {/* <div
          sx={{ display: { xs: "none", sm: "flex" } }}
          style={Styles.blurOverlay}
        ></div> */}
      </Grid>

      <Grid lg={6} md={6} sm={5.5} xs={12} style={Styles.grid2}>
        <form onSubmit={handleSubmit} style={Styles.form}>
          <h2 style={{ fontWeight: "bolder", marginBottom: -20 }}>
            Welcome back!
          </h2>
          <h2>Glad to see you, Again!</h2>
          {error && <h5 style={{ color: "red" }}>{error}</h5>}
          <div>
            <CssTextField1
              variant="outlined"
              label="Enter your email"
              fullWidth
              margin="normal"
              name="email"
              id="email"
              style={{ height: "7px" }}
              autoComplete="off"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              size="small"
              inputProps={{
                style: { zIndex: 1, fontSize: 14 },
              }}
              InputLabelProps={{
                style: { fontSize: 14, alignItems: "center", display: "flex" },
              }}
            />
            {/* <h5 style={{ marginBottom: 15 }} className="form-error">
              {errors.email}
            </h5> */}
            {touched.email && errors.email && (
              <h5 style={{ marginBottom: -20 }} className="form-error">
                {errors.email}
              </h5>
            )}
          </div>

          <div
            style={{
              marginTop:
                focusedField == "email" && errors.email ? "0px" : "40px",
              marginBottom: "20px",
            }}
          >
            <CustomFormControl
              size="small"
              variant="outlined"
              fullWidth
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{ height: "1px" }}
            >
              <InputLabel
                htmlFor="password"
                style={{ fontSize: 14, alignItems: "center", display: "flex" }}
              >
                Enter your password
              </InputLabel>
              <OutlinedInput
                inputProps={{
                  style: { zIndex: 1, fontSize: 14 },
                }}
                id="password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      style={{ zIndex: 1 }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Enter your password"
              />
            </CustomFormControl>
            {touched.password && errors.password && (
              <h5 style={{ marginBottom: -15 }} className="form-error">
                {errors.password}
              </h5>
            )}
          </div>

          <div style={Styles.linkDiv}>
            <a href="/forgetpassword" style={Styles.link}>
              Forgot Password?
            </a>
          </div>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            style={Styles.Button}
          >
            <Typography style={{ fontSize: 20, fontWeight: "normal" }}>
              Login
            </Typography>
          </Button>
          <div style={Styles.link2div}>
            <a href="/signup" style={Styles.link2}>
              Don't have an account? &nbsp;
              <span style={{ color: "#86191b", fontWeight: "bold" }}>
                Register Now
              </span>
            </a>
          </div>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
