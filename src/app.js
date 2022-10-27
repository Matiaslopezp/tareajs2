/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var dom = [".com", ".cl"];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let w = 0; w < noun.length; w++) {
        for (let h = 0; h < dom.length; h++) {
          console.log(pronoun[i] + adj[j] + noun[w] + dom[h]);
        }
      }
    }
  }
};
