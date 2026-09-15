const tents = [];

fetch("/json/tents.js")
  .then((r) => r.json())
  .then((data) => console.log(data));
