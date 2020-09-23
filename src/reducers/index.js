const sign = (
  state = {
    profile: undefined,
    isLogin: false
  },
  action
) => {
  if (action.type === 'SIGN_IN') {
    return { ...state, profile: action.payload, isLogin: true };
  }
  return { ...state, profile: undefined, isLogin: false };
};
export default sign;
