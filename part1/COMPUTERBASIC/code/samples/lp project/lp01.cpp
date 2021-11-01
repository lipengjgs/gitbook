/**
 * name: lp01.cpp
 * function: calculations
 * author: lipeng
 * date: 2020-12-05
 */

// 预编译命令
#include <iostream>
#include <cmath>

using namespace std;

void calc01() 
{
	float a = 1 + 1 / (1 + 1/(1 + 1/5));
	cout <<
		 a
		 << endl;
}

void calc02() 
{
    cout <<
		 sqrt(3 * 3 + 4 * 4)
		 << endl;
}

void calc03() 
{
	cout << 
		 sin(20.0 / 180 * 3.1415926) *
		 cos(20.0 / 180 * 3.1415926) - 
		 cos(10.0 / 180 * 3.1415926) /
		 tan(10.0 / 180 * 3.1415926)
		 << endl;
}

void calc04() 
{
	cout << 
		 sqrt((1-cos(3.1415926/3))/2)
		 << endl;
}

void calc05() 
{
	cout << 
		 sin(3.1415926/4)*sin(3.1415926/4) + 
		 sin(3.1415926/4)*cos(3.1415926/4) -
		 cos(3.1415926/4)*cos(3.1415926/4)
		 << endl;
}

void calc06() 
{
	cout << 
		 2*sqrt(5)*(sqrt(6) + 
		 sqrt(3))/(6+3)
		 << endl;
}

void calc07() 
{
	cout << 
		 (log(5)*log(3) - log(2)) /
		 sin(3.1415926/3)
		 << endl;
}

void calcPrice() 
{
	float applePrice = 3.5;
	float bananaPrice = 4.2;
	float appleWeight = 0.0;
	float bananaWeight = 0.0;
	float total = 0.0;
	cout << "请输入苹果重量" << endl;
	cin >> appleWeight;
	cout << "请输入香蕉重量" << endl;
	cin >> bananaWeight;
	total = applePrice * appleWeight + 
		    bananaPrice * bananaWeight;

	cout << "应付款: " << total << endl;
}

// & 是取地址的意思
void dataType() 
{
	int i;
	float f;
	long l;
	double d;
	cout << "sizeof(int) = " << sizeof(int)
		 << ", sizeof(i) = " << sizeof(i)
		 << ", &i = " << &i << endl;
	cout << "sizeof(float) = " << sizeof(float)
		 << ", sizeof(f) = " << sizeof(f)
		 << ", &f = " << &f << endl;
	cout << "sizeof(long) = " << sizeof(long)
		 << ", sizeof(l) = " << sizeof(l)
		 << ", &l = " << &l << endl;
	cout << "sizeof(double) = " << sizeof(double)
		 << ", sizeof(d) = " << sizeof(d)
		 << ", &d = " << &d << endl;
}

// 变量赋值
void attachValue() 
{
	int a=0, b=0, c=0;
	a = 7;
	b = a;
	c = a + b;
	a = a + 1;
	cout << a << ", " << b << ", " << c << endl;
}

// 指针变量
void pointerVal() 
{
	int aKey = 0, b = 0; 
	int *p = &aKey, *q = &b;
	aKey = 66;
	// p = &aKey;
	// q = &b;
	// *q 就是b的值
	*q = *p; // 吧a的值给了b
	cout << p << ", " << q << endl;
	cout << b << ", " << *q << endl;
}

// 王小二晚会
void calcMoney() 
{
	float bagPrice = 88.0;
	float clothesPrice = 35.5;
	float noteBookPrice = 4.0;
	int firstNum = 0;
	int secondNum = 0;
	int thirdNum = 0;
	float total = 0.0;
	cout << "请输入一等奖人数" << endl;
	cin >> firstNum;
	cout << "请输入二等奖人数" << endl;
	cin >> secondNum;
	cout << "请输入三等奖人数" << endl;
	cin >> thirdNum;
	total = firstNum * bagPrice + 
		    secondNum * clothesPrice +
			thirdNum * noteBookPrice;

	cout << "应筹款: " << total << endl;
}

// 关系表达 - 做好事 >= > == <= < !=
void charType() 
{
	char thisman = 'A';
	cout << (thisman == 65) << endl; // 1 真
}

// 可以使用for循环延迟时间
void forStatement() 
{
	int sum = 0;
	for(int k = 0; k < 100000; k++) {
		sum = sum + (k + 1);
	}
	cout << sum << endl;
}

void whoIsTrue() 
{
	int g = 0;

	for(int k = 0 ; k < 4; k++) {
		int sum = 0;
		if ((k != 0)  + (k == 2) + (k == 3) + (k != 3) == 3) {
			cout << "This man is " << k << endl;
			g = 1;
		}
	}

	if (g != 1) {
		cout << "Cant find!" << endl;
	}
}

