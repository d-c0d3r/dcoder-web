// snow.js
const snowSymbols = ["✧","❄︎","✦","✼","✩","✺","✷","✶","✵","❇︎","❆︎","❅︎","✻"];
let snowflakesCount = 0;

function createSnowflake() {
    if (snowflakesCount >= 50) return;

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
    if (snowInterval) return; // Уже работает
    snowInterval = setInterval(() => {
        let flakesToAdd = 2 + Math.floor(Math.random() * 4); // 2-5 штук
        for (let i = 0; i < flakesToAdd; i++) createSnowflake();
    }, 1000);
}

function stopSnow() {
    clearInterval(snowInterval);
    snowInterval = null;
    document.querySelectorAll('.snowflake').forEach(f => f.remove());
    snowflakesCount = 0;
}

// Используйте эту переменную для включения/выключения
let is_winter = true;
function toggleWinter(val) {
    is_winter = val;
    if (is_winter) startSnow();
    else stopSnow();
}

toggleWinter(is_winter);

// Для переключения: toggleWinter(true) или toggleWinter(false)