// List of card prompts
const cards = [
    "Give your partner a massage for 5 minutes",
    "Whisper something naughty in your partner's ear",
    "Perform a strip tease for your partner",
    "Tell your partner three things you love about them",
    "Tease your partner for 2 minutes without touching them"
];

// Timer variables
let timerInterval;

// Function to pick a random card
function pickCard() {
    const cardBack = document.getElementById("card-back");
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    cardBack.innerHTML = randomCard;

    // Add the 'flip' class to activate the flip animation
    const cardContainer = document.querySelector(".card-container");
    cardContainer.classList.add("flip");

    // Reset the flip after 30 seconds (for repeatable card picks)
    setTimeout(() => {
        cardContainer.classList.remove("flip");
    }, 30000);
}

// Function to show Kama Sutra image
function showKamaSutra() {
    const kamaSutraImage = document.getElementById("kamaSutraImage");
    kamaSutraImage.style.display = "block";
}

// Function to close Kama Sutra image
function closeKamaSutra() {
    const kamaSutraImage = document.getElementById("kamaSutraImage");
    kamaSutraImage.style.display = "none";
}

// Timer function
function startTimer(minutes) {
    clearInterval(timerInterval);
    let time = minutes * 60;
    const timerDisplay = document.getElementById("timer-display");

    timerInterval = setInterval(() => {
        let minutesLeft = Math.floor(time / 60);
        let secondsLeft = time % 60;
        timerDisplay.innerHTML = `${String(minutesLeft).padStart(2, '0')}:${String(secondsLeft).padStart(2, '0')}`;
        time--;

        if (time < 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}
