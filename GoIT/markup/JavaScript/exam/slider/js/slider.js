"use strict";
var wrap = document.getElementById("wrap"),
    sec = document.getElementById("sec"),
    sl = document.getElementById("sl"),
    left = document.getElementById("left"),
    right = document.getElementById("right"),
    slowleft = document.getElementById("slowleft"),
    slowright = document.getElementById("slowright"),
    marg = 0,
    ID,
    rightInt,
    leftInt;

wrap.style.width = (sec.style.width - 100) + "px";
//console.log(window.innerWidth);

window.onresize = function() {
    wrap.style.width = (sec.style.width - 100) + "px";
}

window.onload = go();

sl.addEventListener('mouseenter', function() {
    left.style.opacity = 0.2;
    right.style.opacity = 0.2;
    clearInterval(ID);
}, false);

sl.addEventListener('mouseleave', function() {
    left.style.opacity = 0;
    right.style.opacity = 0;
    go();
}, false);

slowright.addEventListener('mouseenter', function() {
    rht(10)
}, false);

slowright.addEventListener('mouseleave', function() {
    right.style.opacity = 0;
    clearInterval(rightInt);
    go();
}, false);

right.addEventListener('mouseenter', function() {
    rht(5)
}, false);

right.addEventListener('mouseleave', function() {
    right.style.opacity = 0;
    clearInterval(rightInt);
    go();
}, false);

slowleft.addEventListener('mouseenter', function() {
    lft(10); 
}, false);

slowleft.addEventListener('mouseleave', function() {
    left.style.opacity = 0;
    clearInterval(leftInt);
    go();
    
}, false);

left.addEventListener('mouseenter', function() {
    lft(5); 
}, false);

left.addEventListener('mouseleave', function() {
    left.style.opacity = 0;
    clearInterval(leftInt);
    go();
    
}, false);

function go() {
    ID = setInterval(function() {
        //console.log("!");
        marg--;
        if (marg == -202) {
            var img = sl.firstChild,
                throwawayNode = sl.removeChild(img);
            marg = 0;
            var child = sl.appendChild(throwawayNode);
        }
        sl.style.marginLeft = marg + "px";
    }, 20);
}

function lft(x) {
    clearInterval(ID);
    left.style.opacity = 0.4;
    leftInt = setInterval(function() {
        marg++;
        if (marg == 0) {
            var img = sl.lastChild,
                throwawayNode = sl.removeChild(img);
            marg = -202;
            sl.insertBefore(throwawayNode, sl.firstChild);
        }
        sl.style.marginLeft = marg + "px";
    }, x)
}

function rht(x) {
    clearInterval(ID);
    right.style.opacity = 0.4;
    rightInt = setInterval(function() {
        marg--;
        if (marg == -202) {
            var img = sl.firstChild,
                throwawayNode = sl.removeChild(img);
            marg = 0;
            var child = sl.appendChild(throwawayNode);
        }
        sl.style.marginLeft = marg + "px";
    }, x);
}