let dev = typeof (__DEV__) !== 'undefined' ? __DEV__ : false; 
export const DEV = process.env.NODE_ENV !== 'production' || dev ? true : false;

export const apiUrl = DEV ? 'http://localhost:3001/api/v1' : 'https://js.xinshengdaxue.com/api/v1';
export const apiUrlGraphql = DEV ? 'http://localhost:3001/api/graphql' : 'https://js.xinshengdaxue.com/api/graphql';