import { GetAllAssets } from "../api/apiService";

const useAPI = () => {
  const getAssets = () => {
    return GetAllAssets();
  };

  return { getAssets };
};

export default useAPI;
