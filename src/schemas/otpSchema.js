import * as Yup from 'yup';

export const OtpSchema = Yup.object({
    otp: Yup.string().required("Please enter your OTP!")
})