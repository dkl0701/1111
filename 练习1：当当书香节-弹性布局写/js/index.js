// 定义一个图片懒加载的函数
function lazyImg() {
    // 1.获取页面已经滚动的高度   获取当前设备的高度
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    //2.获取到所有的图片资源
    var images = document.getElementsByClassName('images');
    console.log(images);
    //（3.遍历图片 通过当前图片的自定义属性 找到真实的图片路径
    for (var img of images) {
        // console.log(img);
        // 4.找到当前图片距离页面最上面的距离<=获取页面已经滚动的距离+获取设备的高度
        // 5.替换图片资源 把真实的图片路径 替换当前的图片src
        if (((img.offsetTop) <= (scrollTop + clientHeight)) && (img.getAttribute('data-realSrc'))) {

            // 获取真实路径
            var realSrc = img.getAttribute('data-realSrc');
            console.log(realSrc);
            img.src = realSrc;
            //不让已经加载的图片再进入当前判断中
            img.removeAttribute('data-realSrc');
        }
    }

}
// 页面加载 调用懒加载函数
window.onload = lazyImg;
// 页面滚动  调用懒加载函数 
window.onscroll = lazyImg;







