document.getElementById("searchBtn").addEventListener("click", function () {
  const local = document.getElementById("local").value;
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;

  if (local && checkin && checkout) {
    // Construir a URL do Trivago com a cidade digitada
    const searchUrl = `https://www.trivago.com.br/?q=${encodeURIComponent(
      local
    )}&checkin=${encodeURIComponent(checkin)}&checkout=${encodeURIComponent(
      checkout
    )}`;
    // Redirecionar para a URL
    window.location.href = searchUrl;
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});

const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
