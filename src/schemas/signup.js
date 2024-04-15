import * as Yup from "yup";

export const signUpSchema = Yup.object({
  username: Yup.string().min(8).max(18).required("Please enter your username"),
  name: Yup.string().min(2).required("Please enter your full name"),
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter your email"),
  phone: Yup.string()
    .required("Please enter your phone number")
    .test("valid-phone", "Please enter a valid phone number", (value) => {
      // Check if the value contains only the country code
      return value && value.replace(/\D/g, "").length > 2;
    }),
  password: Yup.string().min(6).max(12).required("Please enter your password"),
});
