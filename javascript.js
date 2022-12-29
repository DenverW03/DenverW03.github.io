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
//init
function init(){
  e1.style.visibility = "visible"
  e2.style.visibility = "hidden"
}

//used to increment visibility of info sections
function switchVisible(){
  if(e2.style.visibility == "hidden"){
    e1.style.visibility = "hidden";
    e2.style.visibility = "visible";
  }
}