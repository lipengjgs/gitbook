function cal(){
    var a=1;
    for(var i=1;i<10000;i++){
        for(var j=1;j<10000;j++){
            for(var k=1;k<100;k++){
                 a+=(i+j+k); 
            }
        }
        
    }
    postMessage(a);
}
cal();