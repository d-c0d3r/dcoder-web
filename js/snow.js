// snow.js
const snowSymbols = ["✧","❄︎","✦","✼","✩","✺","✷","✶","✵","❇︎","❆︎","❅︎","✻"];
let snowflakesCount = 0;

function createSnowflake() {
    if (snowflakesCount >= 100) return;

    const snowflake = document.createElement('span');
    snowflake.className = 'snowflake';
    snowflake.textContent = snowSymbols[Math.floor(Math.random() * snowSymbols.length)];

    const startLeft = Math.random() * 100;
    snowflake.style.left = `${startLeft}vw`;
    const duration = 3 + Math.random() * 3; // от 3 до 6 секунд
    snowflake.style.animationDuration = `${duration}s`;

    document.body.appendChild(snowflake);
    snowflakesCount++;

    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
        snowflakesCount--;
    });
}

let snowInterval = null;

function startSnow() {
    if (snowInterval) return;
    function isAllowedMonth() {
        const allowed = [12, 0, 1];
        const m0 = new Date().getMonth(); // 0-11
        const m1 = m0 + 1; // 1-12
        return allowed.includes(m0) || allowed.includes(m1);
    }
    if (!isAllowedMonth()) return;
    snowInterval = setInterval(() => {
        let flakesToAdd = 4 + Math.floor(Math.random() * 9);
        for (let i = 0; i < flakesToAdd; i++) createSnowflake();
    }, 1000);
}

startSnow();