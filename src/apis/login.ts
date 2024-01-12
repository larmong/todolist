import AxiosInstanceCreator from 'service/api';

export const loginInstance = AxiosInstanceCreator({});

export const loginAPI = {
  getLogin: async (data: GetLoginDataType) => {
    return loginInstance.post('/auth/login', data).then((res) => res);
  },
};

interface GetLoginDataType {
  email: string;
  password: string;
}
