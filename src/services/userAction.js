import request from '../utils/request';

export function POST_login(payload) {
  return request.post('/user', payload);
}

export function POST_signUp(payload) {
  return request.post('/user/register', payload);
}
