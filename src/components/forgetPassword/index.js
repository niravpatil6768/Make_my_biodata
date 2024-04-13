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
import ImagePath from "../../assets/images";
import { UseMediaQuery } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { newPasswordSchema } from "../../schemas/newPassword";
import PhoneInput from "react-phone-number-input";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { Toaster, toast } from "react-hot-toast";
import "react-international-phone/style.css";
import {
  defaultCountries,
  FlagImage,
  parseCountry,
  usePhoneInput,
} from "react-international-phone";
import { useFormik } from "formik";
import { forgetPasswordSchema } from "../../schemas/forgetPassword";
import { Link, resolvePath } from "react-router-dom";
import { checkMobileUserService } from "../../services/ApiService";
import { setUserId } from "../../utils/localStorage";

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

const initialValues = {
  phone: "",
};

const ForgetPassword = ({ value, ...restProps }) => {
  const [error, setError] = useState(null);
  const [ph, setPh] = useState("");
  const navigate = useNavigate();
  const { values, errors, handleChange, handleSubmit, handleBlur, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: forgetPasswordSchema,
      onSubmit: async (values) => {
        // console.log("values:", values);
        try {
          const response = await checkMobileUserService(values);
          if (response.status === "success") {
            console.log("successfully find mobile user:", response);
            setUserId(response.data);
            setError(null);
            navigate("/resetpassword");
          } else if (response.status === "error") {
            console.log("user not found: ", response);
            setError(response.message);
          }
        } catch (error) {
          console.log("error in finding user: ", error);
        }
      },
    });

  const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } =
    usePhoneInput({
      defaultCountry: "in",
      value: initialValues.phone.replace(/\D/g, "").slice(-10),
      countries: defaultCountries,
      // onChange: (data) => {
      //   onChange(data.phone);
      // },
    });

  React.useEffect(() => {
    handleChange({
      target: {
        name: "phone",
        value: inputValue.replace(/\D/g, "").slice(-10),
      },
    });
  }, [inputValue]);

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onCall();
          },
          "expired-callback": () => {},
        }
      );
    }
  }

  function onCall() {
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = inputValue;
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        toast.success("otp send!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
        <Toaster toastOptions={{ duration: 4000 }} />

        <div id="recaptcha-container"></div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          style={Styles.form}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: 15,
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
                Forgot Password?
              </h2>
            </Typography>
            <Typography style={{ alignContent: "left", display: "flex" }}>
              <h5 style={{ fontWeight: "normal", color: "grey" }}>
                Don't worry! it occurs. Please enter the Phone number linked
                with your account.
              </h5>
            </Typography>
            {error && (
              <h5 style={{ color: "red", marginTop: -5, marginBottom: 0 }}>
                {error}
              </h5>
            )}
          </div>
          <CssPhoneField
            variant="outlined"
            label="Enter phone number"
            color="primary"
            size="small"
            id="phone"
            name="phone"
            fullWidth
            placeholder="Enter phone number"
            value={inputValue}
            onChange={handlePhoneValueChange}
            onBlur={handleBlur}
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
                    onChange={(e) => {
                      setCountry(e.target.value);
                      handleChange({
                        target: {
                          name: "phone",
                          value: `${country.dialCode}${inputValue}`,
                        },
                      });
                    }}
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
          {touched.phone && errors.phone && (
            <h5 style={{ marginTop: 0 }}>{errors.phone}</h5>
          )}

          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            onClick={onCall}
            style={Styles.Button}
          >
            <Typography style={{ fontSize: 20, fontWeight: "normal" }}>
              Send Code
            </Typography>
          </Button>
          <div style={Styles.link2div}>
            <a href="/" style={Styles.link2}>
              Remember Password? &nbsp;
              <span style={{ color: "#86191b", fontWeight: "bold" }}>
                Login
              </span>
            </a>
          </div>
          {/* <a href="/" style={Styles.link1}>
            Remember Password? &nbsp;
            <span style={{ color: "#86191b", fontWeight: "bold" }}>Login</span>
          </a> */}
        </form>
      </Grid>
    </Grid>
  );
};

export default ForgetPassword;
