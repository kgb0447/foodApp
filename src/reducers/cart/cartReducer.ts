const initialState ={
    cart: [],
}

export const cartReducer = (state:any = initialState,action:any) => {
    switch (action.type) {
        case 'ADD_ITEM' :
            return {
                ...state,
                cart: action.payload
            }
    }
}