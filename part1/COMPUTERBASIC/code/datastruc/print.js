// 打印1-n
function printN(n) {
    if (n <= 0) {
        return
    }
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }
}

function printNRecursion(n) {
    if (n > 0) {
        printNRecursion(n - 1)
        console.log(n)
    }
}

// 递归太多直接会爆掉
// printN(100000)
// printNRecursion(100000)

// 写程序计算给定多项式在给定点x处的值
// f(x) = a0 + a1x + ... an-1xn-1 + anxn

function calc(a, x) {
    let result = a[0]
    for (let i = 1; i < a.length; i++) {
        result += a[i] * Math.pow(x, i)
    }
    console.log(result)
}

function calc01(a, x) {
    const len = a.length - 1
    let result = a[len]
    for (let i = len; i > 0; i--) {
        result = a[i - 1] + x * result
    }
    console.log(result)
}

let arr = []
for (let i = 1; i < 1e2; i++) {
    arr.push(i)
}

let a = 'aa'
let b = 'bb'
console.time(a)
calc(arr, 2)
console.timeEnd(a)

console.time(b)
calc01(arr, 2)
console.timeEnd(b)
