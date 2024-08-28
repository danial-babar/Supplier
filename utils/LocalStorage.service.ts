import Cookies from 'js-cookie';
import Router from 'next/router';

export const localstorageService = (() => {
  const _setToken = (value: string) => {
    Cookies.set('mowarrd_token', value);
  };

  const _getToken = () =>
    typeof window !== 'undefined' ? Cookies.get('mowarrd_token') : false;

  const _logout = (url?: string) => {
    Cookies.remove('mowarrd_token');
    Router.push(url ?? '/login');
  };

 

  return {
    setToken: _setToken,
    getToken: _getToken,
    logout: _logout,
  };
})();