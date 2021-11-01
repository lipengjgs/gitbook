
//有一头母牛，它每年年初生一头小母牛。每头小母牛从第四个年头开始，每年年初也生一头小母牛。请编程实现在第n年的时候，共有多少头母牛？
//输入数据由多个测试实例组成，每个测试实例占一行，包括一个整数n(0<n<55)，n的含义如题目中描述。n=0表示输入数据的结束，不做处理。
var question1 = {
    cowNum: function(n){
                if(n<=0){
                    return "";
                }
                var num = [];
                for(var i=1;i<=4;i++){
                    num[i]=i;
                }
                for(var i = 5;i<=n;i++){
                    num[i] = num[i-1]+num[i-3];
                }
                return num[n];
            },
   output: function(){
                for(var i =0 ;i < 55;i++){
                    console.log(this.cowNum(i));
                }
            }
}
question1.output();

