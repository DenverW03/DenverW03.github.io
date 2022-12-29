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

var c1 = document.getElementById("circle1");
var c2 = document.getElementById("circle2");

//init
function init(){
  e1.style.visibility = "visible"
  e2.style.visibility = "hidden"
}

//used to increment visibility of info sections
function switchVisible(identifier){
  c1.classList.remove("circle-indicator-active")
  c2.classList.remove("circle-indicator-active")
  switch(identifier){
    case 1:
      c1.classList.add("circle-indicator-active")
      e1.style.visibility = "visible";
      e2.style.visibility = "hidden";
      break;
    case 2:
      c2.classList.add("circle-indicator-active")
      e1.style.visibility = "hidden";
      e2.style.visibility = "visible";
      break;
    case 3:
      break;
    case 4:
      break;
  }
}