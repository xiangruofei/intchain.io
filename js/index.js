/**
 *@fileName index.js
 *@author   Like (likeaixi@gmail.com)
 *@date     2017/12/11
 *@disc
 */
//首页
// $(function () {
//     $('.white-paper>img').hover(
//         function () {
//             $(this).attr('src', 'img/whitepaper-hover.png');
//         },
//         function () {
//             $(this).attr('src', 'img/whitepaper.png');
//         });
// });
//交易平台
// $(function () {
//     // var icons = ['coinegg', 'allcoin', 'coolcoin'];
//     var $imgs = $('.transaction>div>div a>img');
//     $.each($imgs, function (index,val) {
//         var src = $(val).attr('src').slice(0,-4);
//         $(val).hover(
//             function () {
//                 $(this).attr('src', src+"-hover.png");
//             },
//             function () {
//                 $(this).attr('src', src+".png");
//             });
//     });
// });
//声明图标
// $(function () {
//     //声明
//     var $imgs = $('.statement>a>img');
//     $imgs.each(function (i,val) {
//         $(val).hover(
//             function () {
//                 if (i === 0) {
//                     $(val).attr('src', 'img/disclaimer-hover.png');
//                 }
//                 if (i === 1) {
//                     $(val).attr('src', 'img/risk-statement-hover.png');
//                 }
//             },
//             function () {
//                 if (i === 0) {
//                     $(val).attr('src', 'img/disclaimer.png');
//                 }
//                 if (i === 1) {
//                     $(val).attr('src', 'img/risk-statement.png');
//                 }
//             });
//     });
// });
//联系方式图标
$(function () {
    var icons = ['int', 'wechat', 'weibo', 'telegram', 'facebook', 'twitter', 'slack', 'reddit', 'github'];
    // var $imgs = $('.contact-icon>div>a>img');
    // $.each($imgs, function (index,val) {
    //     $(val).hover(
    //         function () {
    //             $(this).attr('src', "img/"+icons[index]+'0'+(index+1)+".png");
    //         },
    //         function () {
    //             $(this).attr('src', "img/"+icons[index]+".png");
    //         });
    // });
    var windowWidth = $(window).innerWidth();
    var $front = $('.contact-list').find('.front');
    var $back = $('.contact-list').find('.back');
    // console.log(windowWidth);
    // if (windowWidth>1200) {
        $.each($front, function (i,val) {
            $(val).mouseenter(function () {
                if (i === 0 || i=== 1) {
                    $(this).next().slideDown('slow');
                }
                if (windowWidth>=992) {
                    $(this).css('transform', 'rotateY(-180deg)')
                        .parent()
                        .next()
                        .find('img').css('transform', 'rotateY(-360deg)');
                }
            });
            if (windowWidth<992) {
                $(val).mouseleave(function () {
                    if (i === 0 || i=== 1) {
                        $(this).next().slideUp('slow');
                    }
                });
            }
        });
        $.each($back, function (i, val) {
            $(val).mouseleave(function () {
                if (i === 0 || i=== 1) {
                    $(this).parent().prev().find('p').slideUp('slow');
                }
                if (windowWidth>=992) {
                    $(this).css('transform', 'rotateY(-180deg)')
                        .parent()
                        .prev()
                        .find('img').css('transform', 'rotateY(0deg)') ;
                }
            })
        });
    // }


    // $(window).resize(function () {
    //     windowWidth = $(window).innerWidth();
    //     // console.log(windowWidth);
    // });
    $('#int-event').click(function(){
        // console.log('22');
        window.location.href="https://www.okex.com/about/rechargeProgressBarConfig/83.do?from=pcbanner"
    });
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        // console.log($(window).scrollTop());
        if(top >10) {
             $(".navbar").css('background-color','rgba(26, 26, 26,.8)');
        }
        if (top === 0) {
            $(".navbar").css('background-color','transparent');

        }
    });
});