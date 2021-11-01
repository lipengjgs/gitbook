// 计算给定多项式在给定点处的值
#include <stdio.h>
#include <time.h>
#include <math.h>

clock_t start, stop;

#define MAXN 100
#define MAXK 1e7

double duration;

double f1(int n, double a[], double x) {
    int i;
    double p = a[0];
    for(i = 0; i <= n; i++) {
        p += (a[i] * (pow(x, i)));
    }
    return p;
}

double f2(int n, double a[], double x) {
    int i;
    double p = a[n];
    for(i = n; i > 0; i--) {
        p = a[n-1] + x * p;
    }
    return p;
}

int myFunction(double a[], int type) {
    if(type == 1) {
        f1(MAXN - 1, a, 1.1);
    } else if(type == 2){
        f2(MAXN - 1, a, 1.1);
    }
    return 0;
}

int main() {
    double a[MAXN];
    a[0] = 1;
    for(int i = 1; i <= MAXN; i++) {
        a[i] = 1 / (double)i;
    }

    start = clock();
    for(int i = 0; i < MAXK; i++) {
        myFunction(a, 2);
    }
    stop = clock();
    duration = ((double)(stop - start)) / CLK_TCK / MAXK;

    printf("ticks1 = %f\n", (double)(stop - start));
    printf("duration1 = %6.2e\n", duration);
    return 0;
}