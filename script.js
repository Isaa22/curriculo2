// Seleciona o botão com ID 'modo-escuro' e adiciona um listener de clique
document.getElementById('modo-escuro').addEventListener('click', function() {
  // Alterna a classe 'dark-mode' no elemento body do documento:
  // - Se a classe existir, será removida
  // - Se não existir, será adicionada
  document.body.classList.toggle('dark-mode');
  
});

// Seleciona o botão com ID 'imprimir' e adiciona um listener de clique
document.getElementById('imprimir').addEventListener('click', function() {
  // Aciona a função de impressão nativa do navegador
  // Isso abrirá o diálogo de impressão do sistema operacional
  window.print();
  // Função para baixar como PDF
const botaoBaixarPDF = document.getElementById('baixar-pdf');
const elementoParaPDF = document.getElementById('conteudo-pdf');

if (botaoBaixarPDF && elementoParaPDF) {
  botaoBaixarPDF.addEventListener('click', () => {
    // Opções de configuração do PDF
    const opcoes = {
      margin: [0.5, 0.5, 0.5, 0.5],
      filename: 'Curriculo_Maria_Isabely.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, letterRendering: true },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    
    // Gerar o PDF
    html2pdf().set(opcoes).from(elementoParaPDF).save();
  });
}
  
});
