import http from '../service/http-common';

/**
 * GET    /api        => Server Running
 */
async function getServerRunning() {
  const res = await http.get('/api');
  return res;
}

/**
 *
 * POST   /users?uid=  Complete User
 * @param {String} uid
 * @param {Object} userData
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
 *
 * GET    /users?uid=
 * @param {String} uid
 */
async function getUserByUid(uid) {}

/**
 *
 * PUT    /users?uid= Field to Update
 * @param {String} uid
 * @param {Object} update
 */
async function updateUserByUid(uid, update) {}

/**
 *
 * DELETE /users?uid=
 * @param {String} uid
 */
async function deleteUserByUid(uid) {}

/**
 *
 * POST   /users/address?uid=
 * @param {String} uid
 * @param {Object} address
 */
async function postUserNewAddressesByUid(uid, address) {}

/**
 *
 * GET    /users/address?uid=
 * @param {String} uid
 */
async function getUserAddressesByUid(uid) {}

/**
 *
 * PUT    /users/address?uid=_&&index=
 * @param {String} uid
 * @param {Number} index
 * @param {Object} newAddress
 */
async function updateUserAddressByUidAndIndex(uid, index, newAddress) {}

/**
 *
 * DELETE /users/address?uid=_&&index=
 * @param {String} uid
 * @param {Number} index
 */
async function deleteUserAddressByUidAndIndex(uid, index) {}

/**
 *
 * POST   /orders
 * @param {String} uid
 * @param {Object} newOrder
 */
async function postNewOrder(uid, newOrder) {}

/**
 * GET    /orders/all
 */
async function getAllOrders() {}

/**
 *
 * GET    /orders?uid=
 * @param {String} uid
 */
async function getOrdersByUid(uid) {}

/**
 *
 * PUT    /orders?id=
 * @param {String} id
 * @param {Object} update
 */
async function updateOrdersById(id, update) {}

/**
 *
 * DELETE /orders?id=
 * @param {String} id
 */
async function deleteOrdersById(id) {}

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
  getUserAddressesByUid,
  updateUserAddressByUidAndIndex,
  deleteUserAddressByUidAndIndex,
  postNewOrder,
  getAllOrders,
  getOrdersByUid,
  updateOrdersById,
  deleteOrdersById,
  getAvailability,
};

/**
 *
 * POST   /users?uid=  Complete User
 * GET    /users/all
 * GET    /users?uid=
 * PUT    /users?uid= Field to Update
 * DELETE /users?uid=
 *
 * POST   /users/address?uid=
 * GET    /users/address?uid=
 * PUT    /users/address?uid=_&&index=
 * DELETE /users/address?uid=_&&index=
 *
 * POST   /orders
 * GET    /orders/all
 * GET    /orders?uid=
 * PUT    /orders?id=
 * DELETE /orders?id=
 *
 * GET /availability
 */
