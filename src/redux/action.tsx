export const SIGN_TOKEN = 'SIGN_TOKEN';


// Action creators
export const addToken = (data:string) => ({
  type: SIGN_TOKEN,
  payload: data
});