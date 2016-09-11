require("./css/styles.scss");

import "ScrollToPlugin";
import Draggable from "Draggable";

Draggable.create("p");

var section1Btn = document.getElementById("section1Btn");
var section2Btn = document.getElementById("section2Btn");
var section3Btn = document.getElementById("section3Btn");

section1Btn.onclick = function() {
  TweenLite.to(window, 1, {scrollTo:{y:"#section1", offsetY:70}});
}

section2Btn.onclick = function() {
  TweenLite.to(window, 1, {scrollTo:{y:"#section2", offsetY:70}});
}

section3Btn.onclick = function() {
  TweenLite.to(window, 1, {scrollTo:{y:"#section3", offsetY:70}});
}