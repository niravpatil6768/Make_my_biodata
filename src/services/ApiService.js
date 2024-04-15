import axios from "axios";

const BASE_URL = "http://139.59.7.235/MarriageBiodata/api/";


export const registerService = async (formData) => {
    try {
      
      const response = await axios.post(
        `${BASE_URL}register`,
        formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const loginService = async (formData) => {
    try {
        const response = await axios.post(
            `${BASE_URL}login`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            }
        );
        return response.data;
    }
    catch(error) {
        throw error;
    }
  }

  export const checkMobileUserService = async (phone) => {
    try {
        const response = await axios.post(
            `${BASE_URL}checkMobileUser`, 
        phone,
        {
            headers: {
                "Content-Type" : "multipart/form-data",
            }
        }
        );
        return response.data;
    }
    catch(error) {
        throw error;
    }
  }

  export const resetPasswordService = async (data) => {
    try {
        const response = await axios.post(
            `${BASE_URL}setPassword`,
            data,
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                }
            }
        );
        return response.data;
    }
    catch(error){
        throw error;
    }
  }