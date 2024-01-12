import axios from 'axios';
import { serverErrorMessage } from 'commons/utils/error';

export default function AxiosInstanceCreator(config: any) {
  const axiosInstance = axios.create(config);

  axiosInstance.interceptors.request.use((axiosConfig) => {
    const modifiedConfig = {
      ...axiosConfig,
      baseURL: process.env.REACT_APP_BASE_API as string,
      withCredentials: true,
    };

    Object.assign(modifiedConfig.headers, {
      'Content-Type': 'application/json',
    });

    if (!modifiedConfig.headers?.Authorization) {
      Object.assign(modifiedConfig.headers, {
        Authorization: `bearer ${JSON.parse(String(sessionStorage.getItem('accessToken')) || '""')}`,
      });
    }

    return modifiedConfig;
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error) {
        alert(serverErrorMessage(error.response?.data?.errorCode));
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
}
