let coins = 0;
const coinDisplay = document.getElementById("coins");
const tapBtn = document.getElementById("tapBtn");

// Telegram WebApp API init
const tg = window.Telegram.WebApp;
tg.expand();

tapBtn.addEventListener("click", () => {
    coins++;
    coinDisplay.textContent = `Coins: ${coins}`;
});
