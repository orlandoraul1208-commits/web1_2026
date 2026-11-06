// ============================================
// Basado casi textualmente en tu archivo
// "array2 tarea.html" (variable "frutas")
// ============================================
let frutas = [];

function actualizar() {
  document.getElementById('mostrar').innerText = '[ ' + frutas.join(', ') + ' ]';
}

// ---------- 1. ADICIONAR ELEMENTOS ----------
function adicionar() {
  const campo = document.getElementById('nuevoelemento');
  let elem = campo.value;
  if (elem.trim() != "") {
    marcarInput(campo, true);
    frutas.push(elem);
    campo.value = "";
    actualizar();
  } else {
    marcarInput(campo, false);
  }
}

// ---------- 2. GIRAR IZQUIERDA / DERECHA ----------
function girarIzquierda() {
  if (frutas.length > 0) {
    frutas.push(frutas.shift());
    actualizar();
  }
}

function girarDerecha() {
  if (frutas.length > 0) {
    frutas.unshift(frutas.pop());
    actualizar();
  }
}

// ---------- 3. TRANSFORMAR INTERCALADO ----------
function transformarIntercalado() {
  const salida = document.getElementById('arrayTransformado');

  if (frutas.length === 0) {
    salida.textContent = 'El vector está vacío. Agrega elementos primero.';
    return;
  }

  const transformado = frutas.map((item, idx) =>
    idx % 2 === 0 ? item.toUpperCase() : item.toLowerCase()
  );

  salida.textContent = '[ ' + transformado.join(', ') + ' ]';
}

actualizar();
