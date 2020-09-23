const defaultState = {
  profile: undefined,
  isLogin: false
};
const sign = (state = defaultState, action) => {
  if (action.type === 'SIGN_IN') {
    return { ...state, profile: action.payload, isLogin: true };
  }
  return { ...state, profile: undefined, isLogin: false };
};
export default sign;
