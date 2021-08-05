var listitems=$(".service-container li");
var image=$(".service-group");
var colorchange=$(".menu-items");
var text=$(".service-box");
var left=$(".menu-items");
var toggle=$(".toggle");
var video=$(".video-bg");
// video.mouseover(function(){
//   colorchange.css({"width":"0",
// "opacity":"0"});
// });
// video.mouseout(function(){
//   colorchange.css({"width":"25%",
// "opacity":"1"});
// });
listitems.click(function(){
  removeactive();
  removelistactive();
if($("#toggle").is(":checked")==true){
  $("#toggle").click();

}
console.log($(this).index()+".mp4");
video.attr("src",$(this).index()+".mp4");
  // image.css("background-image","url('images/"+$(this).index()+".jpg')");
  listitems.eq($(this).index()).addClass("active");


  text.eq($(this).index()).addClass("active");
});
function removeactive(){
  text.removeClass("active");
}
function removelistactive(){
  listitems.removeClass("active");
}
left.mouseenter(function(){
  left.addClass("left-hover");
});
left.mouseleave(function(){
  left.removeClass("left-hover");
});

toggle.change(function(){
  colorchange.toggleClass("dark");
// $(".video-bg")[0].play();
});

function check(){
  if($("#toggle").is(':checked')==false){
$(".video-bg")[0].pause();
video.mouseover(function(){
  colorchange.css({"width":"25%",
"opacity":"1"});
});
video.mouseout(function(){
  colorchange.css({"width":"25%",
"opacity":"1"});
});

  }
  else{
    $(".video-bg")[0].play();
    video.mouseover(function(){
      colorchange.css({"width":"0",
    "opacity":"0"});
    });
    video.mouseout(function(){
      colorchange.css({"width":"25%",
    "opacity":"1"});
    });
  }
}

function end(){
  $("#toggle").click();

  

    colorchange.css({"width":"25%",
  "opacity":"1"});


}
