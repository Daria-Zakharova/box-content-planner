class Box {
    constructor ({item, capacity}) {
        
        this.content = [];
        this.free = capacity;
        this.add(item);
    }

    add(item) {
        this.content.push(item);
        this.free -= item.amount;
    }

    addPart(item) {
        const part = this.free;
        this.content.push({...item, amount: part});
        this.free = 0;
    }

    hasCapacity({amount}) {
        return this.free >= amount;
    }

    isFull() {
        return this.free === 0;
    }
}

export class BoxesPlanner {
    constructor (products, capacity) {
        // console.log(products);

        const productsProcessed = JSON.parse(JSON.stringify(products)).sort((a, b) => b.amount - a.amount);

        this.boxCapacity = capacity;        
        this.boxes = [];

        this.makeOneItemBoxes(productsProcessed);
        productsProcessed.filter(({amount}) => amount > 0).forEach(this.put);
        
        return this.prepareBoxes();
    }

    createBox = item => {
        this.boxes.push(new Box({item, capacity: this.boxCapacity}));
    }

    findBoxForItem = (item) => this.boxes.find(box => box.hasCapacity(item));   

    findBoxForPartOfItem = () => this.boxes.find(box => !box.isFull());
       
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
            suitableBox.add({...item});
            item.amount = 0;
            return;
        }

        suitableBox = this.findBoxForPartOfItem(item);
        if(suitableBox) {
            const part = suitableBox.free;
            suitableBox.addPart(item);
            item.amount -= part;
        }
        else {
            this.createBox({...item});
            item.amount = 0;
        }

        item.amount > 0 && this.put(item);    
    }

    prepareBoxes = () => this.boxes.map(({content}) => {return {content: content.sort((a, b) => b.amount - a.amount)}});
}
