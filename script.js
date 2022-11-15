const p_dias = document.querySelector(".p_dias");

const inicio = new Date(2022,08,15);

const hoy = new Date();

let dif = inicio.getTime() - hoy.getTime();

const diasTotales = (inicio, hoy) => {
    let dif = inicio.getTime() - (hoy.getTime() - (1000 * 3600));
    let diasTotales = Math.ceil(dif / (1000 * 3600 * 24));
    return diasTotales > 0 ? diasTotales : diasTotales * (-1);
}

const diasDesde = diasTotales(inicio,hoy);

p_dias.innerHTML = `Hoy se cumplen ${diasDesde} días a tu lado...`;

console.log("Es una app muy sencilla, pero con mucho amor <3")