// 逻辑运算 && || !
void whoIsCriminal() 
{
	int cc1, cc2, cc3, cc4, cc5, cc6;
	for(int a = 0 ; a < 2; a++)
		for(int b = 0 ; b < 2; b++)
			for(int c = 0 ; c < 2; c++)
				for(int d = 0 ; d < 2; d++)
					for(int e = 0 ; e < 2; e++)
						for(int f = 0 ; f < 2; f++) {
							cc1 = a || b;
							cc2 = !(a && d);
							cc3 = (a && e) || (a && f) || (e && f);
							cc4 = (b && c) || (!b && !c);
							cc5 = (c && !d) || (d && !c);
							cc6 = d || (!d && !e);
							if (cc1 + cc2 + cc3 + cc4 + cc5 + cc6 == 6) {
								cout << a << ", " << b << ", " << c << ", " << d << ", " << e << ", " << f << endl;
							}
						}
}

void whoIsCriminal01() 
{
	int cc1, cc2, cc3, cc4, cc5, cc6;
	int a, b, c, d, e, f;
	for(int i = 0; i < pow(2, 6); i++) {
		a = (i & 32) >> 5;
		b = (i & 16) >> 4;
		c = (i & 8) >> 3;
		d = (i & 4) >> 2;
		e = (i & 2) >> 1;
		f = i & 1;
		cc1 = a || b;
		cc2 = !(a && d);
		cc3 = (a && e) || (a && f) || (e && f);
		cc4 = (b && c) || (!b && !c);
		cc5 = (c && !d) || (d && !c);
		cc6 = d || (!d && !e);
		if (cc1 + cc2 + cc3 + cc4 + cc5 + cc6 == 6) {
			cout << a << ", " << b << ", " << c << ", " << d << ", " << e << ", " << f << endl;
		}
	}
}

void doWhile() {
	double e = 1.0, c;
	long k = 1;
	do 
	{
		c = 1.0;
		for(int i = 1; i <= k; i++) {
		  c = c/i;
		}
		k++;
		e += c;
	} while (c > 1e-10);

	cout << e << endl;
}

void minGongBei() {
	int a = 0;
	int b = 0;

	cout << "请输入两个整数，使用空格隔开：" << endl;
	cin >> a;
	cin >> b;

	int x = 0;
	int y = 0;
	if(a > b) {
		x = a;
	} else {
		x = b;
		b = a;
	}
	y = x;
	while(y % b != 0) {
		y = y + x;
	}
	cout << y << endl;
}

void question01 () {
	int a, b, c;
	for(a = 0; a <= 2; a++)
		for(b = 0; b <= 2; b++)
			for(c = 0; c <= 2; c++) {
				int num0 = 0;
				int num1 = 0;
				int num2 = 0;
				if(b > a) {
					num0++; 
					num2++;
				}
				if(c == a) {
					num0++; 
				}
				if(a > b) {
					num1++;
				}
				if(a > c) {
					num1++;
				}
				if(c > b) {
					num2++;
				}
				bool cc01 = (a <= b && a < c && num0 > num1 && num0 > num2);
				bool cc02 = (b <= c && b < a && num1 > num0 && num1 > num2);
				bool cc03 = (c <= a && c < b && num2 > num0 && num2 > num1);
				if (cc01 || cc02 || cc03) {
					cout << a << ", " << b << ", " << c << endl;
				}
			}
	
}

void question02 () {
	
}

// 函数
bool checkPrime(int af) {
	for(int i = 2; i <= sqrt(af); i++) {
		if (af % i == 0) {
			return false;
		}
	}
	return true;
}

// done N名裁判给某歌手打分（假定都为整数），评分原则是去掉一个最高分、一个最低分，剩下的分数的平均值为该歌手的最终得分。裁判给的分数 60 - 100，裁判人数为10，键盘输入每个分数，输出最终得分

// done 编程计算 1的四次方 + 2的四次方 + 3的四次方 +。。。N的四次方

// done 求解2-100以内全部4n + 1型的质数的数目

// done 编程计算105的所有约数

// done 求出所有用7，8，9组成的，且各位数字互不相同的3位数



void arrayQues01()
{
    int arr[5] = {1, 2, 3, 4, 5};
    cout << sizeof(arr) << endl;
}

int main() 
{
	calc01();
	calc02();
	calc03();
	calc04();
	calc05();
	calc06();
	calc07();
	// calcPrice();
	dataType();
	attachValue();
	pointerVal();
	// calcMoney();
	charType();
	forStatement();
	whoIsTrue();
	whoIsCriminal();
	whoIsCriminal01();
	doWhile();
	question01();
	// minGongBei();
	cout << "是不是质数： " << checkPrime(31) << endl;
	arrayQues01();
	return 0;
}