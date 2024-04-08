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
import Icon from "/apps/MakemyBiodata/makemybiodata/src/assets/images/MakemyBiodata_icon.png";
import Card from "/apps/MakemyBiodata/makemybiodata/src/assets/images/MakemyBiodata_card.png";
import Iphone from "/apps/MakemyBiodata/makemybiodata/src/assets/images/iphone14.webp";
import { UseMediaQuery } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useFormik } from "formik";
import { signinSchema } from "../../schemas/signin";
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
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { values, errors, handleSubmit, handleBlur, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: signinSchema,
    onSubmit: (values) => {
      console.log("values: ", values);
    },
  });

  // console.log(Formik);

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
          <img src={Icon} style={Styles.image1}></img>
        </Grid>
        <Grid lg={12} md={12} sm={12} style={{}}></Grid>
        <Grid lg={12} md={12} sm={12} style={Styles.grid12}>
          <img src={Iphone} style={Styles.image2}></img>
          <img src={Card} style={Styles.image3}></img>

          <div style={Styles.blurOverlay}></div>
        </Grid>
      </Grid>

      <Grid lg={6} md={6} sm={5.5} xs={12} style={Styles.grid2}>
        <form onSubmit={handleSubmit} style={Styles.form}>
          <h2 style={{ fontWeight: "bolder", marginBottom: -20 }}>
            Welcome back!
          </h2>
          <h2>Glad to see you, Again!</h2>

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
            <h5 style={{ marginBottom: 15 }} className="form-error">
              {errors.email}
            </h5>
          </div>

          <div
            style={{
              marginTop: errors.password ? "0px" : "35px",
              marginBottom: "30px",
            }}
          >
            <CustomFormControl
              size="small"
              variant="outlined"
              fullWidth
              style={{ height: "1px" }}
            >
              <InputLabel
                htmlFor="outlined-adornment-password"
                style={{ fontSize: 14, alignItems: "center", display: "flex" }}
              >
                Enter your password
              </InputLabel>
              <OutlinedInput
                inputProps={{
                  style: { zIndex: 1, fontSize: 14 },
                }}
                id="outlined-adornment-password"
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
            <h5 className="error-form" style={{ marginBottom: -10 }}>
              {errors.password}
            </h5>
          </div>

          <a href="/forgetpassword" style={Styles.link}>
            Forgot Password?
          </a>
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
          <a href="/signup" style={Styles.link1}>
            Don't Have an account? &nbsp;
            <span style={{ color: "#86191b", fontWeight: "bold" }}>
              Register Now
            </span>
          </a>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
