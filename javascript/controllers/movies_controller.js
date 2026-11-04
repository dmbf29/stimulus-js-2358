// require 'controller'
import { Controller } from "@hotwired/stimulus";

// defining the class -> based on the name of the file
// class MoviesController
export default class extends Controller {
  static targets = ["form", "input", "list"];
  // data-controller="movies"
  connect() {
    console.log(this.formTarget);
  }

  async search(event) {
    event.preventDefault();
    const keyword = this.inputTarget.value;
    const url = `https://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`;
    const response = await fetch(url);
    const data = await response.json();
    this.listTarget.innerHTML = "";
    data.Search.forEach((movie) => {
      const li = `
        <li class='col'>
          <img src='${movie.Poster}'>
          <p>${movie.Title}</p>
        </li>
        `;
      this.listTarget.insertAdjacentHTML("beforeend", li);
    });
  }
}
