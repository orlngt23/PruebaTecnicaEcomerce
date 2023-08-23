//en este archivo programamos add porductos se agreguen al carrito
export const addCart = (product) =>{
    return{
        type: "ADDITEM",
        payload : product
    }
}
//delete item from cart
export const delCart = (product) =>{
    return{
        type: "DELITEM",
        payload : product
    }
}