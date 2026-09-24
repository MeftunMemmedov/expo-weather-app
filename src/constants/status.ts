import { Status } from "@/types";

export const initialStatus: Status = {
  LOADING: false,
  SUCCESS: false,
  FAILURE: false,
};

export const LOADING: Status = {
  LOADING: true,
  SUCCESS: false,
  FAILURE: false,
};
export const SUCCESS: Status = {
  LOADING: false,
  SUCCESS: true,
  FAILURE: false,
};
export const FAILURE: Status = { LOADING: true, SUCCESS: false, FAILURE: true };
