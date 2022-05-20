import { SurveyProps } from "../types/survey";
import { api } from "./api";

export const SurveyServices = {
  get: async (): Promise<SurveyProps> => {
    try {
      const { data } = await api.get("surveys/frontend-interview");
      return data;
    } catch (error) {
      throw error;
    }
  },
};
