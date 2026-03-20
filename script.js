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

// ===== ANIMAÇÃO SUAVE AO CARREGAR =====
document.addEventListener('DOMContentLoaded', () => {
  // Pequeno efeito de fade-in para o container
  const container = document.querySelector('.resume-container');
  if (container) {
    container.style.opacity = '0';
    container.style.transform = 'translateY(12px)';
    container.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
    
    setTimeout(() => {
      container.style.opacity = '1';
      container.style.transform = 'translateY(0)';
    }, 50);
  }
  
  // Adicionar tooltip amigável nos botões (apenas para feedback)
  modoEscuroBtn.setAttribute('title', 'Alternar entre tema claro e escuro');
  imprimirBtn.setAttribute('title', 'Imprimir currículo ou salvar como PDF');
});

// ===== ATUALIZAR ANO NO FOOTER DINAMICAMENTE (OPCIONAL) =====
const footer = document.querySelector('footer p');
if (footer) {
  const currentYear = new Date().getFullYear();
  // Se quiser manter sempre o ano atual (mas o original era 2026, vou manter a informação mas pode ser dinâmico)
  // Porém o texto já está estático no HTML, então opcional: não forçar override.
  // Apenas garantimos que se houver necessidade, mantemos o nome correto.
}
