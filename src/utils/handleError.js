import _ from 'lodash';
import { message } from 'antd';

// eslint-disable-next-line require-yield
export function* effectError(error, { put }) {
  const errMsg = _.get(error, 'response.data.message', null);
  const errorStatus = _.get(error, 'response.status');

  switch (errorStatus) {
    case 401:
      console.log('123');
      // yield put({ type: 'admins/Logout' });
      break;
    default:
      message.config({
        maxCount: 1,
      });
      message.error(errMsg);
      break;
  }
}
