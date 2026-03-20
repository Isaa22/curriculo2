// ===== MODO ESCURO =====
const modoEscuroBtn = document.getElementById('modo-escuro');
const body = document.body;

// Verificar preferência salva no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  modoEscuroBtn.textContent = '☀️ Modo Claro';
} else {
  modoEscuroBtn.textContent = '🌙 Modo Escuro';
}

// Alternar modo escuro
modoEscuroBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    modoEscuroBtn.textContent = '☀️ Modo Claro';
  } else {
    localStorage.setItem('theme', 'light');
    modoEscuroBtn.textContent = '🌙 Modo Escuro';
  }
});

// ===== IMPRIMIR CURRÍCULO =====
const imprimirBtn = document.getElementById('imprimir');

imprimirBtn.addEventListener('click', () => {
  window.print();
});

// ===== FUNÇÃO PARA MOSTRAR NOTIFICAÇÃO =====
function showNotification(message, isError = false) {
  // Remover toast existente se houver
  const existingToast = document.querySelector('.pdf-toast');
  if (existingToast) {
    existingToast.remove();
  }
  
  // Criar novo toast
  const toast = document.createElement('div');
  toast.className = 'pdf-toast';
  toast.textContent = message;
  
  if (isError) {
    toast.style.background = '#ef4444';
  } else {
    toast.style.background = '#10b981';
  }
  
  document.body.appendChild(toast);
  
  // Remover após 3 segundos
  setTimeout(() => {
    toast.style.animation = 'slideInRight 0.3s ease-out reverse';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.remove();
      }
    }, 300);
  }, 3000);
}

// ===== BAIXAR PDF =====
const baixarPdfBtn = document.getElementById('baixar-pdf');

baixarPdfBtn.addEventListener('click', async () => {
  // Mostrar loading no botão
  const originalText = baixarPdfBtn.innerHTML;
  baixarPdfBtn.innerHTML = '⏳ Gerando PDF...';
  baixarPdfBtn.disabled = true;
  
  try {
    const element = document.getElementById('resume-content');
    
    // Configurações do PDF
    const opt = {
      margin: [0.5, 0.5, 0.5, 0.5], // margens em polegadas
      filename: 'Curriculo_Maria_Isabely_Soares_Carvalho.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        letterRendering: true,
        useCORS: true,
        logging: false
      },
      jsPDF: { 
        unit: 'in', 
        format: 'a4', 
        orientation: 'portrait' 
      }
    };
    
    // Salvar o tema atual temporariamente para o PDF
    const isDarkMode = body.classList.contains('dark-mode');
    
    // Se estiver em modo escuro, removemos temporariamente para o PDF
    // para garantir que o PDF saia com fundo branco (mais profissional)
    if (isDarkMode) {
      body.classList.remove('dark-mode');
      // Pequeno delay para garantir que o estilo seja atualizado
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    
    // Gerar PDF
    await html2pdf().set(opt).from(element).save();
    
    // Restaurar tema se necessário
    if (isDarkMode) {
      body.classList.add('dark-mode');
    }
    
    showNotification('✅ PDF baixado com sucesso!', false);
    
  } catch (error) {
    console.error('Erro ao gerar PDF:', error);
    showNotification('❌ Erro ao gerar PDF. Tente novamente.', true);
    
    // Restaurar tema em caso de erro
    if (savedTheme === 'dark') {
      body.classList.add('dark-mode');
    }
  } finally {
    // Restaurar botão
    baixarPdfBtn.innerHTML = originalText;
    baixarPdfBtn.disabled = false;
  }
});

// ===== ANIMAÇÃO SUAVE AO CARREGAR =====
document.addEventListener('DOMContentLoaded', () => {
  // Adicionar tooltips nos botões
  modoEscuroBtn.setAttribute('title', 'Alternar entre tema claro e escuro');
  imprimirBtn.setAttribute('title', 'Imprimir currículo ou salvar como PDF');
  baixarPdfBtn.setAttribute('title', 'Baixar currículo em formato PDF');
  
  // Pequena animação de entrada já está no CSS
  console.log('Currículo carregado com sucesso! ✅');
});

// ===== ATUALIZAR ANO NO FOOTER DINAMICAMENTE =====
const footer = document.querySelector('footer p');
if (footer) {
  const currentYear = new Date().getFullYear();
  // Mantém o nome e atualiza o ano
  footer.innerHTML = `&copy; ${currentYear} Maria Isabely Soares Carvalho – Todos os direitos reservados`;
}
