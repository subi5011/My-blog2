/*jQuery的快捷方法*/
/*自动加载*/
;$(function () {
    'use strict';

    var sidebar = $('#sidebar'),//选择侧栏
        mask = $('.mask'),//选择mask
        sidebar_trigger = $('#sidebar_trigger'),//选择侧栏触发器
        backButton = $('.back-to-top');//选择返回菜单


    function showSideBar() {//显示侧栏
        mask.fadeIn();//显示蒙版
        /*让sidebar出现
        * animate()方法的参数应该是对象
        * sidebar.animate({'right':0});*/
        /*用css方法的效果也是一样的*/
        /*sidebar.css('right',0);/*当right的初始值设置负值时使用*/
        sidebar.css('transform','translate(0,0)');//调整侧栏相关的css
    }

    function hideSideBar(){//隐藏侧栏
        mask.fadeOut();//隐藏蒙版
        /*sidebar.css('right',-sidebar.width());/*当right的初始值设置负值时使用*/
        sidebar.css('transform','translate('+ sidebar.width()+'px'+',0)');//调整侧栏相关的css
    }

    /*当sidebar_trigger被点击了就执行function()函数体*/
    /*这自己定义了一个函数showSideBar,把它的名字传进去了*/
    sidebar_trigger.on('click',showSideBar );//监听侧栏触发器点击事件
        /*用来在控制台做测试
        console.log('clicked');*/
    mask.on('click',hideSideBar);//监听mask点击事件
    backButton.on('click',function () {//监听返回按钮点击事件
        $('html,body').animate({
            scrollTop:0
        },800);
    });
    /*$(X)是选中X的意思*/
    $(window).on('scroll',function () {//监听window的scroll事件
        //如果已滚动的部分高于窗口的高度
        /*当窗口滚动时，窗口现实的顶部（在页面中的高度）大于窗口高度时*/
        if ($(window).scrollTop() > $(window).height())
            //显示返回按钮
            backButton.fadeIn();
        else//否则隐藏返回按钮
            backButton.fadeOut();
    });
    /*每次页面刷新让程序触发scroll事件*/
    //触发scroll事件
    $(window).trigger('scroll');

});