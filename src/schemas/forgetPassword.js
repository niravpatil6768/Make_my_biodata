import * as Yup from "yup";

export const forgetPasswordSchema = Yup.object({
  phone: Yup.string().required("Please enter your phone number"),
});
