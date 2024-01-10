import axios from 'axios';
import { message } from 'antd';

import { serverErrorMessage } from 'commons/utils/error';

export default function AxiosInstanceCreator(config: any) {
  const axiosInstance = axios.create(config);

  axiosInstance.interceptors.request.use((axiosConfig) => {
    const modifiedConfig = {
      ...axiosConfig,
      baseURL: process.env.REACT_APP_BASE_API as string,
      'Content-Type': 'application/json',
    };

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
      return message.error(serverErrorMessage(error.response.data.errorCode));
    }
  );

  return axiosInstance;
}
