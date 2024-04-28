import Cookies from 'js-cookie';
import Router from 'next/router';

export const localstorageService = (() => {
  const _setToken = (value: string) => {
    Cookies.set('token', value);
  };

  const _getToken = () =>
    typeof window !== 'undefined' ? Cookies.get('token') : false;

  const _logout = (url?: string) => {
    Cookies.remove('token');
    Router.push(url ?? '/login');
  };

 

  return {
    setToken: _setToken,
    getToken: _getToken,
    logout: _logout,
  };
})();