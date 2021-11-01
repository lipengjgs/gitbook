console.time('sort');
var sort = {
    arr: [2,4,34,21,15,10,7,5],
    // 冒泡
    sortArr: function () {
        var len = this.arr.length;
        for (var i = 0; i < len; i++) {
            for (var j = i+1; j < len; j++) {
                if (this.arr[j] < this.arr[i]) {
                    var middleValue;
                    middleValue = this.arr[j];
                    this.arr[j] = this.arr[i];
                    this.arr[i] = middleValue;
                }
            }
        }
        return this.arr[parseInt(len/2)];
    },
    // 二分
    sortArr1: function () {
        var len = this.arr.length;
        for (var i = 0; i < len; i++) {
            for (var j = i+1; j < len/2; j++) {
                if (this.arr[j] < this.arr[i]) {
                    var middleValue;
                    middleValue = this.arr[j];
                    this.arr[j] = this.arr[i];
                    this.arr[i] = middleValue;
                }
            }
        }
        for (var l = len/2; l < len; l++) {
            if (this.arr[l] > this.arr[len/2-2] && this.arr[l] < this.arr[len/2-1]) {
                var middleValue;
                this.arr[len/2-1] = this.arr[l];
            }
        }
        return this.arr[parseInt(len/2)];
    }
}

sort.arr = new Array();
for(var k = 0; k < 100; k++) {
    var ran = Math.floor(Math.random()*100 + 1);
    sort.arr.push(ran);
}
sort.sortArr1();
for(var k = 0; k < 100; k++) {
    console.log(sort.arr[k]);
}
console.timeEnd('sort');