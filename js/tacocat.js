const tacoBtn = document.getElementById("tacoBtn");
//add event listener to button

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
        tacoResult.innerHTML = `${userInput} is ${reverseWord} backwards. That's a Pallindrome!`;
    } else {
        tacoResult.innerHTML = `${userInput} is ${reverseWord} backwards. That is not a Pallindrome.`
    }
});