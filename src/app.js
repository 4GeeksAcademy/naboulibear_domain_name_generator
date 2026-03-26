
document.addEventListener("DOMContentLoaded", function() {
 
  let pronoun = ["the", "our", "another"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".org"];

 function generateDomains() {
    let results = [];
    for (let p of pronoun) {
      for (let a of adj) {
        for (let n of noun) {
          for (let ext of extensions) {
            results.push(`${p}${a}${n}${ext}`);
            if (n.endsWith(ext.replace(".", ""))) {
              let hackedDomain = `${p}${a}${n.slice(0, -ext.length + 1)}${ext}`;
              results.push(hackedDomain);
            }
          }
        }
      }
    }
    let output = results.map(domain => `<p>${domain}</p>`).join("");
    document.getElementById("domainResults").innerHTML = output;
  }

  window.generateDomains = generateDomains;
});
