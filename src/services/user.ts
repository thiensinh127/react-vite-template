import request from '../utils/request';

export async function getMeService() {
  return request('https://devhrms.paxanimi.ai/api/usermap/get-current-user', {
    method: 'POST',
  });
}

export async function loginService(data: any) {
  return request('https://devhrms.paxanimi.ai/api/m-sign-in', {
    data,
    method: 'POST',
  });
}
