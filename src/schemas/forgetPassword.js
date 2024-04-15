import * as Yup from "yup";

export const forgetPasswordSchema = Yup.object({
  phone: Yup.string()
    .required("Please enter your phone number")
    .test("valid-phone", "Please enter a valid phone number", (value) => {
      // Check if the value contains only the country code
      return value && value.replace(/\D/g, "").length > 2;
    }),
});
