// Please Use (option + shift + F) For align code 
import axios from 'axios'
import config from '../config'

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
export const USER_LOADING = "USER_LOADING"


export const UserLogin = (payload) => {
  return dispatch => {
    dispatch({ type: USER_LOADING, data: true })
    axios.post(`${config.apiPath}/auth/signIn`, payload)
      .then((res) => {
        var { accessToken } = res.data;
        axios.interceptors.request.use(
          config => {
            config.headers.token = `${accessToken}`
            return config
          }
        )
        localStorage.setItem('token', accessToken)
        localStorage.setItem('userAllDetails', JSON.stringify(res.data))
        dispatch({ type: USER_LOADING, data: false })
        return dispatch({ type: USER_LOGIN, data: res.data })
      })
      .catch((error) => {
        dispatch({ type: USER_LOADING, data: false })
        return dispatch({ type: USER_LOGIN_FAILURE, error: error })
      });
  }
}

export const CheckAndSaveLoggedInData = () => {
  return dispatch => {
    let userData = JSON.parse(localStorage.getItem('userAllDetails'));
    if (userData) {
      return dispatch({ type: USER_LOGIN, data: userData })
    }
  }
}

