import * as Yup from "yup";

export const newPasswordSchema = Yup.object({
  password: Yup.string().min(6).max(12).required("Please enter your password"),
  password_confirmation: Yup.string()
    .required("Please enter your confirm password")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
