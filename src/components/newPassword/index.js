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
import { useFormik } from "formik";
import { newPasswordSchema } from "../../schemas/newPassword";
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

const NewPassword = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [confirmPassword, setConfirmPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickConfirmPassword = () => setConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { values, errors, handleSubmit, handleBlur, handleChange, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: newPasswordSchema,
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
          <img src={ImagePath.Icon} style={Styles.image1}></img>
        </Grid>
        <Grid lg={12} md={12} sm={12} style={Styles.grid12}>
          <img src={ImagePath.Iphone} style={Styles.image2}></img>
          <img src={ImagePath.Card} style={Styles.image3}></img>
        </Grid>
      </Grid>
      <div style={Styles.blurOverlay}></div>

      <Grid lg={6} md={6} sm={5.5} xs={12} style={Styles.grid2}>
        <form onSubmit={handleSubmit} style={Styles.form}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              style={{
                alignContent: "left",
                //   display: "flex",
                //   backgroundColor: "red",
              }}
            >
              <h2
                style={{
                  alignContent: "left",
                  fontWeight: "bolder",
                  marginBottom: -18,
                }}
              >
                Create new password
              </h2>
            </Typography>
            <Typography style={{ alignContent: "left", display: "flex" }}>
              <h5 style={{ fontWeight: "normal", color: "grey" }}>
                Your new password must be unique from those
                <br /> previously used.{" "}
              </h5>
            </Typography>
          </div>
          {/* <CssTextField1
            variant="outlined"
            label="Enter your email"
            fullWidth
            margin="normal"
            size="small"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ height: "45px" }}
            inputProps={{
              style: { zIndex: 1, fontSize: 14 },
            }}
            InputLabelProps={{
              style: { fontSize: 14, alignItems: "center", display: "flex" },
            }}
          /> */}

          <CustomFormControl
            size="small"
            variant="outlined"
            fullWidth
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ height: "6px" }}
          >
            <InputLabel
              htmlFor="password"
              style={{ fontSize: 14, alignItems: "center", display: "flex" }}
            >
              New Password
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
            <h5 className="form-error">{errors.password}</h5>
          )}

          <div
            style={{
              marginTop: errors.password ? "30px" : "35px",
            }}
          >
            <CustomFormControl
              size="small"
              variant="outlined"
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{ height: "6px" }}
            >
              <InputLabel
                htmlFor="confirmPassword"
                style={{ fontSize: 14, alignItems: "center", display: "flex" }}
              >
                Confirm Password
              </InputLabel>
              <OutlinedInput
                inputProps={{
                  style: { zIndex: 1, fontSize: 14 },
                }}
                id="confirmPassword"
                type={confirmPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      style={{ zIndex: 1 }}
                    >
                      {confirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Enter your password"
              />
            </CustomFormControl>
            {touched.confirmPassword && errors.confirmPassword && (
              <h5 className="form-error" style={{ marginBottom: -5 }}>
                {errors.confirmPassword}
              </h5>
            )}
          </div>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            style={Styles.Button}
          >
            <Typography style={{ fontSize: 20, fontWeight: "normal" }}>
              Reset Password
            </Typography>
          </Button>
          {/* <a href="/signup" style={Styles.link1}>
            Don't Have an account? &nbsp;
            <span style={{ color: "#86191b", fontWeight: "bold" }}>
              Register Now
            </span>
          </a> */}
        </form>
      </Grid>
    </Grid>
  );
};

export default NewPassword;
