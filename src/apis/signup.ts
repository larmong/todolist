import AxiosInstanceCreator from 'service/api';

export const signupInstance = AxiosInstanceCreator({});

export const signupAPI = {
  checkEmail: async (params: CheckEmailPramsType) => {
    return signupInstance.get('/auth/emailCheck', { params }).then((res) => res);
  },
  createUser: async (data: CreateUserDataType) => {
    return signupInstance.post('/auth/joinUser', data).then((res) => res);
  },
};

interface CheckEmailPramsType {
  email: string;
}

interface CreateUserDataType {
  email: string;
  password: string;
}
