const diceButtonElem = document.querySelector(".advice__dice");
const headingElem = document.querySelector(".advice__heading");
const quoteElem = document.querySelector(".advice__quote");

async function getData() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const jsonResult = await response.json();
    console.log(jsonResult);
    headingElem.innerText = "Advice # " + jsonResult.slip.id;
    quoteElem.innerText = `"${jsonResult.slip.advice}"`;
  } catch (error) {
    console.log(error);
  }
}

diceButtonElem.addEventListener("click", getData);
