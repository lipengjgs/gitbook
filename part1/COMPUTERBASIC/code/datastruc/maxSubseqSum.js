// 求最大子列和
const list = [3, 2, 5, 16, -3, -5, 4]
// 法一：所有子列算出来 O(n3)
function maxSubseqSum01(list, N) {
    let maxSum = 0
    for (let i = 0; i < N; i++) {
        for(let j = i; j < N; j++) {
            let sum = 0;
            for (let k = i; k <= j; k++) {
                sum += list[k]
            }
            if(sum > maxSum) {
                maxSum = sum
            }
        }
    }
    return maxSum
}

// 法二：O(n2)
function maxSubseqSum02(list, N) {
    let maxSum = 0
    for (let i = 0; i < N; i++) {
        let sum = 0
        for(let j = i; j < N; j++) {
            sum += list[j]
            if(sum > maxSum) {
                maxSum = sum
            }
        }
    }
    return maxSum
}

// 法三：分而治之的方法，递归
function maxSubseqSum03() {
    
}

// 法四： 在线处理, 每输入一个数据就进行即时处理，在任何一个地方中止输入，算法都能正确地给出当前的解
function maxSubseqSum04(list, N) {
    let sum = 0
    let maxSum = 0
    for(let i = 0; i < N; i++) {
        sum += list[i]
        if(sum > maxSum) {
            maxSum = sum
        } else if(sum < 0) {
            sum = 0
        }
    }
    return maxSum
}


console.time('a')
console.log(maxSubseqSum01(list, list.length))
console.timeEnd('a')

console.time('b')
console.log(maxSubseqSum02(list, list.length))
console.timeEnd('b')

console.time('c')
console.log(maxSubseqSum04(list, list.length))
console.timeEnd('c')