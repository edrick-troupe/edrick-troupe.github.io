// Text transformation

const introText = document.querySelector(".intro_text");
let englishText = '<a href="https://github.com/edrick-troupe">You wanna know a secret ?</a>'
let greekText = '<a href="https://github.com/edrick-troupe">Θέλεις να μάθεις ένα μυστικό ?</a>'

introText.addEventListener("mouseover", englishVersion);

function englishVersion() {
    introText.innerHTML = "";
    introText.innerHTML += englishText;
}

introText.addEventListener("mouseout", greekVersion);

function greekVersion() {
    introText.innerHTML = "";
    introText.innerHTML += greekText;
}