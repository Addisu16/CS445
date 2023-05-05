"use strict";
// abstract class baseObject = { 
// 	width: 0, 
// 	length: 0 
// }; 
class baseObject {
    constructor() {
        this.width = 0;
        this.length = 0;
    }
    calcSize() {
    }
}
class rectangel extends baseObject {
    constructor(width, length) {
        super();
        this.width = width;
        this.length = length;
    }
    calcSize() {
        return this.width * this.length;
    }
}
const x = new rectangel(5, 2);
console.log(x.calcSize()); // 10
