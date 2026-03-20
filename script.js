// MODO ESCURO
// Seleciona o botão com ID 'modo-escuro' e adiciona um listener de clique
document.getElementById('modo-escuro').addEventListener('click', function() {
  // Alterna a classe 'dark-mode' no elemento body do documento
  document.body.classList.toggle('dark-mode');
});

// IMPRIMIR
// Seleciona o botão com ID 'imprimir' e adiciona um listener de clique
document.getElementById('imprimir').addEventListener('click', function() {
  // Aciona a função de impressão nativa do navegador
  window.print();
});

// BAIXAR PDF
// Seleciona o botão com ID 'baixar-pdf'
const botaoBaixarPDF = document.getElementById('baixar-pdf');
const elementoParaPDF = document.getElementById('conteudo-pdf');

// Verifica se o botão e o elemento existem antes de adicionar o evento
if (botaoBaixarPDF && elementoParaPDF) {
  botaoBaixarPDF.addEventListener('click', function() {
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
