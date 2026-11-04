// require 'controller'
import { Controller } from "@hotwired/stimulus";

// defining the class -> based on the name of the file
// class DisableButtonController
export default class extends Controller {
  // need to declare your targets at the top
  static targets = ["clickme", "reset", "card"];
  static values = {
    paul: String,
  };
  // connect is given to us (aka our intialize)
  // this function runs when our JS sees the controller in the HTML
  // data-controller="disable-button"
  connect() {
    // i want to see the clickme button -> no longer querySelecting
    // this.nameTarget
    // console.log(this.clickmeTarget);
    // console.log(this.resetTarget);
    // this will give me the HTML where the data-controller lives
    // console.log(this.element);
    // to access the value
    // console.log(this.paulValue);
  }

  disable(event) {
    event.currentTarget.disabled = true;
    this.resetTarget.classList.toggle("d-none");
  }

  enable(event) {
    this.clickmeTarget.disabled = false;
    event.currentTarget.classList.toggle("d-none");
  }
}
