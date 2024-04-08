import React, { useState } from "react";
import {
  Button,
  Grid,
  MenuItem,
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
import Icon from "/apps/MakemyBiodata/makemybiodata/src/assets/images/MakemyBiodata_icon.png";
import Card from "/apps/MakemyBiodata/makemybiodata/src/assets/images/MakemyBiodata_card.png";
import Iphone from "/apps/MakemyBiodata/makemybiodata/src/assets/images/iphone14.webp";
import { UseMediaQuery } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PhoneInput from "react-phone-number-input";
import "react-international-phone/style.css";
import {
  defaultCountries,
  FlagImage,
  parseCountry,
  usePhoneInput,
} from "react-international-phone";
import "react-phone-number-input/style.css";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas/signup";
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

const CssPhoneField = styled(TextField)({
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
  name: "",
  fname: "",
  email: "",
  password: "",
};

const Signup = ({ value, ...restProps }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [phone, setPhone] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const { values, errors, handleSubmit, handleBlur, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log("values:", values);
    },
  });

  const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } =
    usePhoneInput({
      defaultCountry: "in",
      value,
      countries: defaultCountries,
      // onChange: (data) => {
      //   onChange(data.phone);
      // },
    });

  // console.log(Formik);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Handle change in country code selection
  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
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
          <img src={Icon} style={Styles.image1}></img>
        </Grid>
        <Grid lg={12} md={12} sm={12} style={Styles.grid11}>
          <img src={Card} style={Styles.image2}></img>

          <div style={Styles.blurOverlay}></div>
        </Grid>
      </Grid>

      <Grid lg={6} md={6} sm={5.5} xs={12} style={Styles.grid2}>
        <form style={Styles.form} onSubmit={handleSubmit}>
          <h2 style={{ fontWeight: "bolder", marginBottom: -20 }}>
            Hello! Register to
          </h2>
          <h2>Get Started</h2>

          <div>
            <CssTextField1
              variant="outlined"
              label="Username"
              fullWidth
              margin="normal"
              name="name"
              id="name"
              autoComplete="off"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              size="small"
              style={{ height: "5px" }}
              inputProps={{
                style: { zIndex: 1, fontSize: 14 },
              }}
              InputLabelProps={{
                style: { fontSize: 14, alignItems: "center", display: "flex" },
              }}
            />
            <h5 style={{ marginBottom: -3 }} className="form-error">
              {errors.name}
            </h5>
          </div>

          <div>
            <CssTextField1
              variant="outlined"
              label="Enter your full name"
              fullWidth
              margin="normal"
              name="fname"
              id="fname"
              autoComplete="off"
              value={values.fname}
              onChange={handleChange}
              onBlur={handleBlur}
              size="small"
              style={{ height: "6px" }}
              inputProps={{
                style: { zIndex: 1, fontSize: 14 },
              }}
              InputLabelProps={{
                style: { fontSize: 14, alignItems: "center", display: "flex" },
              }}
            />
            <h5 style={{ marginBottom: -3 }} className="form-error">
              {errors.fname}
            </h5>
          </div>

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
            <h5
              style={{ marginBottom: errors.email ? 20 : 40 }}
              className="form-error"
            >
              {errors.email}
            </h5>
          </div>

          {/* <Select
            options={countryOptions}
            value={selectedCountry}
            onChange={handleCountryChange}
            placeholder="Select Country"
          /> */}

          {/* <CssPhoneField
            placeholder="Enter phone number"
            value={phone}
            onChange={setPhone}
            country="US"
            international
            inputProps={{
              padding: "10px",
              width: "100%",
              border: "1px solid #ced4da",
              borderRadius: "4px",
              height: "40px",
            }}
            inputStyle={{
              padding: "10px",
              width: "100%",
              border: "1px solid #ced4da",
              borderRadius: "4px",
              height: "40px",
            }}
          /> */}

          <CssPhoneField
            variant="outlined"
            label="Enter phone number"
            color="primary"
            size="small"
            fullWidth
            placeholder="Enter phone number"
            value={inputValue}
            onChange={handlePhoneValueChange}
            type="tel"
            inputRef={inputRef}
            style={{ backgroundColor: "#f4f4f4" }}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  style={{
                    marginRight: "2px",
                    marginLeft: "-8px",
                    zIndex: 1,
                    color: "black",
                  }}
                >
                  <Select
                    style={{ zIndex: 1 }}
                    MenuProps={{
                      style: {
                        height: "300px",
                        width: "360px",
                        top: "10px",
                        left: "-34px",
                      },
                      transformOrigin: {
                        vertical: "top",
                        horizontal: "left",
                      },
                    }}
                    sx={{
                      width: "max-content",
                      // Remove default outline (display only on focus)
                      fieldset: {
                        display: "none",
                      },
                      '&.Mui-focused:has(div[aria-expanded="false"])': {
                        fieldset: {
                          display: "block",
                        },
                      },
                      // Update default spacing
                      ".MuiSelect-select": {
                        padding: "8px",
                        paddingRight: "24px !important",
                      },
                      svg: {
                        right: 0,
                      },
                    }}
                    value={country.iso2}
                    onChange={(e) => setCountry(e.target.value)}
                    renderValue={(value) => (
                      <FlagImage
                        iso2={value}
                        style={{ display: "flex", zIndex: 1 }}
                      />
                    )}
                  >
                    {defaultCountries.map((c) => {
                      const country = parseCountry(c);
                      return (
                        <MenuItem key={country.iso2} value={country.iso2}>
                          <FlagImage
                            iso2={country.iso2}
                            style={{ marginRight: "8px", zIndex: 1 }}
                          />
                          <Typography marginRight="8px">
                            {country.name}
                          </Typography>
                          <Typography color="gray">
                            +{country.dialCode}
                          </Typography>
                        </MenuItem>
                      );
                    })}
                  </Select>
                </InputAdornment>
              ),
            }}
            {...restProps}
          />

          <div
            style={{
              marginTop: errors.password ? "17px" : "17px",
              marginBottom: "30px",
            }}
          >
            <CustomFormControl
              size="small"
              variant="outlined"
              fullWidth
              name="password"
              id="password"
              autoComplete="off"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              // style={{ height: "5px" }}
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
            <h5
              style={{ marginBottom: -3, marginTop: -1 }}
              className="form-error"
            >
              {errors.password}
            </h5>
          </div>

          {/* <a href="#" style={Styles.link1}>
            Forgot Password?
          </a> */}
          <Button
            variant="contained"
            color="primary"
            type="submit"
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
          </a>
        </form>
      </Grid>
    </Grid>
  );
};

export default Signup;
