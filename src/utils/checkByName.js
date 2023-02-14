export const addToArrOrUpdAmount = (arr, item) => {
    const itemInArr = arr.find(({name}) => name === item.name)
    if(itemInArr) {
        itemInArr.amount = itemInArr.amount + item.amount;
    }
    else {
        arr.push(item);
    }
    return arr;
};
