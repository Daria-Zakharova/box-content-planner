import { addToArrOrUpdAmount } from "./checkByName";

export const addExtraItem = ({arrOfProducts, extraItem, capacity}) => {
    const total = arrOfProducts.reduce((total, {amount}) => total += amount, 0);
     const leftover = total % capacity;
    if(!leftover) {
        return arrOfProducts;
    }

    const itemToAdd = {name: extraItem, amount: capacity - leftover};
    return addToArrOrUpdAmount(arrOfProducts, itemToAdd);
}