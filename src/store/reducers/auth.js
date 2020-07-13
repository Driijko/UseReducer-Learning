import users from "./users";

export const initAuthState = {
  isLoggedIn: false,
  isLogInError: false,
  userName: "",
}

export function authReducer(state, action) {

  switch (action.type) {

    // LOGIN /////////////////////////////////////////////////////////////////////////////
    case "LOGIN": {
      const user = users.find(user => {
        return user.name === action.user.name && user.password === action.user.password;
      })
      if (user) {
        return {
          ...state,
          isLoggedIn: true,
          userName: user.name
        }
      }
      else {
        return {
          ...state,
          isLogInError: true
        }
      }
    }

    // LOGOUT //////////////////////////////////////////////////////////////////////////////////
    case "LOGOUT": {
      return {
        ...state,
        isLoggedIn: false,
        userName: "",
      }
    }

    default: break;      
  }
  return state;
}