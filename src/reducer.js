import {ADDNEWITEM, DELETEITEM, TOGGLECOMPLETE} from './action'

const initialState = {
    shoppingList: [
        {
        title: 'Apple juice',
        number: 2,
        id: 123,
        complete: true
        },
        {
        title: 'Orange',
        number: 8,
        id: 11,
        complete: false
        },
        {
        title: 'T-shirt',
        number: 1,
        id: 2,
        complete: false
        }
    ]
}

export const myReducer = (state=initialState, action) =>{
    switch (action.type) {
        case ADDNEWITEM:
            return Object.assign({}, state, {shoppingList: [...state.shoppingList, action.item]})
        case DELETEITEM:
            return Object.assign({}, state, {shoppingList: [...state.shoppingList].filter(item=> item.id !== action.id)})
        case TOGGLECOMPLETE:
            let newShoppingList = [...state.shoppingList].map(item=> {
                if(item.id === action.id) {
                    item.complete = !item.complete
                }
                return item
            })
            return Object.assign({}, state, {shoppingList: newShoppingList})
        default:
            return state
    }
}