// //////////////
// 1. Vanilla JS
// //////////////

// // Disabling a button // //
// click the button, disable it, the show the reset button
// 1. select the element(s)
// const clickMeBtn = document.querySelector("#click-me");
// const resetBtn = document.querySelector("#reset");
// 2. Add the event
// clickMeBtn.addEventListener("click", (event) => {
//   event.currentTarget.disabled = true;
//   resetBtn.classList.toggle("d-none");
// });
// // Clicking the reset // //
// enable the clickme, and hide the reset btn
// resetBtn.addEventListener("click", (event) => {
//   clickMeBtn.disabled = false;
//   event.currentTarget.classList.toggle("d-none");
// });

// //////////////
// 2. Stimulus 101
// //////////////
import { Application } from "@hotwired/stimulus";
window.Stimulus = Application.start();
// importing the class name from the file we just created
import DisableButtonController from "./controllers/disable_button_controller.js";
import MoviesController from "./controllers/movies_controller.js";
// tell Stimulus we want to use that class
// telling Stimulus, in our HTML we will call this controller "disable-button"
Stimulus.register("disable-button", DisableButtonController);
Stimulus.register("movies", MoviesController);

// C -> controller -> tell the JS which HTML we need /
// data-controller="name" (one controller per feature)
// A -> action -> replacing addEventListener
// data-action="event->controller-name#function"
// T -> target -> replacing querySelector. Telling our controller what it needs
// data-controller-name-target="name-of-target"

// data-disable-button-target="reset"

// Naming Conventions
// lower_snake_case -> filenames
// UpperCamelCase -> Class Names
// kebab-case -> HTML
