import { getRequest,postRequest } from "../api";

export const getPrograms = async () => {
  return await getRequest(`/programs/getprograms`);
};

export const getProgramsById = async (programId) => {
  return await getRequest(`/programs/progress?programId=${programId}`);
};

export const enrollPrograms = async (data) => {
  return await postRequest(`/programs/enrollprograms`,data);
};

export const DayCompletion = async (data) => {
  return await postRequest(`/programs/track-day`,data);
};
