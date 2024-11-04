document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener respuestas
    const idea = document.getElementById('question1').value;
    const publico = document.getElementById('question2').value;
    const problemas = document.getElementById('question3').value;

    // Generar resultados
    const resultText = `
        <strong>Idea de Negocio:</strong> ${idea} <br>
        <strong>Público Objetivo:</strong> ${publico} <br>
        <strong>Problemas que Resuelve:</strong> ${problemas}
    `;

    // Mostrar resultados
    document.getElementById('resultText').innerHTML = resultText;
    document.getElementById('result').style.display = 'block'; // Mostrar resultados

    // Limpiar el formulario
    document.getElementById('surveyForm').reset();
});
