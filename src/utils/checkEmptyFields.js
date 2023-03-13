export const hasEmptyFields = fields => { 
    fields.forEach(field => {
        if(!field.name) {
            throw new Error("Product name is required field");
        }
        if(field.amount === 0) {
            throw new Error ("amount cannot be 0");
        }
    });
    return false;
}