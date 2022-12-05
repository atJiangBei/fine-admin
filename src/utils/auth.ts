//import Cookies from "js-cookie";
import { temporary } from './stroage';

const TokenKey = 'Admin-Token';

const UserId = 'Admin-UserId';

export function getToken() {
  return temporary.get(TokenKey);
}

export function setToken(token: string) {
  return temporary.set(TokenKey, token);
}

export function removeToken() {
  return temporary.remove(TokenKey);
}

export function getUserId() {
  return temporary.get(UserId);
}

export function setUserId(token: string) {
  return temporary.set(UserId, token);
}

export function removeUserId() {
  return temporary.remove(UserId);
}
