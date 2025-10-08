import { getRequest,postRequest } from "../api";

// ------------------ Signup ------------------
export const register = async (userData) => {
  try {
    // Calls your backend /auth/signup endpoint
    const data = await postRequest("/auth/register", userData);
    return data;
  } catch (error) {
    // Error handling
    throw error.response?.data || { message: error.message || "Signup failed" };
  }
};

// ------------------ Login ------------------
export const login = async (credentials) => {
  try {
    // Calls your backend /auth/login endpoint
    const data = await postRequest("/auth/login", credentials);
    return data;
  } catch (error) {
    throw error.response?.data || { message: error.message || "Login failed" };
  }
};

// ------------------get Current User------------------
export const getCurrentUser = async () => {
  try {
    const data = await getRequest("/auth/user");
    return data;
  } catch (error) {
    throw error.response?.data || { message: error.message || "Failed to fetch user details" };
  }
};



