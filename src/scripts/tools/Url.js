const isLocal = window.location.href.indexOf('localhost') >= 0 || window.location.href.indexOf('192.168.1') >= 0;

export const ABSOLUTE_URL = isLocal ? 'https://dev.com' : '';
export const API_URL = `${ABSOLUTE_URL}/api`;
