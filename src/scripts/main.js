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
