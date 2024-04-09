import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).required("Please enter your name"),
  fname: Yup.string().min(2).required("Please enter your full name"),
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter your email"),
    phone: Yup.string().required('Phone number is required'),
  password: Yup.string().min(6).max(12).required("Please enter your password")  
});
    