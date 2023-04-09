//2:02:53// untill 2:07:00
const answer = Math.floor(Math.random()*10 + 1);
let guesses = 0;
document.getElementById("submitBtn").onclick = function(){
    let guess = document.getElementById("guessField").value;
    guesses+=1;
    if(guess == answer){
        alert(`${answer} to'g'ri javob.Sen ${guesses} marta urinishda topding.`);
    }else if(guess < answer){
        alert("Juda kichik!");
    }else {
        alert("Juda katta!")
    }
}