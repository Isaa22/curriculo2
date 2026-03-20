// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
  
  // MODO ESCURO
  const botaoModoEscuro = document.getElementById('modo-escuro');
  if (botaoModoEscuro) {
    botaoModoEscuro.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
    });
  }
  
  // IMPRIMIR
  const botaoImprimir = document.getElementById('imprimir');
  if (botaoImprimir) {
    botaoImprimir.addEventListener('click', function() {
      window.print();
    });
  }
  
  // BAIXAR PDF
  const botaoBaixarPDF = document.getElementById('baixar-pdf');
  const elementoParaPDF = document.getElementById('conteudo-pdf');
  
  if (botaoBaixarPDF && elementoParaPDF) {
    botaoBaixarPDF.addEventListener('click', function() {
      const opcoes = {
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: 'Curriculo_Maria_Isabely.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, letterRendering: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      };
      
      html2pdf().set(opcoes).from(elementoParaPDF).save();
    });
  }
  
});
