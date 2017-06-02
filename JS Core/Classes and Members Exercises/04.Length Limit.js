class Stringer{
    constructor(innerString, innerLength){
        this.innerString = innerString;
        this.innerLength = Number(innerLength);
    }

    increase(length) {
        this.innerLength += length;
    };

    decrease(length) {
        if(this.innerLength - length < 3){
            this.innerLength = 0;
        }else{
            this.innerLength -= length;
        }
    };

    toString(){
        let result = '';
        if(this.innerString.length > this.innerLength){
            result += this.innerString.substring(0, this.innerLength);
            result += '...';
            return result;
        }
        if(this.innerString.length < this.innerLength){
            result = this.innerString + '...';
            return result;
        }
        if(this.innerLength.length == 0){
            result += '...';
            return result;
        }
        return this.innerString;
    }
}
let obj = new Stringer("Viktor", 6);
obj.increase(2);
//obj.decrease(2);
console.log(obj.toString());