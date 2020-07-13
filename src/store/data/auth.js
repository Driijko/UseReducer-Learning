import users from "./users";

export const initAuthState = {
  isLoggedIn: false,
  isLogInError: false,
  userName: "My",
}

export function authReducer(state, action) {
  switch (action.type) {
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

    default: break;      
  }
  return state;
}