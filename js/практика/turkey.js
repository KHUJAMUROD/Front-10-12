 
 const capitalInput = document.getElementsByClassName
 ('capitalInput')[0];
 
 const checkButton = document.getElementsByClassName
 ('checkButton')[0];

 const showResult = document.getElementById('resultBlock');

 checkButton.addEventListener('click', function(){
    let capital =   capitalInput.value.toLowerCase().trim();

    switch (capital) {
    case "стамбул":
    showResult.innerHTML = "крупый город но не столица";
    showResult.style.backgroundColor = "red";
        break;
    case "анталия":
    showResult.innerHTML = "это туристическое центр но не столица";
    showResult.style.backgroundColor = "red";
        break;
    case "анкара":
    showResult.innerHTML = "верно";
    showResult.style.backgroundColor = "green";
        break;
        default:
    showResult.innerHTML = "ну это вряд ли";
    showResult.style.backgroundColor = "red";
    break;  
 }
 })
 
 

