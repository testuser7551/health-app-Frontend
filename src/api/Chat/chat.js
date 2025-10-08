import { postRequest } from "../api";

export const generateGemini = async (data) => {
  return await postRequest(`/gemini`, data);
};

export const summarizeGemini = async (data) => {
  return await postRequest(`/gemini/chatsummary`, data);
};