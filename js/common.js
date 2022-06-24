let num = 0;
let liLength = $("#sliderList li").length;
let pos1 = -(liLength-1) * 100
let pos2 = -(liLength-2) * 100
let state = 1;
let btnPos;

$(window).on("load",function(){
  $("#doramatit").delay(2000).animate({ opacity:0 },1000).animate({"height":"0"},0)
  $(".doramatit1").delay(100).animate({ opacity: 1 },1000)
  $(".doramatit2").delay(700).animate({ opacity: 1 },1000)
})


function nextSlider() {
  state = 0;
  num++;
  if ( num == liLength ) {
    num = 0;
    $("#sliderList").append($(".slider1"))
                    .css({ marginLeft: pos2 + "%" })
                    .animate({ marginLeft: pos1 + "%" },function() {
                      for (n=1; n<liLength+1; n++) {
                        $("#sliderList").append($(".slider"+n))
                      }
                      $("#sliderList").css({ marginLeft: 0 })
                      state = 1;
                    })
  } else {
    $("#sliderList").animate({ marginLeft: "-=100%" }, function() {
      state = 1;
    })
  }
  $(".Btn ul li").removeClass('on')
  $(".Btn ul li:eq("+ num +")").addClass('on')
}
function autoSlider() {
  nextSlider()
}
let timer = setInterval(autoSlider, 3000)

$(".Btn ul li").on("click", function(){
  $(".Btn ul li").removeClass('on')
  $(this).addClass('on');
  num = $(this).index()
  btnpos = num * (-100) + "%"
  $("#sliderList").animate({ marginLeft: btnpos })
  clearInterval(timer);
  timer = setInterval(autoSlider, 3000)
})

$(".ch1 a").on("click", function(e){
  e.preventDefault();
  $(".cha li").removeClass("an")
  $(".ch1").addClass("an")
  $(".chImg").css({ display: "none" })
  $(".chImg1").css({ display: "block" })
})
$(".ch2 a").on("click", function(e){
  e.preventDefault();
  $(".cha li").removeClass("an")
  $(".ch2").addClass("an")
  $(".chImg").css({ display: "none" })
  $(".chImg2").css({ display: "block" })
})
$(".ch3 a").on("click", function(e){
  e.preventDefault();
  $(".cha li").removeClass("an")
  $(".ch3").addClass("an")
  $(".chImg").css({ display: "none" })
  $(".chImg3").css({ display: "block" })
})

let menu2 = 1;
$(".subHeadUl2 h1").on("click",function(e){
  e.preventDefault();
  if( menu2 == 1 ) {
    $(".subUl2").animate({ left:"0" })
    menu2 = 0;
  } else if ( menu2 == 0 ) {
    $(".subUl2").animate({ left: "-71%" })
    menu2 = 1;
  }
})
