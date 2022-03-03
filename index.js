const generateAdviceButton = document.getElementById("generate-advice-btn");
const adviceNumber = document.getElementById("advice-number");
const adviceText = document.getElementById("advice-text");
const adviceURL = "https://api.adviceslip.com/advice";


generateAdviceButton.addEventListener("click", function() {
    fetch(adviceURL).then(response => response.json()).then(data => {
        adviceNumber.textContent = data.slip.id;
        adviceText.textContent = data.slip.advice;
    }).catch(() => {
        window.alert("There was an error accessing the land of advice! The advice elves are sorry.")
    });
})