$(document).ready(function(){
    //JS FOR MOUSE TO PICTURE
    $("div.row > ul > li").mouseenter(function(){
        // $(this).children("img").finish().animate({ //.find("img")
        //     opacity: '0.2'
        // },1000);
        $(this).children("div.info").finish().fadeOut("slow");
        $(this).children("div.back").finish().fadeIn("slow");
    }).mouseleave(function(){
        // $(this).find("img").finish().animate({ //
        //     opacity: "1",
        // },500);
        $(this).children("div.info").finish().fadeIn();
        $(this).children("div.back").finish().fadeOut();
    });
    //JS FOR IMG LOGO
    $(function() {   
        function loop(){
            var a =parseInt(Math.random()*100);
            var b =parseInt(Math.random()*100);
            $("div.left>a>img")
                .animate({
                    'border-top-left-radius': a,
				    'border-bottom-right-radius': b,
                    'border-top-right-radius': a,
                    'border-bottom-left-radius': b
                },1000)
                .animate({
                    'border-top-left-radius': a-b,
				    'border-bottom-right-radius': a,
                    'border-top-right-radius': b-a,
                    'border-bottom-left-radius': b
                },1000, loop);
            }
        
        loop();
    }); 
    
    //JS FOR TAB
    $("div.color>div.row> ul:not(:first-child)").hide();
    $("div.dayinner>ul>li:first").css('background-color','#e9ec2acb'); //ok
    $("div.dayinner>ul>li:not(:last-child)").click(function () {
        event.preventDefault();
        $("div.dayinner>ul>li").css('background-color','#00000000');
        $(this).css('background-color','#e9ec2acb');
        var hash = $(this).children("a").attr("href");
        $("div.color>div.row> ul").hide();
        $(hash).show();
    });

    //JS FOR GO TO TOP
    $("div.gototop>i").hide();
    $(window).scroll(function () {
        if ($("html, body").scrollTop()>100)
            $("div.gototop>i").show("slow")
        else
            $("div.gototop>i").hide("slow")  //trar ve tinhs khoangr cach tu vi tri truot den dau trang
    });
    $("div.gototop > i").click(function () {
        $("html,body").animate({scrollTop: 0}, 1200);
    });

    //JS FOR TO GO NEW AND GO TO TRENDING
    $("div.left > ul.main-menu > li > a").click(function () {
        var a= $(this).text();
        if(a=="new" || a=="trending")
        {
            var b;
            switch (a) {
                case "new":
                    b=1150;
                    break;
                case "trending":
                    b=1450;
                    break;
                default:
                    break;
            }
            $("html,body").animate({scrollTop: b}, 1200);
        }
    });
    //JS FOR BUTTON LEFT AND RIGHT
    $("div.new>div.row>i:first-child").click(function () {
        $(this).siblings("ul").toggleClass( "ul-none");
    });
    $("div.new>div.row>i:last-child").click(function () {
        $(this).siblings("ul").toggleClass("ul-none");
    });
    //JS FOR BACKGROUND OF DAYLY BAR ON OR OFF (MORE.HTML)
    $(window).scroll(function () {
        if ($("html, body").scrollTop()>100)
        {
            $("div.body-more>div.row>div>h2").css({
                'background-color': 'rgb(255, 205, 255, 0.9)'                
            })
        }
        else
            $("div.body-more>div.row>div>h2").css({
                'background-color': 'rgb(255, 205, 255, 0)'
            })  //trar ve tinhs khoangr cach tu vi tri truot den dau trang
    });

    //JS FOR ADD IMAGES TO SUBZERO_1.HTML
    function subzero_1(obj) {
        var linkAnh='';
        for (let i = 1; i < 94; i++) {
            linkAnh='SubZero-'+i;
            $("div.body-truyen > div.anh").append(
                "<img src='images/anhtruyen/truyen/tap "+obj+"/"+linkAnh+".jpg' alt='"+ i +"'>"
            );
        }
    };

    //JS FOR ADD IMAGES TO SUBZERO.HTML
    $.subzero = function(){
        var linkAnh='';
        for (let i = 4; i < 21; i++) {
            linkAnh='SubZero-'+i;
            $("div.both > div.left").append(
                "<a href='SubZero_1.html'>" +
                    "<div class='sotap flex'>" +
                        "<img src='images/anhtruyen/tap/"+ linkAnh +".png' alt='"+ i +"'>" +
                        "<h3 class='tap'>Episode "+ i +"</h3>" +
                        "<p class='date'>Aug 5, 2019</p>" +
                        "<i class='far fa-heart'></i>" +
                        "<span class='like'>1,542,552</span>" +
                    "</div>" +
                "</a>"
            );
        }
    };
    //JS FOR SEARCH
    $("div.menu-bar > div.right > div:nth-child(3)").click( function () {
        $(this).siblings("div.search-input").css(
            "display", "block"
        ).toggleClass("animated")
    });
    $("div.menu-bar > div.right > div.search-input > p").click( function () {
        $(this).parent().css(
            "display", "none"
        ).toggleClass("animated")
    });
    $("div.right > div.search-input > input").focusout(function () {
        $("div.menu-bar > div.right > div.search-input").hide();
    });
    $("div.right > div.login").focusout(function () {
        $("div.right > div.login").hide();
    });
    // $(function () {
    //     var color = '';
    //     var a = $("p.type");
    //     var text;
    //     for (i = 0; i < a.length; i++) {
    //         var abc = a[i].innerText;
    //         switch (abc) {
    //             case "Romance":
    //                 color = "#f026e6"
    //                 break;
    //             case "Comedy":
    //                 color = "#60d141"
    //                 break;
    //             case "Thriller":
    //                 color = "#cad141"
    //                 break;
    //             case "Slice of life":
    //                 color = "#36b8cc"
    //                 break;
    //             case "Fantasy":
    //                 color = "#5060cc"
    //                 break;
    //             case "Action":
    //                 color = "#cc506b"
    //                 break;
    //             case "Drama":
    //                 color = "#d1a341"
    //                 break;
    //         }
    //         $(a[i]).parent().parent().css("background-color", color);
    //         $(a[i]).css("color", color)
    //     }
    // })
    //JS FOR LOGIN
    $("div.right>div.login").hide();
    $("input#log_in").click(function(){
        $(this).parent().siblings("div.login").slideDown("slow")
    });
    $(".close").click(function(){
        $("div.right>div.login").hide("slow");
    });
    $("input[type='submit']").click(function(){
        var a = $("div.type>input");
        var kt=true;
        for (i=0; i<a.length; i++)
        {
            if(a[i].val == '')
                kq=false;
        }
        if(kq)
            $("div.right>div.login").hide("slow");
    })
    var a =0;
    var opa, ro = 1, vt, direc=1;
    $(window).scroll(function () {
        opa=vt+1;
        if (a > $(document).scrollTop())
            ro=ro+4;
        else
            ro=ro-4;
        a = $(document).scrollTop();
        
        getpic=$("div.de1>img");
        for(i=0; i<getpic.length;i++)
        {
            direc=1;
            if(i%2==0)
            {
                direc=-1;
            }
            changeTransform(getpic[i], opa, ro*direc);
        }        
    });
});
function changeTransform(params, opa, ro) {
    params.style.transform = "rotate("+ro+"deg)";
}
function scales(params, x, s) {
    
    params.style.transform="scale("+x+")";
}
function subzero_1(obj) {
    var linkAnh = '';
    for (let i = 1; i < 11; i++) {
        linkAnh = 'SubZero-' + i;
        $("div.body-truyen > div.anh").append(
            "<img src='images/anhtruyen/truyen/tap" + obj + "/" + linkAnh + ".jpg' alt='" + i + "'>"
        );
    }
};
//JS FOR AUTO FILL
function auto_fill(obj) {
    var kt='';
    inner = $(obj).val();
    inner = inner.toLowerCase();
    var list = document.querySelectorAll("div.info>h3");
    $("div.right > div.search-input > ul.hint").css('display', 'none')
    $("div.right > div.search-input > ul.hint >li").remove();
    $("div.right > div.search-input > input").css({
        'border-bottom': '2px double black',
        'border-radius': '15px'

    });
    if(inner!='')
    {
        for(i=0; i<list.length;i++) {
            h3=list[i].innerText;
            if ((h3.toLowerCase()).indexOf(inner)>=0) {
                if (kt.indexOf(h3) < 0)
                {
                    $("div.right > div.search-input > ul.hint").append(
                        "<li>"+
                            "<a href='"+ ($(list[i]).parent().siblings("a").attr("href")) + "'>"+ h3+"</a>"+
                        "</li>"
                    )
                    kt=kt+h3;
                }
                $("div.right > div.search-input > ul.hint").css('display', 'block')
                $("div.right > div.search-input > input").css({
                    'border-bottom': 'none',
                    'border-radius': '15px 15px 0px 0px'
                });
            }
        }
    }
    
    
};


