$(document).ready(function(){
    $("span.banner>img").animate({
        "color": "darkred"
    }, 1000);

    $("ul.tab > li:first-child").css("background-color", "#95fc83");
    $("ul.tab>li").click(function(){
        event.preventDefault();
        var hash = $(this).children("a").attr("href");
        $("ul.tab>li").css("background-color", "white");
        $(this).css("background-color", "#95fc83");
        $(".feature-inner>div.wrap>ul.underfeature").addClass("none-wrap");
        $(hash).removeClass("none-wrap");
    })
    $("div.gototop>button").hide();
    $(window).scroll(function () {
        if ($("html, body").scrollTop()>100)
            $("div.gototop>button").show("slow")
        else
            $("div.gototop>button").hide("slow")  //trar ve tinhs khoangr cach tu vi tri truot den dau trang
    });
    $("div.gototop > button").click(function () {
        $("html,body").animate({scrollTop: 0}, 1200);
    });
    $("li.lm_3").click(function () {
        $("html,body").animate({scrollTop: 875}, 1000);
    });
    $("li.lm_4").click(function () {
        $("html,body").animate({scrollTop: 2125}, 1000);
    });
    $("li.lm_2").click(function () {
        $("html,body").animate({scrollTop: 570}, 1000);
    });
    $("li.lm_5").click(function () {
        $("html,body").animate({scrollTop: 1150}, 1000);
    });
    $(function(){

      var color='';
      var a= $("p.type");
      var abc;
      for(i=0; i<a.length;i++)
      {

        var abc=a[i].innerText;

        switch (abc) {
          case "Game":
          color="#f50f3d"
          break;
          case "Art":
          color="#247ae3"
          break;
          case "Comic":
          color="#c8eb1a"
          break;
          case "Photo":
          color="#28c726"
          break;

        }
        $(a[i]).parent().parent().css("background-color", color)
      }
    })
    $("div.search_bar").hide();
    $("div.search_bar>input").blur(function(){
      $("div.search_bar").hide();
    })
    $("a.search_btn").click(function(){
      $("div.search_bar").slideDown();
    });

    $("div.back").hide();
    $("ul.underfeature>li").mouseenter(function(){
        $(this).children("a").children("div.back").show();
        $(this).children("a").children("div.info").hide();
        $(this).children("a").children("img").animate({"opacity": "0.2"},200);


    }).mouseleave(function(){
      $(this).children("a").children("div.back").hide();
      $(this).children("a").children("div.info").show();
      $(this).children("a").children("img").animate({"opacity": "1.0"},200);

    })

    $(function() {
      function loop(){
        var a =parseInt(Math.random()*1000);
        var b =parseInt(Math.random()*1000);
        $("div.web-hau > a > img")
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

});



function auto_fill(obj) {
  $("#searchId").css({
    "border-radius": "15px"
  })
  $("div.search_bar > ul").css('display', 'none')
    $("div.search_bar > ul >li").remove();
    $("#searchId").css({
        'border-bottom': '2px double black',
        'border-radius': '15px'});

  $("div.search_bar > ul").hide();
  var text = $(obj).val();
  var kt='';
  $(obj).siblings("ul").children().remove();
  var titl = $("div.info>h3");
  if(text!=''){

      for(i=0; i<titl.length; i++)
      {
        var ten = titl[i].innerText;

        if(ten.indexOf(text)>=0)
        {
          if (kt.indexOf(ten) < 0)
          {
            $("div.search_bar>ul").append(
              "<li>"+
                "<a href='"+ ($(titl[i]).parent().parent().attr("href")) + "'>"+ ten +"</a>"+
              "</li>"
            )
            kt=kt+ten;
            $("#searchId").css({
              "border-radius": "15px 15px 0 0",

              "border-bottom": "none"});
              $("div.search_bar > ul").css('display', 'block')
                  $("#searchId").css({
                      'border-bottom': 'none',
                      'border-radius': '15px 15px 0px 0px'
                  });
            }
          }
        }
      }
  }
