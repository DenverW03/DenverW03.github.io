document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
}

var e1 = document.getElementById("main");
var e2 = document.getElementById("pricing");
//var e3 = document.getElementById("example");
var e4 = document.getElementById("contact");

var c1 = document.getElementById("circle1");
var c2 = document.getElementById("circle2");
//var c3 = document.getElementById("circle3");
var c4 = document.getElementById("circle4");

//init
function init(){
  e1.style.visibility = "visible";
  e2.style.visibility = "hidden";
  //e3.style.visibility = "hidden";
  e4.style.visibility = "hidden";
}

//used to increment visibility of info sections
function switchVisible(identifier){
  c1.classList.remove("circle-indicator-active");
  c2.classList.remove("circle-indicator-active");
  //c3.classList.remove("circle-indicator-active");
  c4.classList.remove("circle-indicator-active");
  switch(identifier){
    case 1:
      c1.classList.add("circle-indicator-active");
      e1.style.visibility = "visible";
      e2.style.visibility = "hidden";
      //e3.style.visibility = "hidden";
      e4.style.visibility = "hidden";
      break;
    case 2:
      c2.classList.add("circle-indicator-active");
      e1.style.visibility = "hidden";
      e2.style.visibility = "visible";
      //e3.style.visibility = "hidden";
      e4.style.visibility = "hidden";
      break;
    /*case 3:
      c3.classList.add("circle-indicator-active");
      e1.style.visibility = "hidden";
      e2.style.visibility = "hidden";
      e3.style.visibility = "visible";
      e4.style.visibility = "hidden";
      break;*/
    case 4:
      c4.classList.add("circle-indicator-active");
      e1.style.visibility = "hidden";
      e2.style.visibility = "hidden";
      //e3.style.visibility = "hidden";
      e4.style.visibility = "visible";
      break;
  }
}