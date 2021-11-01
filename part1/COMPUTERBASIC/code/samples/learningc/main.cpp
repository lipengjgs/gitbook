#include <iostream>
#include <cmath>

using namespace std;

// N名裁判给某歌手打分（假定都为整数），评分原则是去掉一个最高分、一个最低分，剩下的分数的平均值为该歌手的最终得分。裁判给的分数 60 - 100，裁判人数为10，键盘输入每个分数，输出最终得分

int maxNum(int a, int b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

int minNum(int a, int b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
void rating() {
    int sum = 0;
    int max = 10;
    int x = 0;
    int y = 100;
    cout << "请输入10个分数" << endl;
    for(int i = 0; i < max; i++) {
        int score = 0;
        cin >> score;
        x = maxNum(score, x);
        y = minNum(score, y);
        sum = sum + score;
    }
    float result = (sum - x - y) / (max - 2);
    cout << "平均分是: " << result << endl;
}

// 编程计算 1的四次方 + 2的四次方 + 3的四次方 +。。。N的四次方

int calcFourSqurt(int n) {
    int res = 1;
    for (int i = 0; i < 4; i++) {
        res = res * n;
    }
    return res;
}

int calc01(int numCount) {
    if (numCount <= 0) {
        return 0;
    }
    int sum = 0;
    for (int i = 0; i < numCount; i++) {
        sum = sum + calcFourSqurt(i + 1);
    }
    return sum;
}

// 求解2-100以内全部4n + 1型的质数的数目
bool isPrime(int num) {
    if (num == 2) {
        return true;
    }
    for(int i = 2; i < sqrt(num) + 1; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
void getPrimeNum() {
    int sum = 0;
    for(int i = 2; i < 100; i++) {
        if (isPrime(i) && i % 4 == 1) {
            sum = sum + 1;
        }
    }
    cout << "2-100以内全部4n + 1型的质数的数目是： " << sum << endl;
}

// 编程计算105的所有约数
void getYueNum() {
    for(int i = 1; i <= 105; i++) {
        if (105 % i == 0) {
            cout << i << endl;
        }
    }
}

// 求出7,8,9,组成的所有位数不相同的三位数
bool hasSame(int a, int b, int c) {
    if (a !=  b && b != c && a != c) {
        return false;
    }
    return true;
}

void getThree() {
    int sum = 0;
    for(int i = 7; i <= 9; i++) {
        int three = i * 100;
        for(int j = 7; j <= 9; j++) {
            int two = j * 10;
            for(int k = 7; k <= 9; k++) {
                int one = k;
                sum = sum + three + two + one;
                if(!hasSame(i, j, k)) {
                    cout << sum << endl;
                }
                sum = 0;
            }
        }
    }
}

int main()
{
    //rating();
    //cout << calc01(6) << endl;
    //getPrimeNum();
    //getYueNum();
    getThree();
    return 0;
}
