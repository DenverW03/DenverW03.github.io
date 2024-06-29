// Getting the navigation elements
const aboutButton = document.getElementById("about-button");
const workButton = document.getElementById("work-button");
const projectButton = document.getElementById("project-button");

// Adding the click functionality
aboutButton.addEventListener("click", function () {
  window.location.href = "about.html";
});

workButton.addEventListener("click", function () {
  window.location.href = "work.html";
});

projectButton.addEventListener("click", function () {
  window.location.href = "projects.html";
});
