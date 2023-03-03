export const getCurrentId = lists => {
    if(!lists.length) {
        return;
    }
    const length = lists.length;
    const lastList = lists[length - 1];
    const boxesAmount = lastList.boxes.length;
    return lastList.boxes[boxesAmount - 1].id;
}