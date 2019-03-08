export const ADDNEWITEM = 'ADDNEWITEM'
export const addNewItem = (item) => ({
    type: ADDNEWITEM,
    item
})
export const DELETEITEM = 'DELETEITEM'
export const deleteItem = (id) => ({
    type: DELETEITEM,
    id
})
export const TOGGLECOMPLETE = 'TOGGLECOMPLETE'
export const toggleComplete = (id) => ({
    type: TOGGLECOMPLETE,
    id
})