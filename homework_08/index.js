//find first button by id
const btn = document.getElementById("magic-btn");
console.log(btn);

const cloneBtn = btn.cloneNode(true);  
cloneBtn.id = "magic-btn-2";

btn.addEventListener("click", () => {
    cloneBtn.textContent = "Я изменю тебя";
    cloneBtn.style.backgroundColor = "#a78b71"; 
    cloneBtn.style.color = "white";
    document.body.appendChild(cloneBtn);
});

console.log(cloneBtn);

cloneBtn.addEventListener("click", () => {
    btn.style.color = "black";
    btn.style.backgroundColor = "#9c4a1a"
})