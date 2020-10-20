export const adding = () => ({
  type: 'ADDING'
});
export const close = () => ({
  type: 'CLOSE'
});
export const addProduct = (data) => ({
    type: 'ADD_PRODUCT',
    payload: data
});
export const deleteProduct = (data) => ({
  type: 'DELETE_PRODUCT',
  payload: data
});
export const editProduct = (data) => ({
  type: 'EDIT_PRODUCT',
  payload: data
})