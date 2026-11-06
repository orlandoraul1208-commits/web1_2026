// ============================================
// 1. PALINDROMO
// Recorre el texto como arreglo de caracteres,
// igual que en el ejemplo de string.html (texto[i])
// ============================================
function normalizarTexto(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
}

function verificarPalindromo() {
  const campo = document.getElementById('inputPalindromo');
  const texto = campo.value;
  const salida = document.getElementById('resultadoPalindromo');

  if (texto.trim() === '') {
    marcarInput(campo, false);
    salida.textContent = 'Por favor ingresa una palabra o frase.';
    return;
  }
  marcarInput(campo, true);

  const limpio = normalizarTexto(texto);

  let invertido = '';
  for (let i = limpio.length - 1; i >= 0; i--) {
    invertido += limpio[i];
  }

  salida.textContent = (limpio === invertido)
    ? `"${texto}" SÍ es un palíndromo.`
    : `"${texto}" NO es un palíndromo.`;
}

// ============================================
// 2. MOSCA (iniciales)
// Usa split(" ") y toUpperCase(), igual que en string.html
// ============================================
function generarMosca() {
  const campo = document.getElementById('inputMosca');
  const nombre = campo.value;
  const salida = document.getElementById('resultadoMosca');

  if (nombre.trim() === '') {
    marcarInput(campo, false);
    salida.textContent = 'Por favor ingresa un nombre completo.';
    return;
  }
  marcarInput(campo, true);

  const palabras = nombre.trim().split(' ');
  let mosca = '';
  for (let i = 0; i < palabras.length; i++) {
    mosca += palabras[i][0].toUpperCase();
  }

  salida.textContent = 'MOSCA: ' + mosca;
}

// ============================================
// 3. BUSCAR Y REEMPLAZAR
// Usa split() / join(), la misma técnica de string.html
// ============================================
function buscarReemplazar() {
  const campoTexto = document.getElementById('inputTexto');
  const campoBuscar = document.getElementById('inputBuscar');
  const texto = campoTexto.value;
  const buscar = campoBuscar.value;
  const reemplazar = document.getElementById('inputReemplazar').value;
  const salida = document.getElementById('resultadoReemplazo');

  if (texto.trim() === '' || buscar.trim() === '') {
    marcarInput(campoTexto, texto.trim() !== '');
    marcarInput(campoBuscar, buscar.trim() !== '');
    salida.textContent = 'Por favor completa el texto y la palabra a buscar.';
    return;
  }
  marcarInput(campoTexto, true);
  marcarInput(campoBuscar, true);

  const resultado = texto.split(buscar).join(reemplazar);
  salida.textContent = resultado;
}
