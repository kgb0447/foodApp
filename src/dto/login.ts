import { logInActionTypes } from "../actions/logInActions"
export interface loginTypes {
    userName: string,
    isLoggedIn: boolean,
}

export interface loginAction {
    type: logInActionTypes,
    payload: any
}