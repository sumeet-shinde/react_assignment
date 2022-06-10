import { GET_DATA, GET_DATA_LOADING } from "./action";

const initState = {
  data: "",
  loading: false,
  error: false,
};

export const InputReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case GET_DATA:
      return { ...store, data: payload, loading: false, error: false };

    case GET_DATA_LOADING:
      return { ...store, loading: true };

    case GET_DATA_LOADING:
      return { ...store, error: true };

    default:
      return store;
  }
};
