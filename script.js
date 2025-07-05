// Função responsável por enviar mensagem no WhatsApp
function enviarWhatsApp(event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();    
  
    if (nome === '' || mensagem === '') {
      alert('Por favor, preencha todos os campos antes de enviar!');
      return;
    }
  
      // Formata o texto e abre o link no WhatsApp
    const telefone = '5541987395060';
    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
  
    window.open(url, '_blank');
  }
  
  // Adiciona efeito de hover nos cards dos projetos
  document.querySelectorAll('.projeto').forEach(card => {
    const info = card.querySelector('.info-projetos');
    card.addEventListener('mouseenter', () => {
      info.style.opacity = '1';
      info.style.transform = 'translateY(0)';
    });
    card.addEventListener('mouseleave', () => {
      info.style.opacity = '0.7';
      info.style.transform = 'translateY(10px)';
    });
  });
  
  // Cria o botão "Voltar ao topo" dinamicamente
  const botaoTopo = document.createElement('button');
  botaoTopo.textContent = '↑ Topo';
  botaoTopo.style.position = 'fixed';
  botaoTopo.style.bottom = '20px';
  botaoTopo.style.right = '20px';
  botaoTopo.style.padding = '10px 15px';
  botaoTopo.style.fontSize = '16px';
  botaoTopo.style.background = 'var(--primaria)';
  botaoTopo.style.color = 'var(--claro)';
  botaoTopo.style.border = 'none';
  botaoTopo.style.borderRadius = '8px';
  botaoTopo.style.cursor = 'pointer';
  botaoTopo.style.display = 'none';
  botaoTopo.style.zIndex = '1000';
  document.body.appendChild(botaoTopo);
  
  // Faz a rolagem suave ao topo ao clicar no botão
  botaoTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Mostra ou esconde o botão dependendo do scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      botaoTopo.style.display = 'block';
    } else {
      botaoTopo.style.display = 'none';
    }
  });
  