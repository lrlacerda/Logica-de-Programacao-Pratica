document.getElementById("searchBtn").addEventListener("click", function() {
    const local = document.getElementById("local").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;

    if (local && checkin && checkout) {
        // Construir a URL do Trivago com a cidade digitada
        const searchUrl = `https://www.trivago.com.br/?q=${encodeURIComponent(local)}&checkin=${encodeURIComponent(checkin)}&checkout=${encodeURIComponent(checkout)}`;
        // Redirecionar para a URL
        window.location.href = searchUrl;
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

