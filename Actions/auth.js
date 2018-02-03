
import CypherAPI from '@Data/CypherAPI'

//Pure functions yay!
export const login = (username, password) => {
  return {
        type: 'LOGIN_REQUEST',
        username: username,
        password: password
    };
}

// export const loginRequest = (username, password) => {
//   return (dispatch) => {
//     return
//   }
// }


export const logout = () => {
    return {
        type: 'LOGOUT'
    };
};

export const signup = (username, password) => {
   return (dispatch) => {
   };
};
