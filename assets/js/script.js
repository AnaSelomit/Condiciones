// BORDE IMAGEN

img = document.querySelector("#tienda");

img.style.border = "0px";

img.addEventListener("click", () => {
    if (img.style.border === "0px") {
        img.style.border = "solid 6px #ff0000";
    } else if (img.style.border !== "0px") {
        img.style.border = "0px";
    }
});

// Stickers

const count1 = document.querySelector("#count1");
const count2 = document.querySelector("#count2");
const count3 = document.querySelector("#count3");
const btn = document.querySelector("#verificador");
resultado = document.querySelector("#resultado");
total = document.querySelector("#total");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    const a = count1.value;
    const b = count2.value;
    const c = count3.value;

    total = Number(a) + Number(b) + Number(c);

    if (total <= 10) {
        resultado.innerHTML = "LLevas" + " " + total + " " + "stickers";
    } else if (total > 10) {
        resultado.innerHTML = "LLevas demasiados stickers";
    } else {
        resultado.innerHTML = "Inténtalo de nuevo";
    }
});

// Claves

const element1 = document.querySelector("#selector1");
const element2 = document.querySelector("#selector2");
const element3 = document.querySelector("#selector3");
const btn2 = document.querySelector("#btn2");
resultado2 = document.querySelector("#resultado2");
total2 = document.querySelector("#total2");

btn2.addEventListener("click", (e) => {
    e.preventDefault();

    const d = element1.value;
    const f = element2.value;
    const g = element3.value;

    total2 = d + f + g;

    if (total2 === "911") {
        resultado2.innerHTML = "Password 1 correcto";
    } else if (total2 === "714") {
        resultado2.innerHTML = "Password 2 correcto";
    } else {
        resultado2.innerHTML = "Password incorrecto";
    }
});
