;(function (designWidth){
  var size = (window.innerWidth || document.documentElement.clientWidth) / designWidth * 100;
  //if(size>=75) size=75;
  document.documentElement.style.fontSize = size + "px";
  document.body.style.fontSize = "12px";})(750);
