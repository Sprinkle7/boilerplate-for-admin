import { combineReducers } from 'redux'
import * as ActionTypes from '../actions/users'


// import Swal from 'sweetalert2'


// const navStatus = (state = null, action) => {
//   switch (action.type) {
//     case ActionTypes.ACTIVE_NAV:
//       let nav = action.data
//       return nav;
//     case LOCATION_CHANGE:
//       const pathName = action.payload.location.pathname

//       if (pathName === '/signup') {
//         return 'signup';
//       }
//       if (pathName === '/') {
//         return 'login';
//       }

//       if (pathName === '/editDevice' || pathName.indexOf('/editDevice') >= 0) {
//         return 'editDevice';
//       }


//       return state
//     default:
//       return state;
//   }

// }

const User = (state = null, action) => {
  switch (action.type) {
    case ActionTypes.USER_LOGIN:
      return {
        ...state,
        Login: action.data,
        loading: false
      }
    case ActionTypes.USER_LOGIN_FAILURE:
      return {
        ...state,
        Login: false,
        loading: false,
        failedMessage: action.error && action.error.response ? action.error.response.data.message : action.error.message
      }
    case ActionTypes.USER_LOADING:
      return {
        ...state,
        loading: true
      }

    default:
      return {
        ...state
      }
  }
}



// const userLogout = (state = 'sale', action) => {
//   switch (action.type) {
//     case ActionTypes.USER_LOGOUT:
//       localStorage.removeItem('firstName');
//       localStorage.removeItem('lastName');
//       localStorage.removeItem('userType');
//       localStorage.removeItem('email');
//       localStorage.removeItem('userId');
//       return state
//     default:
//       return state;
//   }
// }

export default combineReducers({
  User,
})

