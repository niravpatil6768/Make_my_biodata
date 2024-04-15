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
import Styles1 from "./style1";
import { styled } from "@mui/material/styles";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import ImagePath from "../../assets/images";
import { UseMediaQuery } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { newPasswordSchema } from "../../schemas/newPassword";
import PhoneInput from "react-phone-number-input";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.config";
//import OtpInput from "otp-input-react";
import OtpInput from "react-otp-input";
import { OtpSchema } from "../../schemas/otpSchema";
import { useFormik } from "formik";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { Toaster, toast } from "react-hot-toast";
import PropTypes from "prop-types";
import { Input as BaseInput } from "@mui/base/Input";
import { Box } from "@mui/system";
import "react-international-phone/style.css";
import {
  defaultCountries,
  FlagImage,
  parseCountry,
  usePhoneInput,
} from "react-international-phone";
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

const initialValues1 = {
  otp: "",
};

const ForgetPassword = ({ value, ...restProps }) => {
  const [error, setError] = useState(null);
  const [otpSend, setOtpSend] = useState(false);
  const [otp, setOtp] = useState("");
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
            onCall();
            // setTimeout(() => {
            //   navigate("/otp");
            // }, 10000);
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

  function onCaptchVerify() {
    console.log("here");
    if (!window.recaptchaVerifier) {
      console.log("132");
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
    console.log(inputValue);
    onCaptchVerify();
    console.log("150");
    const appVerifier = window.recaptchaVerifier;
    console.log("152");
    const formatPh = inputValue;
    console.log(formatPh);
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        toast.success("OTP sended successfully!", {
          duration: 5000, // Duration in milliseconds
          position: "top-right", // Position of the toast
        });
        setTimeout(() => {
          setOtpSend(true);
        }, 2500);
      })
      .catch((error) => {
        console.log(error);
        // navigate("/otp");
      });
  }

  function onOTPVerify(e) {
    e.preventDefault();
    console.log(otp);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        toast.success("OTP verified successfully!", {
          duration: 5000, // Duration in milliseconds
          position: "top-right", // Position of the toast
        });
        setTimeout(() => {
          navigate("/resetpassword");
        }, 2000);
      })
      .catch((error) => {
        toast.error("Please provide correct OTP!", {
          duration: 5000, // Duration in milliseconds
          position: "top-right", // Position of the toast
        });
        console.log(error);
      });
  }

  const handleResendClick = () => {
    setOtpSend(false);
  };

  if (!otpSend) {
    return (
      <>
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
                autoComplete="off"
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
                // onClick={onCall}
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
            </form>
          </Grid>
        </Grid>
      </>
    );
  } else if (otpSend) {
    return (
      <Grid container style={Styles1.container}>
        <Grid
          container
          style={Styles1.grid1}
          lg={6}
          md={6}
          sm={6.5}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <Grid lg={12} md={12} sm={12} style={{}}>
            <img src={ImagePath.Icon} style={Styles1.image1}></img>
          </Grid>
          <Grid lg={12} md={12} sm={12} style={Styles1.grid11}>
            <img src={ImagePath.Card} style={Styles1.image2}></img>
          </Grid>
        </Grid>
        <div style={Styles1.blurOverlay}></div>

        <Grid lg={6} md={6} sm={5.5} xs={12} style={Styles1.grid2}>
          <div
            style={{
              marginLeft:
                window.innerWidth < 600
                  ? 10
                  : window.innerWidth > 860
                  ? -50
                  : -15,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                // marginLeft: 10,
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
                  Enter the verification code we just sent on your email
                  address.
                </h5>
              </Typography>
            </div>
            <Toaster toastOptions={{ duration: 4000 }} />
            <form
            // onSubmit={handleSubmit1}
            // style={{ marginLeft: window.innerWidth > 800 ? -50 : 0 }}
            >
              <Grid
                item
                container
                spacing={1}
                alignItems="center"
                justifyContent="space-between"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "centr",
                  marginLeft: -10,
                  marginRight: 20,
                }}
              >
                <OtpInput
                  id="otp"
                  name="otp"
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  // renderSeparator={<span>-</span>}
                  renderInput={(props) => <input {...props} />}
                  inputStyle={{
                    width: "40px",
                    height: "40px",
                    fontSize: "16px",
                    margin: "0 6px",
                    borderRadius: "5px",
                    border: "1px solid #f35491",
                    textAlign: "center",
                    "& : hover": {
                      border: "1px solid #f35491",
                    },
                  }}
                />
              </Grid>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={onOTPVerify}
                disabled={!otpSend} // Disable the button if otpsend is false
                fullWidth
                style={Styles1.button}
              >
                <Typography style={{ fontSize: 20, fontWeight: "normal" }}>
                  Verify
                </Typography>
              </Button>
              <div style={Styles1.link2div}>
                <a style={Styles1.link2} onClick={handleResendClick}>
                  Didn't received code? &nbsp;
                  <span style={{ color: "#86191b", fontWeight: "bold" }}>
                    Resend
                  </span>
                </a>
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
};

export default ForgetPassword;
