function $$(id) {
    return document.getElementById(id);
}

function pageLoad() {
    //正方形
    var square = $$('square');
    var squares = square.getContext('2d');
    squares.fillStyle = 'rgb(253, 200, 4)';
    squares.fillRect(10, 10, 80, 80); //填充一个矩形(X,Y,Width,Height)
    // 圆形
    var circle = $$('circle');
    var circles = circle.getContext('2d');
    circles.beginPath();
    circles.arc(50, 50, 40, 0, Math.PI * 2, true); //圆（x,y,radius）
    circles.closePath();
    circles.fillStyle = 'rgb(253, 200, 4)';
    circles.fill(); //闭合形状并且以填充方式绘制出来
    //长方形
    var rectangle = $$('rectangle');
    var rectangles = rectangle.getContext('2d');
    rectangles.fillStyle = 'rgb(253, 200, 4)';
    rectangles.fillRect(10, 20, 80, 60);
    //三角形
    var triangle = $$('triangle');
    var triangles = triangle.getContext('2d');
    triangles.beginPath();
    var height = 100 * Math.sin(Math.PI / 3);
    triangles.moveTo(50, 10); //从（50，10）开始
    triangles.lineTo(10, height); //从（50，10）画到（10，90））
    triangles.lineTo(90, height); //从（10，90）画到（90，90）
    triangles.fillStyle = 'rgb(253, 200, 4)';
    triangles.fill();
    //菱形
    function drawPath(x, y, n, r, name) {
        var i, ang;
        ang = Math.PI * 2 / n //旋转的角度
        name.save(); //保存状态
        name.fillStyle = 'rgb(253, 200, 4)';
        name.translate(x, y); //原点移到x,y处，即要画的多边形中心
        name.moveTo(0, -r); //据中心r距离处画点
        name.beginPath();
        for (i = 0; i < n; i++) {
            name.rotate(ang) //旋转
            name.lineTo(0, -r); //据中心r距离处连线
        }
        name.closePath();
        name.stroke();
        name.fill();
        name.restore(); //返回原始状态
    }
    var rhombus = $$('rhombus');
    var rhombuss = rhombus.getContext('2d');
    drawPath(50, 50, 4, 40, rhombuss); //在50,50处画一个半径为40的菱形
    //平行四边形
    var parallelogram = $$('parallelogram');
    var parallelograms = parallelogram.getContext('2d');
    parallelograms.beginPath();
    parallelograms.moveTo(20, 20);
    parallelograms.lineTo(90, 20);
    parallelograms.lineTo(80, 80);
    parallelograms.lineTo(10, 80);
    parallelograms.closePath();
    parallelograms.fillStyle = 'rgb(253, 200, 4)';
    parallelograms.fill();
    //正五边形
    var pentagon = $$('pentagon');
    var pentagons = pentagon.getContext('2d');
    drawPath(50, 50, 5, 40, pentagons) //在50,50处画一个半径为40的五边形
    //梯形
    var trapezoid = $$('trapezoid');
    var trapezoids = trapezoid.getContext('2d');
    trapezoids.beginPath();
    trapezoids.moveTo(30, 20);
    trapezoids.lineTo(70, 20);
    trapezoids.lineTo(90, 90);
    trapezoids.lineTo(10, 90);
    trapezoids.closePath();
    trapezoids.fillStyle = 'rgb(253, 200, 4)';
    trapezoids.fill();
    //半圆形
    var hround = $$('hround');
    var hrounds = hround.getContext('2d');
    hrounds.beginPath();
    hrounds.arc(50, 50, 40, 0, Math.PI, true); //圆（x,y,radius）
    hrounds.closePath();
    hrounds.fillStyle = 'rgb(253, 200, 4)';
    hrounds.fill();
}