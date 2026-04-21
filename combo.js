document.addEventListener("DOMContentLoaded", function () {
  const comboChecks = document.querySelectorAll(".combo-option input");
  const comboList = document.getElementById("combo-list");
  const comboTotal = document.getElementById("combo-total");
  const comboWhatsapp = document.getElementById("combo-whatsapp");

  const numeroWhatsapp = "573249475086";

  function formatoPrecio(valor) {
    return "$" + valor.toLocaleString("es-CO");
  }

  function obtenerDescuento(cantidad) {
    if (cantidad === 2) return 0.05;
    if (cantidad === 3) return 0.10;
    if (cantidad >= 4) return 0.15;
    return 0;
  }

  function actualizarCombo() {
    let seleccionadas = [];
    let subtotal = 0;

    comboChecks.forEach(function (check) {
      if (check.checked) {
        seleccionadas.push(check.value);
        subtotal += Number(check.getAttribute("data-price")) || 0;
      }
    });

    if (seleccionadas.length === 0) {
      comboList.innerHTML = "No has seleccionado plataformas todavía.";
      comboTotal.textContent = "$0";
      comboWhatsapp.href = "#";
      comboWhatsapp.classList.add("combo-btn-disabled");
      return;
    }

    const descuento = obtenerDescuento(seleccionadas.length);
    const total = Math.round(subtotal - subtotal * descuento);

    comboList.innerHTML = seleccionadas.map(function (item) {
      return "• " + item;
    }).join("<br>");

    comboTotal.textContent = formatoPrecio(total);

    const mensaje =
      "Hola, quiero armar este combo:\n\n" +
      seleccionadas.join("\n") +
      "\n\nTotal del combo: " +
      formatoPrecio(total);

    const linkWhatsapp =
      "https://wa.me/" +
      numeroWhatsapp +
      "?text=" +
      encodeURIComponent(mensaje);

    comboWhatsapp.href = linkWhatsapp;
    comboWhatsapp.classList.remove("combo-btn-disabled");
  }

  comboChecks.forEach(function (check) {
    check.addEventListener("change", actualizarCombo);
  });

  actualizarCombo();
});