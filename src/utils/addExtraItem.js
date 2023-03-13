import { addToArrOrUpdAmount } from "./checkByName";
import cloneDeep from "lodash.clonedeep";

export const addExtraItem = ({arrOfProducts, extraItem, boxCapacity}) => {
    const total = arrOfProducts.reduce((total, {amount}) => total += amount, 0);
    const leftover = total % boxCapacity;
    if(!leftover) {
        return arrOfProducts;
    }

    const itemToAdd = {name: extraItem, amount: boxCapacity - leftover};
    const arr = cloneDeep(arrOfProducts);
    return addToArrOrUpdAmount(arr, itemToAdd);
}