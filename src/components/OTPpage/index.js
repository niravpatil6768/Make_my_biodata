import React, { useRef, useState } from "react";
import {
  Button,
  Grid,
  Select,
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
import PhoneInput from "react-phone-number-input/input";
import { useFormik } from "formik";
const theme = createTheme();

const CssTextField1 = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "red",
    background: "red",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "lightgrey",
      borderRadius: 9,
      borderWidth: 1,
      background: "#f4f4f4",
      //   background: "linear-gradient(to right,  #f35491, #fe5356,  #ee7724)",
    },
    "&:hover fieldset": {
      borderColor: "#f35491",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#f35491",
      background: "white",
    },
    "& .filledInput": {
      background: "red",
      color: "white",
    },
  },
});

const CssPhoneField = styled(PhoneInput)({
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

const Otppage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [phone, setPhone] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { values, errors, handleSubmit, handleBlur, handleChange, touched } =
    useFormik({
      initialValues: { phone: ""},
      onSubmit: (values) => {
        console.log("values:", values);
      },
    });

  // Define options for the country code select
  const countryOptions = [
    { value: "+1", label: "United States (+1)" },
    { value: "+91", label: "India (+91)" },
    // Add more options as needed
  ];

  // Handle change in country code selection
  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const [otp, setOTP] = useState(["", "", "", ""]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleChange1 = (index, value) => {
    if (value.length === 1 && /^\d*$/.test(value)) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      if (index < 3) {
        inputRefs[index + 1].current.focus();
      }
    } else if (value.length === 0) {
      // Allow backspacing
      const newOTP = [...otp];
      newOTP[index] = "";
      setOTP(newOTP);
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    }
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
        <Grid lg={12} md={12} sm={12} style={Styles.grid11}>
          <img src={ImagePath.Card} style={Styles.image2}></img>
        </Grid>
      </Grid>
      <div style={Styles.blurOverlay}></div>

      {/* <CssTextField1
            variant="outlined"
            label="Username"
            fullWidth
            margin="normal"
            size="small"
            style={{ height: "30px" }}
            inputProps={{
              style: { zIndex: 1, fontSize: 14 },
            }}
            InputLabelProps={{
              style: { fontSize: 14, alignItems: "center", display: "flex" },
            }}
          />

          <CssTextField1
            variant="outlined"
            label="Enter your full name"
            fullWidth
            margin="normal"
            size="small"
            style={{ height: "30px" }}
            inputProps={{
              style: { zIndex: 1, fontSize: 14 },
            }}
            InputLabelProps={{
              style: { fontSize: 14, alignItems: "center", display: "flex" },
            }}
          />

          <CssTextField1
            variant="outlined"
            label="Enter your email"
            fullWidth
            margin="normal"
            size="small"
            style={{ height: "45px" }}
            inputProps={{
              style: { zIndex: 1, fontSize: 14 },
            }}
            InputLabelProps={{
              style: { fontSize: 14, alignItems: "center", display: "flex" },
            }}
          />

          <Select
            options={countryOptions}
            value={selectedCountry}
            onChange={handleCountryChange}
            placeholder="Select Country"
          />
          <CssPhoneField
            placeholder="Enter phone number"
            value={phone}
            onChange={setPhone}
            country={selectedCountry?.value} // Pass the selected country code
            international
          />

          <CustomFormControl
            size="small"
            variant="outlined"
            fullWidth
            style={{ height: "45px" }}
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
          <a href="#" style={Styles.link1}>
            Forgot Password?
          </a>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={Styles.button}
          >
            <Typography style={{ fontSize: 20, fontWeight: "normal" }}>
              Register
            </Typography>
          </Button>
          <a href="/" style={Styles.link2}>
            Already Have an account? &nbsp;
            <span style={{ color: "#86191b", fontWeight: "bold" }}>
              Login Now
            </span>
          </a> */}

      <Grid lg={6} md={6} sm={5.5} xs={12} style={Styles.grid2}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 10,
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
                marginBottom: -10,
              }}
            >
              OTP Verification
            </h2>
          </Typography>
          <Typography style={{ alignContent: "left", display: "flex" }}>
            <h5 style={{ fontWeight: "normal", color: "grey" }}>
              Enter the verification code we just sent on your email address.
            </h5>
          </Typography>
        </div>

<form>
        <Grid
          item
          //   container
          //   spacing={1}
          //   alignItems="center"
          //   justifyContent="space-between"
          style={{
            display: "flex",
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: -10,
          }}
        >
          {otp.map((digit, index) => (
            <Grid
              item
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 13,
              }}
            >
              <CssTextField1
                variant="outlined"
                size="large"
                value={digit}
                onChange={(e) => handleChange1(index, e.target.value)}
                inputRef={inputRefs[index]}
                inputProps={{
                  maxLength: 1,
                  style: { textAlign: "center", zIndex: 1, fontSize: 14 },
                }}
                style={{ width: window.innerWidth > 1030 ? 75 : 50 }}
              />
            </Grid>
          ))}
        </Grid>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          style={Styles.button}
        >
          <Typography style={{ fontSize: 20, fontWeight: "normal" }}>
            Verify
          </Typography>
        </Button>
        </form>
        <a href="/" style={Styles.link2}>
          Already Have an account? &nbsp;
          <span style={{ color: "#86191b", fontWeight: "bold" }}>
            Login Now
          </span>
        </a>
      </Grid>
    </Grid>
  );
};

export default Otppage;
