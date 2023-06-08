export function getToken() {
  const tokenString = localStorage.getItem('token');
  return tokenString ? JSON.parse(tokenString) : '';
}

export function setToken(token: any) {
  return localStorage.setItem('token', JSON.stringify(token));
}
