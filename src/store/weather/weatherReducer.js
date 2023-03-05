import { GET_WEATHER, SET_LOADING } from "./weatherActions"

export const initialState = {
    list: [],
    loading: true,
}

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WEATHER:
            return {
              ...state,
              list: action.payload
            }
        case SET_LOADING:
        return {
            ...state,
            loading: action.payload
        }
        default:
            return state
            break;
    }
}