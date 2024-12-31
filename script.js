//copiar codigo
function copyToClipboard(elementId, button) {
    const text = document.getElementById(elementId).innerText;

    // Copiar o texto para a área de transferência
    navigator.clipboard.writeText(text).then(() => {
      // Salvar o estado original do botão
      const originalText = button.innerText;
      const originalBackgroundColor = button.style.backgroundColor;

      // Alterar o botão para "Código copiado" com fundo verde
      button.innerText = "Código copiado";
      button.style.backgroundColor = "#28a745"; // Cor verde

      // Restaurar o texto e a cor original após 10 segundos
      setTimeout(() => {
        button.innerText = originalText;
        button.style.backgroundColor = originalBackgroundColor;
      }, 10000);
    }).catch(err => console.error('Erro ao copiar:', err));
  }

//enumeração das figuras  automaticas
 const figures = document.querySelectorAll('.image-container');
 figures.forEach((figure, index) => {
   const caption = figure.querySelector('figcaption');
   if (caption) {
     // Adiciona o número automático à legenda
     caption.textContent = `Figura ${index + 1}: ${caption.textContent.replace(/^Figura\s*\d*:\s*/, '')}`;
   }
 });