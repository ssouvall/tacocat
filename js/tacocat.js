const tacoBtn = document.getElementById("tacoBtn");

function fadeOut() {
    gsap.to("#app-form", { display: "none", opacity: 0, duration: 1 })
};

function fadeIn() {
    gsap.to(".result", { display: "block", duration: 5, opacity: 1 })
};

tacoBtn.addEventListener('click', () => {
    const userInput = document.getElementById('tacoCat').value;
    let reverseWord = "";
    let tacoResult = document.getElementById('tacoResult');
    let comparedInput = userInput.replace(/[^a-z0-9]/gi,'');
    let finalInput = comparedInput.toLowerCase();
    let start = finalInput.length - 1;

    for (let i = start; i >= 0; i--) {
        reverseWord += finalInput[i]
    }

    if (finalInput == reverseWord) {
        tacoResult.innerHTML = `${userInput} is ${reverseWord} backwards. That's a Palindrome!`;
    } else {
        tacoResult.innerHTML = `${userInput} is ${reverseWord} backwards. That is not a Palindrome.`
    }
    fadeOut();
    fadeIn();
});



