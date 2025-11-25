import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
  let pronouns = ["the", "our", "another"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let tlds = [".com", ".net", ".org"];

  for (const pronoun of pronouns) {
    for (const adj of adjs) { 
      for (const noun of nouns) {
        for (const tld of tlds) {
          console.log(pronoun + adj + noun + tld);

        }
      }
    }
  }
};
