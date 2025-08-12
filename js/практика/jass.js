let temp = 20;

const tempEl = document.getElementById("temperature");
const loaderEl = document.getElementById("loader");

tempEl.textContent = (temp && `температура: ${temp} градусов` || 'данные загружаются');

if(temp){
    loaderEl.style.display = 'none';
}else{
    loaderEl.style.display = "block";
}