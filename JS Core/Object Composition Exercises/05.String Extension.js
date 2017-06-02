(function () {
    String.prototype.isEmpty = function () {
        return this == '';
    };

    String.prototype.ensureStart = function (str) {
        if(this.startsWith(str))return this.toString();
        return str + this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        if(this.endsWith(str))return this.toString();
        return this.toString() + str;
    };

    String.prototype.truncate = function (n) {
        if(this.length <= n) return this.toString();

        if(n < 4){
            return '.'.repeat(n);
        }

        if(!this.includes(' ')){
            return this.slice(0, n - 3) + '...';
        }

        let text = this.split(' ');
        let result = text[0];

        for (let i = 1; i < text.length; i++) {
            if(result.length + text[i].length + 4 > n){
                return result + '...';
            }
            result += ` ${text[i]}`;
        }
    };

    String.format = function (str, ...params) {
        return str.replace(/\{([\d]+)\}/g, function (m, g) {
            if(params[Number(g)] != undefined){
                return params[Number(g)];
            }
            return m;
        });
    };
})();
let str = 'my string';
console.log(str = str.ensureStart('my'));
console.log(str = str.ensureStart('hello '));
console.log(str = str.truncate(16));
console.log(str = str.truncate(14));
console.log(str = str.truncate(8));
console.log(str = str.truncate(4));
console.log(str = str.truncate(2));
console.log(str = String.format('The {0} {1} fox', 'quick', 'brown'));
console.log(str = String.format('jumps {0} {1}', 'dog'));
