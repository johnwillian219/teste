function downloadPDF() {
    const content = document.querySelector('.content'); // Seleciona o conteúdo para o PDF
    const options = {
        margin: 1, // Margens do PDF
        filename: 'pagina.pdf', // Nome do arquivo gerado
        image: { type: 'jpeg', quality: 0.98 }, // Qualidade das imagens no PDF
        html2canvas: { scale: 2 }, // Resolução
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' } // Configurações do PDF
    };

    html2pdf().set(options).from(content).save(); // Gera e baixa o PDF
}


//enumeração das figuras
 // Seleciona todas as figuras no documento
 const figures = document.querySelectorAll('.image-container');
 figures.forEach((figure, index) => {
   const caption = figure.querySelector('figcaption');
   if (caption) {
     // Adiciona o número automático à legenda
     caption.textContent = `Figura ${index + 1}: ${caption.textContent.replace(/^Figura\s*\d*:\s*/, '')}`;
   }
 });