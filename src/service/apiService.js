import http from '../service/http-common';

const _VALIDATION = {};

/**
 * Retrieve all users
 */
async function getAllUsers() {
  const res = await http.get('/api');

  return res;
}

export { getAllUsers };

/**
 * Create new user
 * Retrieve user by id
 * Update user by id
 * Delete user by id
 *
 * Update address by id
 * Retrieve address by id
 * Delete address by id
 *
 * Create new order
 * Retrieve all orders
 * Retrieve orders by user id
 * Update order by id
 * Flag deleted order by id
 */
