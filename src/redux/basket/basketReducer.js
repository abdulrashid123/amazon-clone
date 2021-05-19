import { ADD_BASKET, EMPTY_BASKET, REMOVE_FROM_BASKET, SET_USER } from "./basketTypes";

const initialState = {
    basketList:[],
    user:null
}



const basketReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_BASKET:
        return {...state, basketList:[...state.basketList , action.payload]};
    case REMOVE_FROM_BASKET:
      const index = state.basketList.findIndex(
        (basketItem) => basketItem.id === action.payload
      );
      let newBasket = [...state.basketList];

      if (index >= 0) {
        newBasket.splice(index, 1);

      } else {
        console.warn(
          `Cant remove product (id: ${action.payload}) as its not in basket!`
        )
      }

      return {
        ...state,
        basketList: newBasket
      }
    case EMPTY_BASKET:
      return {...state,basketList:[]}
    case SET_USER:
      return {...state,user:action.payload}
    default:
      return state;
  }
}

export default basketReducer;