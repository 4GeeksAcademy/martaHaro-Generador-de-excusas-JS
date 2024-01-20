import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  //write your code here
  let who = ["the bird", "my hamster", "my bike", "a lion"];
  let action = ["ate", "hid", "was", "sat"];
  let what = ["my homework", "the mobile", "on fire", "outside my door"];
  let when = [
    "before the class",
    "when you called me",
    "while it was raining",
    "when I was about to leave"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);
  document.querySelector("#excuse").innerHTML =
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex];
};
