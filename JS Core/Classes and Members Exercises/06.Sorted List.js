class List{
    constructor(){
        this.collection = [];
        this.size =0;
    }

    add(element){
        this.collection.push(element);

        //noinspection JSAnnotator
        this.size++;
        return this.collection.sort((a,b) => a-b);
    }

    remove(index){
        if(index >=0 && index< this.collection.length){
            this.collection.splice(index,1);
            //noinspection JSAnnotator
            this.size--;
            return this.collection.sort((a,b) => a-b);
        }
        else{
            throw new Error
        }
    }

    get(index){
        if(index >=0 && index< this.collection.length){
            return this.collection[index];
        }
        else{
            throw new Error
        }
    }

    size(){
        return this.size;
    }
}

let nums = new List();
nums.add(1);
nums.add(2);
nums.add(3);
nums.add(4);
nums.add(5);
nums.add(6);
nums.remove(0);
console.log(nums.get(4));
console.log(nums.size);

