// Text transformation

const introText = document.querySelector(".intro_link");
let englishText = "You wanna know a secret ?";
let greekText = "Θέλεις να μάθεις ένα μυστικό ?";

introText.addEventListener("mouseover", englishVersion);

function englishVersion() {
    introText.textContent = "";
    introText.textContent += englishText;
}

introText.addEventListener("mouseout", greekVersion);

function greekVersion() {
    introText.textContent = "";
    introText.textContent += greekText;
}