function subzeroo(obj) {
    var folder = "images/anhtruyen/truyen/tap" + obj;
    $.ajax({
        url: folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if (val.match(".jpg")) {
                    $("div.body-truyen > div.anh").append("<img src='" + val + "' alt='" + (i - 5) + "'>");
                }
            });
        }
    });
    var a = document.querySelectorAll("div.head > div.mid > a");
    for (i = 0; i < a.length; i++) {
        if (a[i].getAttribute('href') == '#nothing') {
            a[i].firstChild.style.color = '#debdfa8f';
        }
    }
};
var count=2;
function khoidong() {
    var the = document.querySelectorAll("div.banner-inner>img")[0];
    setInterval(function(){
        $(the).animate({ opacity: "1"}, 700)
        setTimeout(function () {
            $(the).animate({opacity: "0.5"}, 700)
            if(count==5)
                count=1;
            var lin = "images/Banner"+count+".png";
            count=count+1;
            setTimeout( function(){
                the.src=lin;
            }, 700)
        }, 3700)
    }, 4400);
    abc();
}

function abc() {
    var color = '';
    var a = document.querySelectorAll("p.type");
    var text;
    for (i = 0; i < a.length; i++) {
        var abc = a[i].innerText;
        switch (abc) {
            case "Romance":
                color = "#f026e6"
                break;
            case "Comedy":
                color = "#60d141"
                break;
            case "Thriller":
                color = "#cad141"
                break;
            case "Slice of life":
                color = "#36b8cc"
                break;
            case "Fantasy":
                color = "#5060cc"
                break;
            case "Action":
                color = "#cc506b"
                break;
            case "Drama":
                color = "#d1a341"
                break;
        }
        (a[i]).parentElement.parentElement.style.backgroundColor=color;
        (a[i]).style.color = color;
    }
}