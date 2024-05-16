export const SIGN_TOKEN = 'SIGN_TOKEN';
export const USER_DETAIL = 'USER_DETAIL';


// Action creators
export const addToken = (data:string) => ({
  type: SIGN_TOKEN,
  payload: data
});
export const userDetail = (data:string) => ({
  type: USER_DETAIL,
  payload: data
});



