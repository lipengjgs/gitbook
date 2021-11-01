var canvas = document.querySelector('#canvas_01');

if(canvas.getContext){
    // 确定浏览器支持canvas
    var context2d = canvas.getContext('2d');
    // 绘制线条
    // 绘制矩形(左上角为起始点，右下角为终止点)
    context2d.fillStyle = '#0000ff';
    context2d.fillStyle = 'rgba(0,0,255,0.5)';
    context2d.fillRect(0,0,50,50);
}