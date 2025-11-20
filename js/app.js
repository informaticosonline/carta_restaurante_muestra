const btnSubir = document.getElementById("btn-subir");

window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        btnSubir.style.display = "flex";
    } else {
        btnSubir.style.display = "none";
    }
});

btnSubir.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// --- Fecha automática ---
const fechaElemento = document.getElementById("fecha-auto");

if (fechaElemento) {
    const hoy = new Date();
    const dia = hoy.getDate().toString().padStart(2, "0");
    const mes = (hoy.getMonth() + 1).toString().padStart(2, "0");
    const ano = hoy.getFullYear();

    fechaElemento.textContent = `Actualizado: ${dia}-${mes}-${ano}`;
}
