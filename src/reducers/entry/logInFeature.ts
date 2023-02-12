
import { logInActionTypes } from "../../actions/logInActions"
import { loginTypes } from "../../dto/login"

export const initialLogInState:loginTypes = {
    isLoggedIn: false,
    userName:"",
}

interface loginAction{
    type: logInActionTypes,
    payload: any
}
export const loggedInReducer = (state: loginTypes, action: loginAction) => {
    switch(action.type){
        case logInActionTypes.USER_LOGGED_IN:
            return  state.isLoggedIn = true;
        default:
            return state
    }
}

