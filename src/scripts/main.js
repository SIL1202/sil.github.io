console.clear();

const PARAMS = {
    movex: 100,
    movey: 100,
    speedx: 0.16,
    speedy: 0.48,
    opacity: 0.3,
    bgcolor: "#aaaaaa",
    bgcolor2: "#444444",
    diffscale: ["speedx", "speedy", "opacity"]
};

const minmax = { min: 0, max: 200, step: 1 };
const minmax50 = { min: 0, max: 2, step: 0.01 };

function setCustomProp(prop, val) {
    // 確保 opacity 和 speed 變數不加 px
    if (["opacity", "speedx", "speedy"].includes(prop)) {
        document.documentElement.style.setProperty("--" + prop, val);
    } else {
        document.documentElement.style.setProperty("--" + prop, val + "px");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".styled-button, .home-button, .muddle-text");

    buttons.forEach(button => {
        button.setAttribute("data-text", button.innerText); // 設定 data-text
        
        button.addEventListener("mouseenter", () => { // 🚀 只有在 hover 時觸發！
            muddleText(button);
        });
    });

    function muddleText(element) {
        let originalText = element.getAttribute("data-text");
        let characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let iterations = 0;
        let interval = setInterval(() => {
            element.innerText = originalText
                .split("")
                .map((char, index) => {
                    if (index < iterations) return originalText[index];
                    return characters[Math.floor(Math.random() * characters.length)];
                })
                .join("");
            
            if (iterations >= originalText.length) clearInterval(interval);
            iterations += 1;
        }, 50);
    }
});
