export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || [];

export const CART_ACTIONS = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART'
};

export const updateLocalStorage = state => {
    window.localStorage.setItem('cart', JSON.stringify(state))
};

export const cartReducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action;

    switch (actionType) {
        case CART_ACTIONS.ADD_TO_CART: {
            const { id } = actionPayload;
            const productInCart = state.findIndex(item => item.id === id)

            if (productInCart >= 0) {
                const newState = [...state];
                newState[productInCart].quantity += 1
                updateLocalStorage(newState)
                return newState
            }

            const newState = [
                ...state,
                {
                    ...actionPayload, // Product
                    quantity: 1
                }
            ]

            updateLocalStorage(newState)
            return newState;
        }

        case CART_ACTIONS.REMOVE_FROM_CART: {
            const { id } = actionPayload;
            const newState = state.filter(item => item.id !== id)
            updateLocalStorage(newState)
            return newState
        }

        case CART_ACTIONS.CLEAR_CART: {
            updateLocalStorage(cartInitialState)
            return []
        }
    };
};