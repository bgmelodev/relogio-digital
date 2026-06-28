// Pega os elementos do HTML
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

// Função que atualiza o relógio
function atualizarRelogio() {

    // Pega a data e hora atual do computador
    const agora = new Date();

    // Pega cada informação separadamente
    let hora = agora.getHours();
    let minuto = agora.getMinutes();
    let segundo = agora.getSeconds();

    // Se tiver apenas 1 dígito, adiciona um zero na frente
    hora = String(hora).padStart(2, "0");
    minuto = String(minuto).padStart(2, "0");
    segundo = String(segundo).padStart(2, "0");

    // Coloca os valores no HTML
    horas.textContent = hora;
    minutos.textContent = minuto;
    segundos.textContent = segundo;
}

// Atualiza assim que a página abre
atualizarRelogio();

// Atualiza a cada 1 segundo
setInterval(atualizarRelogio, 1000);