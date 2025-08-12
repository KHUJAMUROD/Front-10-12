const answers = document.querySelectorAll(".answer");
answers.forEach((answer, index) =>{
    answer.addEventListener("click", () => {
        answers.forEach((otherAnswer) => {
            otherAnswer.style.backgroundColor = "#f0f0f0";
            otherAnswer.style.color = "#000";
        })

        answer.style.backgroundColor = "#007bff";
        answer.style.color = "#fff";


        let isCorectByIndex;

        if(index === 1){
            isCorectByIndex = true;
        }else {
            isCorectByIndex = false;
        }

        const resultElement = document.querySelector(".result");

        if(isCorectByIndex){
            resultElement.innerText = "Правильно!"
        }else {
            resultElement.innerText = "Не правильно"
        }
    });
});