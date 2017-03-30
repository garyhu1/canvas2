//创建多角行
function createAngle(ctx,n,x,y,size){
	var angle = Math.PI/n*4;
	ctx.beginPath();
	ctx.moveTo(x,y1+y);
	for(var i = 0;i <= n;i++){
		var x1 = Math.sin(i*angle);
		var y1 = Math.cos(i*angle);
		ctx.lineTo(x1*size+x,y1*size+y);
	}
	ctx.closePath();
}
