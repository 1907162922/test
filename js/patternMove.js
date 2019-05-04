function inDrag() {
    var box1 = document.getElementById('div');
    var isDrag = false;
    var x, y;
    //正方形
    pattern1.onmousedown = function (e) {
        var e = e || window.event;
        x = e.clientX - pattern1.offsetLeft; //鼠标距离图形左侧距离
        y = e.clientY - pattern1.offsetTop; //鼠标距离图形右侧距离
        isDrag = true;

        //监听鼠标移动
        document.onmousemove = function (e) {
            if (isDrag) {
                var e = e || window.event;
                var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft; //获取滚轮卷起的距离，分别兼容ie和chrome
                var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                var moveX = e.clientX + scrollX - x; //图形左侧距离边界
                var moveY = e.clientY + scrollY - y; //图形上方距离边界
                var boxLeftMin = box1.style.left;//拼图框的左边框的左偏移量
                var boxLeftMax = boxLeftMin + box1.getBoundingClientRect().width - pattern1.offsetWidth;//拼图框的右边框的左偏移量
                var boxTopMin = box1.style.top;//拼图框的上边框的上偏移量
                var boxTopMax = boxTopMin + box1.getBoundingClientRect().height - pattern1.offsetHeight;

                if (moveX <= boxLeftMin) {
                    moveX = boxLeftMin;
                } else if (moveX >= boxLeftMax) {
                    moveX = boxLeftMax;
                }

                if (moveY <= boxTopMin) {
                    moveY = boxTopMin;
                } else if (moveY >= boxTopMax) {
                    moveY = boxTopMax;
                }

                pattern1.style.left = parseInt(moveX) + "px";
                pattern1.style.top = parseInt(moveY) + "px";

            } else {
                return;
            }
        }
    }

    //鼠标松开，图形不再移动
    pattern1.onmouseup = function () {
        isDrag = false;
    }

    //圆
    pattern2.onmousedown = function (e) {
        var e = e || window.event;
        x = e.clientX - pattern2.offsetLeft; //鼠标距离图形左侧距离
        y = e.clientY - pattern2.offsetTop; //鼠标距离图形右侧距离
        isDrag = true;

        //监听鼠标移动
        document.onmousemove = function (e) {
            if (isDrag) {
                var e = e || window.event;
                var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft; //获取滚轮卷起的距离，分别兼容ie和chrome
                var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                var moveX = e.clientX + scrollX - x; //图形左侧距离边界
                var moveY = e.clientY + scrollY - y; //图形上方距离边界
                var boxLeftMin = box1.style.left;//拼图框的左边框的左偏移量
                var boxLeftMax = boxLeftMin + box1.getBoundingClientRect().width - pattern2.offsetWidth;//拼图框的右边框的左偏移量
                var boxTopMin = box1.style.top;//拼图框的上边框的上偏移量
                var boxTopMax = boxTopMin + box1.getBoundingClientRect().height - pattern2.offsetHeight;

                if (moveX <= boxLeftMin) {
                    moveX = boxLeftMin;
                } else if (moveX >= boxLeftMax) {
                    moveX = boxLeftMax;
                }

                if (moveY <= boxTopMin) {
                    moveY = boxTopMin;
                } else if (moveY >= boxTopMax) {
                    moveY = boxTopMax;
                }

                pattern2.style.left = parseInt(moveX) + "px";
                pattern2.style.top = parseInt(moveY) + "px";

            } else {
                return;
            }
        }
    }

    //鼠标松开，图形不再移动
    pattern2.onmouseup = function () {
        isDrag = false;
    }

    //矩形
    pattern3.onmousedown = function (e) {
        var e = e || window.event;
        x = e.clientX - pattern3.offsetLeft; //鼠标距离图形左侧距离
        y = e.clientY - pattern3.offsetTop; //鼠标距离图形右侧距离
        isDrag = true;

        //监听鼠标移动
        document.onmousemove = function (e) {
            if (isDrag) {
                var e = e || window.event;
                var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft; //获取滚轮卷起的距离，分别兼容ie和chrome
                var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                var moveX = e.clientX + scrollX - x; //图形左侧距离边界
                var moveY = e.clientY + scrollY - y; //图形上方距离边界
                var boxLeftMin = box1.style.left;//拼图框的左边框的左偏移量
                var boxLeftMax = boxLeftMin + box1.getBoundingClientRect().width - pattern3.offsetWidth;//拼图框的右边框的左偏移量
                var boxTopMin = box1.style.top;//拼图框的上边框的上偏移量
                var boxTopMax = boxTopMin + box1.getBoundingClientRect().height - pattern3.offsetHeight;

                if (moveX <= boxLeftMin) {
                    moveX = boxLeftMin;
                } else if (moveX >= boxLeftMax) {
                    moveX = boxLeftMax;
                }

                if (moveY <= boxTopMin) {
                    moveY = boxTopMin;
                } else if (moveY >= boxTopMax) {
                    moveY = boxTopMax;
                }

                pattern3.style.left = parseInt(moveX) + "px";
                pattern3.style.top = parseInt(moveY) + "px";

            } else {
                return;
            }
        }
    }

    //鼠标松开，图形不再移动
    pattern3.onmouseup = function () {
        isDrag = false;
    }

    //三角形
    pattern4.onmousedown = function (e) {
        var e = e || window.event;
        x = e.clientX - pattern4.offsetLeft; //鼠标距离图形左侧距离
        y = e.clientY - pattern4.offsetTop; //鼠标距离图形右侧距离
        isDrag = true;

        //监听鼠标移动
        document.onmousemove = function (e) {
            if (isDrag) {
                var e = e || window.event;
                var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft; //获取滚轮卷起的距离，分别兼容ie和chrome
                var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                var moveX = e.clientX + scrollX - x; //图形左侧距离边界
                var moveY = e.clientY + scrollY - y; //图形上方距离边界
                var boxLeftMin = box1.style.left;//拼图框的左边框的左偏移量
                var boxLeftMax = boxLeftMin + box1.getBoundingClientRect().width - pattern4.offsetWidth;//拼图框的右边框的左偏移量
                var boxTopMin = box1.style.top;//拼图框的上边框的上偏移量
                var boxTopMax = boxTopMin + box1.getBoundingClientRect().height - pattern4.offsetHeight;

                if (moveX <= boxLeftMin) {
                    moveX = boxLeftMin;
                } else if (moveX >= boxLeftMax) {
                    moveX = boxLeftMax;
                }

                if (moveY <= boxTopMin) {
                    moveY = boxTopMin;
                } else if (moveY >= boxTopMax) {
                    moveY = boxTopMax;
                }

                pattern4.style.left = parseInt(moveX) + "px";
                pattern4.style.top = parseInt(moveY) + "px";

            } else {
                return;
            }
        }
    }

    //鼠标松开，图形不再移动
    pattern4.onmouseup = function () {
        isDrag = false;
    }

    //菱形
    pattern5.onmousedown = function (e) {
        var e = e || window.event;
        x = e.clientX - pattern5.offsetLeft; //鼠标距离图形左侧距离
        y = e.clientY - pattern5.offsetTop; //鼠标距离图形右侧距离
        isDrag = true;

        //监听鼠标移动
        document.onmousemove = function (e) {
            if (isDrag) {
                var e = e || window.event;
                var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft; //获取滚轮卷起的距离，分别兼容ie和chrome
                var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                var moveX = e.clientX + scrollX - x; //图形左侧距离边界
                var moveY = e.clientY + scrollY - y; //图形上方距离边界
                var boxLeftMin = box1.style.left;//拼图框的左边框的左偏移量
                var boxLeftMax = boxLeftMin + box1.getBoundingClientRect().width - pattern5.offsetWidth;//拼图框的右边框的左偏移量
                var boxTopMin = box1.style.top;//拼图框的上边框的上偏移量
                var boxTopMax = boxTopMin + box1.getBoundingClientRect().height - pattern5.offsetHeight;

                if (moveX <= boxLeftMin) {
                    moveX = boxLeftMin;
                } else if (moveX >= boxLeftMax) {
                    moveX = boxLeftMax;
                }

                if (moveY <= boxTopMin) {
                    moveY = boxTopMin;
                } else if (moveY >= boxTopMax) {
                    moveY = boxTopMax;
                }

                pattern5.style.left = parseInt(moveX) + "px";
                pattern5.style.top = parseInt(moveY) + "px";

            } else {
                return;
            }
        }
    }

    //鼠标松开，图形不再移动
    pattern5.onmouseup = function () {
        isDrag = false;
    }

    //平行四边形
    pattern6.onmousedown = function (e) {
        var e = e || window.event;
        x = e.clientX - pattern6.offsetLeft; //鼠标距离图形左侧距离
        y = e.clientY - pattern6.offsetTop; //鼠标距离图形右侧距离
        isDrag = true;

        //监听鼠标移动
        document.onmousemove = function (e) {
            if (isDrag) {
                var e = e || window.event;
                var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft; //获取滚轮卷起的距离，分别兼容ie和chrome
                var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                var moveX = e.clientX + scrollX - x; //图形左侧距离边界
                var moveY = e.clientY + scrollY - y; //图形上方距离边界
                var boxLeftMin = box1.style.left;//拼图框的左边框的左偏移量
                var boxLeftMax = boxLeftMin + box1.getBoundingClientRect().width - pattern6.offsetWidth;//拼图框的右边框的左偏移量
                var boxTopMin = box1.style.top;//拼图框的上边框的上偏移量
                var boxTopMax = boxTopMin + box1.getBoundingClientRect().height - pattern6.offsetHeight;

                if (moveX <= boxLeftMin) {
                    moveX = boxLeftMin;
                } else if (moveX >= boxLeftMax) {
                    moveX = boxLeftMax;
                }

                if (moveY <= boxTopMin) {
                    moveY = boxTopMin;
                } else if (moveY >= boxTopMax) {
                    moveY = boxTopMax;
                }

                pattern6.style.left = parseInt(moveX) + "px";
                pattern6.style.top = parseInt(moveY) + "px";

            } else {
                return;
            }
        }
    }

    //鼠标松开，图形不再移动
    pattern6.onmouseup = function () {
        isDrag = false;
    }

    //正五边形
    pattern7.onmousedown = function (e) {
        var e = e || window.event;
        x = e.clientX - pattern7.offsetLeft; //鼠标距离图形左侧距离
        y = e.clientY - pattern7.offsetTop; //鼠标距离图形右侧距离
        isDrag = true;

        //监听鼠标移动
        document.onmousemove = function (e) {
            if (isDrag) {
                var e = e || window.event;
                var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft; //获取滚轮卷起的距离，分别兼容ie和chrome
                var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                var moveX = e.clientX + scrollX - x; //图形左侧距离边界
                var moveY = e.clientY + scrollY - y; //图形上方距离边
                var boxLeftMin = box1.style.left;//拼图框的左边框的左偏移量
                var boxLeftMax = boxLeftMin + box1.getBoundingClientRect().width - pattern7.offsetWidth;//拼图框的右边框的左偏移量
                var boxTopMin = box1.style.top;//拼图框的上边框的上偏移量
                var boxTopMax = boxTopMin + box1.getBoundingClientRect().height - pattern7.offsetHeight;

                if (moveX <= boxLeftMin) {
                    moveX = boxLeftMin;
                } else if (moveX >= boxLeftMax) {
                    moveX = boxLeftMax;
                }

                if (moveY <= boxTopMin) {
                    moveY = boxTopMin;
                } else if (moveY >= boxTopMax) {
                    moveY = boxTopMax;
                }

                pattern7.style.left = parseInt(moveX) + "px";
                pattern7.style.top = parseInt(moveY) + "px";

            } else {
                return;
            }
        }
    }

    //鼠标松开，图形不再移动
    pattern7.onmouseup = function () {
        isDrag = false;
    }

    //等腰梯形
    pattern8.onmousedown = function (e) {
        var e = e || window.event;
        x = e.clientX - pattern8.offsetLeft; //鼠标距离图形左侧距离
        y = e.clientY - pattern8.offsetTop; //鼠标距离图形右侧距离
        isDrag = true;

        //监听鼠标移动
        document.onmousemove = function (e) {
            if (isDrag) {
                var e = e || window.event;
                var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft; //获取滚轮卷起的距离，分别兼容ie和chrome
                var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                var moveX = e.clientX + scrollX - x; //图形左侧距离边界
                var moveY = e.clientY + scrollY - y; //图形上方距离边界
                var boxLeftMin = box1.style.left;//拼图框的左边框的左偏移量
                var boxLeftMax = boxLeftMin + box1.getBoundingClientRect().width - pattern8.offsetWidth;//拼图框的右边框的左偏移量
                var boxTopMin = box1.style.top;//拼图框的上边框的上偏移量
                var boxTopMax = boxTopMin + box1.getBoundingClientRect().height - pattern8.offsetHeight;


                if (moveX <= boxLeftMin) {
                    moveX = boxLeftMin;
                } else if (moveX >= boxLeftMax) {
                    moveX = boxLeftMax;
                }

                if (moveY <= boxTopMin) {
                    moveY = boxTopMin;
                } else if (moveY >= boxTopMax) {
                    moveY = boxTopMax;
                }

                pattern8.style.left = parseInt(moveX) + "px";
                pattern8.style.top = parseInt(moveY) + "px";

            } else {
                return;
            }
        }
    }

    //鼠标松开，图形不再移动
    pattern8.onmouseup = function () {
        isDrag = false;
    }

    //半圆
    pattern9.onmousedown = function (e) {
        var e = e || window.event;
        x = e.clientX - pattern9.offsetLeft; //鼠标距离图形左侧距离
        y = e.clientY - pattern9.offsetTop; //鼠标距离图形右侧距离
        isDrag = true;


        //监听鼠标移动
        document.onmousemove = function (e) {
            if (isDrag) {
                var e = e || window.event;
                var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft; //获取滚轮卷起的距离，分别兼容ie和chrome
                var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                var moveX = e.clientX + scrollX - x; //图形左侧距离边界
                var moveY = e.clientY + scrollY - y; //图形上方距离边界
                var boxLeftMin = box1.style.left;//拼图框的左边框的左偏移量
                var boxLeftMax = boxLeftMin + box1.getBoundingClientRect().width - pattern9.offsetWidth;//拼图框的右边框的左偏移量
                var boxTopMin = box1.style.top;//拼图框的上边框的上偏移量
                var boxTopMax = boxTopMin + box1.getBoundingClientRect().height - pattern9.offsetHeight;

                if (moveX <= boxLeftMin) {
                    moveX = boxLeftMin;
                } else if (moveX >= boxLeftMax) {
                    moveX = boxLeftMax;
                }

                if (moveY <= boxTopMin) {
                    moveY = boxTopMin;
                } else if (moveY >= boxTopMax) {
                    moveY = boxTopMax;
                }

                pattern9.style.left = parseInt(moveX) + "px";
                pattern9.style.top = parseInt(moveY) + "px";

            } else {
                return;
            }
        }
    }

    //鼠标松开，图形不再移动
    pattern9.onmouseup = function () {
        isDrag = false;
    }

}