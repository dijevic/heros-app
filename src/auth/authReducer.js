import { types } from "../tipos/types";

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        case types.logOut:
            return { logged: false }

        default:
            return state
    }
}