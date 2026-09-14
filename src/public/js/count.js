const header = document.querySelector("h1");
const startBtn = document.querySelector("#start");
const input = document.querySelector("#inputCount");
let count = 10;
input.addEventListener("change", (e) => (count = input.value));
const timer = () => {
  header.innerText = count;
  if (count >= 1) {
    count--;
  }
  if (count === 0) {
    setTimeout(() => alert("Time's up!"), 1000);
  }
};
startBtn.addEventListener("click", () => {
  setInterval(timer, 1000);
});
