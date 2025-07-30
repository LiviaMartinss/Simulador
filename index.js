function calcularNota() {
    let cg = parseInt(document.getElementById('cg').value) || 0;
    let ce = parseInt(document.getElementById('ce').value) || 0;

    // Garante que os valores estejam dentro dos limites
    cg = Math.max(0, Math.min(20, cg));
    ce = Math.max(0, Math.min(30, ce));

    
    document.getElementById('cg').value = cg;
    document.getElementById('ce').value = ce;


    const notaCG = (cg / 20) * 10; // peso 0.5 * 500 = 250
    const notaCE = (ce / 30) * 10; // peso 0.333 * 750 = ~250
    const notaFinal = ((notaCG + (3 * notaCE)) / 4);
    const notaFormatada = notaFinal.toFixed(3).replace('.', ',');

    document.getElementById('resultado').innerText = `Nota final: ${notaFormatada}`;

    function validarAcertos(cg, ce) {
        if (cg < 0 || cg > 20) {
            return "Erro: Acertos em Conhecimentos Gerais devem estar entre 0 e 20.";
        }
        if (ce < 0 || ce > 30) {
            return "Erro: Acertos em Conhecimentos Específicos devem estar entre 0 e 30.";
        }
        return null; // tudo certo
    }

    function calcularNEI(cg, ce) {
        const erro = validarAcertos(cg, ce);
        if (erro) {
            return erro;
        }

        let notaCG = (cg / 20) * 10;
        let notaCE = (ce / 30) * 10;
        let nei = (notaCG + 3 * notaCE) / 4;
        return nei.toFixed(4).replace('.', ',');
    }
}