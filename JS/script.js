// Text transformation

const introText = document.querySelector(".intro_text");
let newText = '<a href="https://github.com/edrick-troupe">You wanna know a secret ?</a>'

introText.addEventListener("mouseover", translate);

function translate() {
    introText.innerHTML = "";
    introText.innerHTML += newText;
}