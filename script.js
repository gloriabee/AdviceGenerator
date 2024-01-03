let advice=document.getElementById("advice");
let btn=document.getElementById("generate-btn");

//the options used in api requests
let options={
    method:"GET",
    headers:{"x-api-key": apiKey },
    
};

let url="https://api.api-ninjas.com/v1/quotes?category";

let generateAdvice= () => {
    fetch(url,options)
    .then((response) => response.json())
    .then((data) => {
       console.log(data[0].quote);
       advice.innerText=data[0].quote;
    });
    
}

btn.addEventListener("click",generateAdvice);
window.addEventListener("load",generateAdvice);