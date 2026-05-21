/**
 * Realiza o cálculo de conversão de milho para bioplástico e discos de vinil.
 */
function calcularImpacto() {
    // Captura os elementos necessários do HTML
    const inputMilho = document.getElementById("qtdMilho");
    const milho = inputMilho.value;
    const elementoResultado = document.getElementById("resultado");
    
    // Validação de segurança (impede campos vazios, zeros ou números negativos)
    if (milho === "" || milho <= 0) {
        elementoResultado.innerHTML = "<span style='color: #e74c3c; font-weight: bold; display: block; text-align: center;'>Por favor, digite um valor válido! 🌽</span>";
        return;
    }

    // CÁLCULO AGRO-TECNOLÓGICO:
    // 1 tonelada de milho gera aproximadamente 200 kg de bioplástico PLA
    const bioplastico = milho * 200;
    
    // Um disco de vinil (LP de música) pesa em média 180g (0.18 kg)
    const pesoDiscoKg = 0.18;
    const discos = Math.floor(bioplastico / pesoDiscoKg);

    // Formata o número para o padrão de pontos brasileiro (ex: 12.500)
    const discosFormatados = discos.toLocaleString('pt-BR');
    const bioplasticoFormatado = bioplastico.toLocaleString('pt-BR');

    // Insere o resultado final formatado dentro da div de resultado
    elementoResultado.innerHTML = `
        Com <strong>${milho}</strong> toneladas de milho, você produz cerca de <strong>${bioplasticoFormatado} kg</strong> de bioplástico biodegradável!<br><br>
        Biodegradável e musical: Isso daria para fabricar cerca de <strong>${discosFormatados}</strong> discos de vinil ecológicos! 🎶
    `;
}

// Mensagem discreta no console do navegador apenas para certificar que o script rodou
console.log("Arquivo script.js carregado com sucesso!");
