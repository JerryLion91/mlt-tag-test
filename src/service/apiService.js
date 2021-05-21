import http from '../service/http-common';

/**
 * GET    /api        => Server Running
 */
async function getServerRunning() {
  const res = await http.get('/api');
  return res;
}

/**
 * POST   /users?uid=  Complete User
 */
async function postNewUser(uid, userData) {
  const url = `/users?uid=${uid}`;
  const res = await http.post(url, userData);
  return res;
}

/**
 * GET    /users/all
 */
async function getAllUsers() {}

/**
 * GET    /users?uid=
 */
async function getUserByUid() {}

/**
 * PUT    /users?uid= Field to Update
 */
async function updateUserByUid() {}

/**
 * DELETE /users?uid=
 */
async function deleteUserByUid() {}

/**
 * POST   /users/address?uid=
 */
async function postUserNewAddressesByUid() {}

/**
 * GET    /users/address?uid=
 */
async function getUserAddressByUid() {}

/**
 * PUT    /users/address?uid=_&&index=
 */
async function updateUserAddressByUidAndIndex() {}

/**
 * DELETE /users/address?uid=_&&index=
 */
async function deleteUserAddressByUidAndIndex() {}

/**
 * POST   /orders
 */
async function postNewOrder() {}

/**
 * GET    /orders/all
 */
async function getAllOrders() {}

/**
 * GET    /orders?uid=
 */
async function getOrdersByUid() {}

/**
 * PUT    /orders?id=
 */
async function updateOrdersById() {}

/**
 * DELETE /orders?id=
 */
async function deleteOrdersById() {}

/**
 * GET /availability
 */
async function getAvailability() {}

export {
  getServerRunning,
  postNewUser,
  getAllUsers,
  getUserByUid,
  updateUserByUid,
  deleteUserByUid,
  postUserNewAddressesByUid,
  getUserAddressByUid,
  updateUserAddressByUidAndIndex,
  deleteUserAddressByUidAndIndex,
  postNewOrder,
  getAllOrders,
  getOrdersByUid,
  updateOrdersById,
  deleteOrdersById,
  getAvailability,
};
