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
function switchVisible(identifier){
  switch(identifier){
    case 1:
      e1.style.visibility = "visible";
      e2.style.visibility = "hidden";
      break;
    case 2:
      e1.style.visibility = "hidden";
      e2.style.visibility = "visible";
      break;
    case 3:
      break;
    case 4:
      break;
  }
}