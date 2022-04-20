Canvas=
document.getElementById("mycanvas")
ctx = canvas.getcontext("2d")

ctx.beginpath();
ctx.strokestyle = "red";
ctx.linewidth = 1;
ctx.rect (150,143,430,200);
ctx.stroke();
