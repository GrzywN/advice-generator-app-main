const diceButton = document.querySelector(".advice__dice");
const heading = document.querySelector(".advice__heading");
const quote = document.querySelector(".advice__quote");

async function getData() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice", {
      cache: "no-cache",
    });
    const data = await response.json();
    heading.innerText = `Advice # ${data.slip.id}`;
    quote.innerText = `"${data.slip.advice}"`;
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener("load", getData);
diceButton.addEventListener("click", getData);
