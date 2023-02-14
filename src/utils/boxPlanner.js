import { addToArrOrUpdAmount } from "./checkByName";
import { lastOf } from "./lastOf";

export class boxesPlanner {
    constructor (products, capacity = 140, extraItem = {name: "wicked witch"}) {
        // console.log(products);

        const productsProcessed = JSON.parse(JSON.stringify(products)).sort((a, b) => b.amount - a.amount);

        this.boxCapacity = capacity;        
        this.boxes = [];

        this.makeOneItemBoxes(productsProcessed);
        productsProcessed.some(({amount}) => amount > 0) && productsProcessed.forEach(this.put);
        
        if (lastOf(this.boxes).free > 0) {
            const extraItemAmount = lastOf(this.boxes).free;
            this.fillLastBox(extraItem);
            this.sortBoxesByAmount();
            return {boxes: this.boxes, extraItem: {name: extraItem.name, amount: extraItemAmount}};
        }

        this.sortBoxesByAmount();
        return {boxes: this.boxes, extraItem: null};
    }

    createBox = item => {
        this.boxes.push({
            content: item ? [{...item}] : [], 
            free: this.boxCapacity - item.amount,
            addItem(item) {this.content.push({...item}); this.free -= item.amount;},
            addPartOfItem(item) { this.content.push({...item, amount: this.free});  this.free -= lastOf(this.content).amount;}
        });
    }

    findBoxForItem = ({amount}) => this.boxes.find(({free}) => free >= amount);   

    findBoxForPartOfItem = () => this.boxes.find(({free}) => free > 0);
       
    makeOneItemBoxes = items => {
        const capacity =  this.boxCapacity;
        items.forEach(item => {

            const fullBoxesNumber = Math.floor(item.amount / capacity);

            if (fullBoxesNumber === 0) {
                return;
            }

            for (let i = 1; i <= fullBoxesNumber; i += 1) {
                this.createBox({...item, amount: capacity});
            }

            item.amount -= fullBoxesNumber * capacity;
        })
    }

    put = item => {
        let suitableBox = this.findBoxForItem(item);
        if(suitableBox) {
            suitableBox.addItem(item);
            item.amount = 0;
            return;
        }

        suitableBox = this.findBoxForPartOfItem(item);
        if(suitableBox) {
            const part = suitableBox.free;
            suitableBox.addPartOfItem(item);
            item.amount -= part;
        }
        else {
            this.createBox(item);
            item.amount = 0;
        }

        item.amount > 0 && this.put(item);    
    }

    fillLastBox = (itemToAdd, box = lastOf(this.boxes)) => {
        addToArrOrUpdAmount(box.content, {name: itemToAdd.name, amount: box.free});
        box.free = 0;
    }

    sortBoxesByAmount = () => {
        this.boxes.forEach(box => box.content.sort((a, b) => b.amount - a.amount));
    }
}
