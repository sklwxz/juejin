//无限滚动
window.addEventListener("scroll", function(event) {

        let height = document.documentElement.getBoundingClientRect().bottom - document.documentElement.clientHeight
        if (height > 50) return
        let node = document.createElement("li")
        node.style = "height: 133px;width: 710px; background-color: #fff;margin-top: 1px;margin-left: 0px;"
        node.innerHTML = ' <div class="artice"><p class="title1 distance"><a href="index.html">windy青烟书双</a></p><p class="title2 distance" title="JS中的——跨域CORS">JS中的——跨域CORS</p><p class="article-content distance">js跨域是指通过js在不同的域之间进行数据传输或通信，比如用ajax向一个不同的域请求数据，或者通过js获取页面中不同域的框架中(iframe)的数据。只要协议、域名、端口有任何一个不同，都被当作是不同的域。</p><i class="iconfont distance1"><a href="index.html">&#xe8bf;<span>371</span></a></i><i class="iconfont distance1"><a href="index.html">&#xf01b8;<span>2</span></a></i><i class="iconfont distance1"><a href="index.html">&#xe662;<span>评论</span></a></i></div>'
        setTimeout(() => {

            body.appendChild(node)
        }, 1000);


    })
    /* 滚动后导航栏显示当前所在区域 */
$(window).scroll(function() { //监听窗口滚动事件
    var scrollTop = $("html").scrollTop(); //获取当前位置到页面顶部的距离
    $(".catalog-lis").each(function(index, element) { //遍历导航栏选项
        if ($(element.hash).offset() && scrollTop >= $(element.hash).offset().top - 300) { //判断当前位置是否为导航栏对应区域
            $(this).css({ "background": "#D23217", "color": "white", "border": "1px solid #000000", "box-shadow": "inset 0 0 1px #db5f4c,inset 0 1px 1px #f18a75" }); //将导航栏选项设置样式
            $(this).siblings().css({ "background": "white", "color": "black", "border": "0 solid #000000", "box-shadow": "" });
            //将其他导航选项取消样式
        };
    });
});