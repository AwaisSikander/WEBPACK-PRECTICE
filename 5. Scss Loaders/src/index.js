import style from "./index.css";

import "./clearButton";
import _ from "lodash";

import logo from './assets/webpack_logo.png';

const btn1 = document.getElementById("button1");
const logoEL = document.getElementById("logo");
btn1.addEventListener("click", function () {
  const el = document.getElementById("header");
  el.innerHTML = "Hey i have updated the code !";

  const listItems = ["Apple", "orange", "Banana"];
  const ul = document.getElementById("shoppingList");
  _.forEach(listItems, function (item) {
    const tempEl = document.createElement("li");
    tempEl.innerHTML = item;
    ul.appendChild(tempEl);
  });
});
logoEL.src = logo
btn1.classList.add(['button']);
// btn1.classList.add([style.button]);
