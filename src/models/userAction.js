import { POST_signUp, POST_login } from '../services/userAction';
import { effectError } from '../utils/handleError';
import { setToken } from '../utils/token';
import { message } from 'antd';
import router from 'umi/router';

export default {
  namespace: 'users',
  state: {},
  effects: {
    *POST_login({ payload, loading, callback }, { call }) {
      try {
        if (loading) loading(true);
        const response = yield call(POST_login, payload);
        yield setToken(response.token);
        message.success(response.message);
        yield router.push('/instruction');
        if (loading) loading(false);
      } catch (error) {
        if (loading) loading(false);
        yield effectError(error, arguments[1]);
      }
    },
  },
  reducers: {},
};
