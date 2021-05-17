import http from '../service/http-common';

const _VALIDATION = {};

// flag isDeleted = true

async function getAllUsers() {
  const res = await http.get('/');

  return res;
}

export { getAllUsers };
