let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let value = document.getElementById("value");

let count = 0;

increase.onclick = () => {
    count++ ;
    value.textContent = count ;
    value.style.color = "purple" ; 
}

decrease.onclick = () => {
    count-- ;
    value.textContent = count ;
    value.style.color = "red" ;
}

reset.onclick = () => {
    count = 0;
    value.textContent = count ;
    value.style.color = "black" ; 

}