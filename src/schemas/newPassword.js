import * as Yup from "yup";

export const newPasswordSchema = Yup.object({
  password: Yup.string().min(6).max(12).required("Please enter your password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
