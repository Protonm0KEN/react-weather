import { GET_WEATHER } from "./weatherActions"

export const initialState = {
    list: []
}

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WEATHER:
            return {
              ...state,
              list: action.payload
            }
        default:
            return state
            break;
    }
}