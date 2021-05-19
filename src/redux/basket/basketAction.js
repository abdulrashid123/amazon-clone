
import { ADD_BASKET, EMPTY_BASKET, REMOVE_FROM_BASKET, SET_USER } from "./basketTypes"

export const addToBasket = (item) => {
    return {
        type:ADD_BASKET,
        payload:item
    }
}

export const removeItem = (id) => {
    return {
        type:REMOVE_FROM_BASKET,
        payload:id
    }
}
export const addUser = (user) => {
    return {
        type:SET_USER,
        payload:user
    }
}

export const emptyBasket = () => {
    return {
        type:EMPTY_BASKET
    }
}

export const addBasket = (item) => {
    console.log("adding to basket")
    return (dispatch) => {
        dispatch(addToBasket(item))
    }}

export const removeFromBasketItem = (id) => {
    console.log("removing from basket")
    return (dispatch) => {
        dispatch(removeItem(id))
    }}

export const setUser = (user) => {
    console.log("adding user")
    return (dispatch) => {
        dispatch(addUser(user))
    }

}

export const clearBasket = () => {
    console.log("Emptying Basket ")
    return (dispatch) => {
        dispatch(emptyBasket())
    }

}
