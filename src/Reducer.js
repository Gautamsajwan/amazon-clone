export const initialState = {
    basket: [],
    user: null,
};

// selector
export const total = (basket) =>
    basket?.reduce((amount, item) => amount + item.price  , 0);
// this will return the component to which price belong to i.e.the product-price in the Product.js

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_CART' :
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if(index >=0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `cant remove product (id: ${action.id}) as its not in basket!`
                )
            }
            return {
                ...state,
                basket: newBasket
            }
        
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        case "EMPTY_USER":
            return {
                ...state,
                basket: []
            }

        default: return state;
    }
};

export default reducer;
