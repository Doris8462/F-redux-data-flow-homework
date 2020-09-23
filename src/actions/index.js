const fetchInfoRequest = () => {
  return {
    type: 'FETCH_INFO_REQUEST'
  };
};

const fetchInfoReceive = data => {
  return {
    type: 'FETCH_INFO_RECEIVE',
    payload: data
  };
};

export const fetchInfo = (dispatch, url) =>
  new Promise(resolve => {
    dispatch(fetchInfoRequest());
    return fetch(url).then(res => resolve(fetchInfoReceive(res.json())));
  });

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  };
};

export const signIn = info => {
  return {
    type: 'SIGN_IN',
    payload: info
  };
};
