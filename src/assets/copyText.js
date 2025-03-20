window.onload = function () {
  const copyButton = document.getElementById("copyButton");

  if (copyButton) {
    copyButton.addEventListener("click", async () => {
      const input = document.getElementById("name");

      try {
        await navigator.clipboard.writeText(input.value);
        alert("Texto copiado: " + input.value);
      } catch (err) {
        alert("Error al copiar: " + err);
      }
    });
  }
};
