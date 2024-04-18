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
import { Link, useNavigate } from "react-router-dom";
import ImagePath from "../../assets/images";
import { registerService } from "../../services/ApiService";
import { Toaster, toast } from "react-hot-toast";
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
      // backgroundColor: "grey",
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

const LandingPage = ({ value, ...restProps }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = React.useState(null);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [focusedField, setFocusedField] = useState("");
  const [initialValues, setInitialValues] = useState({
    username: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    country_code: "",
  });
  const navigate = useNavigate();

  // Use useFormik hook to manage form state and validation
  const {
    values,
    errors,
    handleSubmit,
    handleBlur,
    handleChange,
    touched,
    isValid,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      try {
        const response = await registerService(values);
        if (response.status === "success") {
          toast.success("User created successfully!", {
            duration: 5000, // Duration in milliseconds
            position: "top-right", // Position of the toast
          });
          console.log("User registered successfully:", response);
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else if (response.status === "error") {
          console.log("error in create user:", response);
          setError(response.message);
        } else if (response.status === "fail") {
          console.log("error in create user:", response);
          setError(response.message);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  });

  // Use usePhoneInput hook to handle phone input field
  const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } =
    usePhoneInput({
      defaultCountry: "in",
      value: initialValues.phone.replace(/\D/g, ""), // Set initial value for phone input field
      countries: defaultCountries,
    });

  // Update formik field value when inputValue changes
  React.useEffect(() => {
    handleChange({
      target: {
        name: "phone",
        value: inputValue.replace(/\D/g, "").slice(-10),
      },
    });
  }, [inputValue]);

  React.useEffect(() => {
    handleChange({
      target: {
        name: "country_code",
        value: inputValue.replace(/\D/g, "").slice(0, 1),
      },
    });
  }, [inputValue]);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
    <Grid
      container
      style={Styles.container}
      sx={{ display: { xs: "none", sm: "flex" } }}
    >
      <Grid
        container
        style={Styles.grid1}
        lg={6}
        md={6}
        sm={6.5}
        // sx={{ display: { xs: "none", sm: "flex" } }}
      >
        <Grid lg={12} md={12} sm={12} style={{}}>
          <img src={ImagePath.Icon} style={Styles.image1}></img>
        </Grid>
        <Grid lg={12} md={12} sm={12} style={Styles.grid11}>
          <img src={ImagePath.Card} style={Styles.image2}></img>
        </Grid>
      </Grid>
      <div style={Styles.blurOverlay}></div>

      <Grid lg={6} md={6} sm={5.5} xs={12} style={Styles.grid2}>
        <Grid>
          <img src={ImagePath.Iphone} style={{ width: 270 }}></img>
        </Grid>
        <div style={Styles.blurOverlay1}>
          <div style={Styles.overlayText}>
            <Typography
              style={{
                fontSize: 25,
                color: "#691c1c",
                fontWeight: "bolder",
                marginBottom: -5,
              }}
            >
              Welcome to
            </Typography>
            <Typography
              style={{
                fontSize: 25,
                color: "#691c1c",
                fontWeight: "bolder",
                marginBottom: 10,
              }}
            >
              Make my BIO DATA
            </Typography>
            <Typography
              style={{ fontSize: 12, color: "grey", marginBottom: 0 }}
            >
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry
            </Typography>
            <Link to={"/login"}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                style={Styles.Button1}
              >
                <Typography style={{ fontSize: 19, fontWeight: "normal" }}>
                  Login
                </Typography>
              </Button>
            </Link>
            <Link to={"/signup"}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                style={Styles.Button2}
              >
                <Typography style={{ fontSize: 19, fontWeight: "normal" }}>
                  Signup
                </Typography>
              </Button>
            </Link>
          </div>
        </div>
      </Grid>
    </Grid>
    <Grid
    container
    style={{
      height: "100vh",
    }}
    sx={{
      display: {
        xs: "flex",
        sm: "none",
        display: "flex",
        justifyContent: "center",
      },
    }}
  >
    <Grid
      container
      lg={12}
      md={12}
      sm={12}
      style={{
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
        alignContent: "center",
        height: "13vh",
        // marginLeft: window.innerWidth < 330 ? 50 : 0,
      }}
    >
      <img src={ImagePath.Icon} style={Styles.imageMobile1}></img>
    </Grid>
    <Grid container style={Styles.gridMobile1}>
      <Grid lg={12} md={12} sm={12} style={Styles.grid12}>
        <img src={ImagePath.Iphone} style={Styles.imageMobile2}></img>
        <img src={ImagePath.Card} style={Styles.image3}></img>
        <div style={Styles.blurOverlay2}></div>
      </Grid>
    </Grid>
    <Grid
      style={{
        height: "20vh",
        display: "flex",
        padding: 15,
        display: "flex",
        // marginLeft: window.innerWidth < 330 ? 40 : 0,
        flexDirection: "row",
      }}
      container
    >
      <Typography
        style={{
          fontSize: 25,
          color: "#b32d2e",
          fontWeight: "bolder",
          marginBottom: -7,
        }}
      >
        Welcome to <br /> Make my BIO DATA
      </Typography>
      <br />
      {/* <Typography
        style={{
          fontSize: 25,
          color: "#b32d2e",
          fontWeight: "bolder",
        }}
      >
        Make my BIO DATA
      </Typography> */}
      <Typography style={{ fontSize: 14, color: "grey", marginBottom: 0 }}>
        Lorem ipsum is simply dummy text of the printing and typesetting
        industry
      </Typography>
    </Grid>
    <Grid
      style={{
        height: "18vh",
        display: "flex",
        padding: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
      container
    >
      <Link to={"/login"}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          style={Styles.ButtonMobile1}
        >
          <Typography style={{ fontSize: 19, fontWeight: "normal" }}>
            Login
          </Typography>
        </Button>
      </Link>
      <Link to={"/signup"}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          style={Styles.ButtonMobile2}
        >
          <Typography style={{ fontSize: 19, fontWeight: "normal" }}>
            Signup
          </Typography>
        </Button>
      </Link>
    </Grid>
  </Grid>
  </>
  );
};

export default LandingPage;
