
import { logInActionTypes } from "../../actions/logInActions"
// import { loginTypes } from "../../dto/login"

interface loginTypes{
    isLoggedIn: boolean,
    fullName: string,
    userName: string
}
export const initialLogInState: loginTypes = {
    isLoggedIn: false,
    fullName: "",
    userName: "",
}

interface loginAction{
    type: logInActionTypes,
    payload: any
}
export const loggedInReducer = (state: loginTypes, action: loginAction) => {
    switch(action.type){
        case logInActionTypes.USER_LOGGED_IN:
        return state.fullName = action.payload.fullName, state.isLoggedIn = true, state.userName = action.payload.username;
        case logInActionTypes.TEST : 
                return console.log(action.payload,"test")
        default:
            return 
    }
}

