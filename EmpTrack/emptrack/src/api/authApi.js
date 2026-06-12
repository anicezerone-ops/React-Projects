import axios from "axios";

const BASE_URL = "https://trainingapi.zerone-consulting.net/api.publish";

export const authenticate = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/api/account`, {
      username: "admin",
      password: "Admin"
    });

    return response.data;
  } catch (error) {
    console.error("Authentication Failed", error);
    throw error;
  }
};
