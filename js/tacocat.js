const tacoBtn = document.getElementById("tacoBtn");

tacoBtn.addEventListener('click', () => {
    const userInput = document.getElementById('tacoCat').value;
    let reverseWord = "";
    let tacoResult = document.getElementById('tacoResult');
    let comparedInput = userInput.replace(/[^a-z0-9]/gi, '');
    let finalInput = comparedInput.toLowerCase();
    let start = finalInput.length - 1;

    for (let i = start; i >= 0; i--) {
        reverseWord += finalInput[i]
    }

    if (finalInput == reverseWord) {
        // tacoResult.innerHTML = `${userInput} is ${reverseWord} backwards. That's a Palindrome!`;
        Swal.fire({
            title: 'That\'s a Palindrome!',
            text: `${userInput} is ${reverseWord} backwards. That's a Palindrome!`,
            width: 600,
            padding: '3em',
            background: '#fff',
            backdrop: `
                rgba(0,0,123,0.4)
                url("//media.giphy.com/media/sIfLhexLUqwik/giphy.gif")
                left top
                no-repeat
                `
        })
    } else {
        // tacoResult.innerHTML = `${userInput} is ${reverseWord} backwards. That is not a Palindrome.`
        Swal.fire({
            title: 'That\'s not a Palindrome.',
            text: `${userInput} is ${reverseWord} backwards. That's not a Palindrome.`,
            width: 600,
            padding: '3em',
            background: '#fff',
            backdrop: `
                rgba(0,0,123,0.4)
                url("//media.giphy.com/media/vPN3zK9dNL236/giphy.gif")
                left top
                no-repeat
                `
        })
    }
});