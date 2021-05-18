import { useState } from 'react';
import { useCookie } from "react-use"

export default function useToken() {
  const [valueToken, updateCookie, deleteCookie] = useCookie("token");
  const [valueUser, updateCookieUser, deleteCookieUser] = useCookie("userId")

  const [token, setToken] = useState();

  const saveToken = userToken => {
    // localStorage.setItem('token', JSON.stringify(userToken.data));
    updateCookie(userToken.data);
    updateCookieUser(userToken.userId);
    setToken(userToken.data);
  };

  return {
    setToken: saveToken,
    token: valueToken,
    deleteToken: deleteCookie,
    deleteUserId: deleteCookieUser
  }
}