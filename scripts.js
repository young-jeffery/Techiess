// scripts.js

document.addEventListener("DOMContentLoaded", function () {
  // Set the time (in milliseconds) for how long the initial message will be displayed
  const displayTime = 8000; // 8 seconds

  // Get the element
  const mainContent = document.getElementById("main-content");
  const initialMessage = document.getElementById("initial-message");

  setTimeout(function () {
    // Hide the initial message
    initialMessage.classList.add("hidden");
    // Show the main content
    mainContent.classList.remove("hidden");
    mainContent.classList.add('mainHub')
  }, displayTime);
});

// scripts.js

document.addEventListener("DOMContentLoaded", function () {
  // Set the time (in milliseconds) after which the second animation will start
  const delayTime = 5000; // 5 seconds

  // Get all elements with the class 'animated'
  const animatedElements = document.querySelectorAll(".animated");

  // Set a timeout to replace classes for each element
  setTimeout(function () {
    animatedElements.forEach(function (element) {
      if (element.classList.contains("message")) {
        element.classList.remove("message");
        element.classList.add("messageEnd");
      } else if (element.classList.contains("line")) {
        element.classList.remove("line");
        element.classList.add("lineRetract");
      } else if (element.classList.contains("slogan")) {
        element.classList.remove("slogan");
        element.classList.add("sloganEnd");
      }
    });
  }, delayTime);
});
