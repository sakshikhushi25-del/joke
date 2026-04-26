let body = document.body;

let btn = document.createElement("button");
btn.innerText = "generate a joke";
body.append(btn);

let joke = document.createElement("p");
body.append(joke);

body.style.textAlign = "center";
body.style.marginTop = "50px";
btn.style.backgroundColor = "orange";
body.style.backgroundColor = "skyblue"

btn.addEventListener("click", joking);
async function joking() {
    let link = await fetch("https://official-joke-api.appspot.com/random_joke");
    let a = await link.json();
    joke.innerText = a.setup+ " - " +a.punchline;
}