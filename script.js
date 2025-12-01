const dataAlvo = new Date(2025, 11, 14); // Exemplo: 01/01/2025


function calcularTempoJuntos() {
    const agora = new Date();
    const diffTime = dataAlvo - agora; // tempo restante até a data futura

    if (diffTime <= 0) {
        document.getElementById("tempo-juntos").textContent = "Chegou o grande dia!";
        return;
    }

    let segundos = Math.floor(diffTime / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    document.getElementById("tempo-juntos").textContent =
        `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}


// Calcular assim que a página for carregada e depois atualizar a cada 1 segundo
setInterval(calcularTempoJuntos, 1000);
