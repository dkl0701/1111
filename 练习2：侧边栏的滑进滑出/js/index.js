function setRem(){
    var ui_w=375;

    var client_w=document.documentElement.clientWidth||document.body.clientWidth;

   

    // 设置最大最小宽度

    client_w=client_w>625?625:client_w;

    client_w=client_w<300?300:client_w;

    // console.log(ui_w,client_w);

    var html=document.getElementsByTagName('html')[0];

    // var html=document.documentElement('html')[0];//和上边的获取方式一样

    html.style.fontSize=(client_w/ui_w)*10+'px';

   

}  

// 防抖

var timer=null;

window.onresize=function(){
    clearTimeout(timer);

    timer=setTimeout(setRem,300);

}

// 当页面加载的时候也要调用一下setRem,目的是默认把html 根节点的字体大小 设置为10px

window.onload=setRem;

// setRem();//也是表示你页面加载的时候调用setRem


//左侧边栏滑进滑出
// 找到 用户
var user_ = document.getElementsByClassName('box_user')[0];

// 找到蒙版
var mask_ = document.getElementsByClassName('mask')[0];

// 找到用户名样式
var text_ = document.getElementsByClassName('text')[0];

//点击时操作事件


user_.onclick = function () {
    mask_.style.display = 'block';
    text_.style.display = 'block';
    text_.style.left = '0';
}

mask_.onclick = function () {
    mask_.style.display = 'none'
    text_.style.left = '-40rem';
}