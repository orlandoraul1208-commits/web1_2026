// ============================================
// 1. FECHA ACTUAL
// Mismo patron switch(dia) de Date.html / Datee.html,
// pero usando new Date() (fecha de HOY) en vez de una fecha fija.
// ============================================
const MESES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

function mostrarFechaActual() {
  const hoy = new Date();
  const dia = hoy.getDay(); // 0=Domingo ... 6=Sabado

  let dia_semana;
  switch (dia) {
    case 0: dia_semana = "Domingo"; break;
    case 1: dia_semana = "Lunes"; break;
    case 2: dia_semana = "Martes"; break;
    case 3: dia_semana = "Miércoles"; break;
    case 4: dia_semana = "Jueves"; break;
    case 5: dia_semana = "Viernes"; break;
    case 6: dia_semana = "Sábado"; break;
    default: dia_semana = "";
  }

  const texto = `La Paz, ${dia_semana} ${hoy.getDate()} de ${MESES[hoy.getMonth()]} de ${hoy.getFullYear()}`;
  document.getElementById('resultadoFecha').textContent = texto;
}

// ============================================
// 2. RELOJ EN VIVO
// ============================================
function actualizarReloj() {
  const f = new Date();
  const h = String(f.getHours()).padStart(2, '0');
  const m = String(f.getMinutes()).padStart(2, '0');
  const s = String(f.getSeconds()).padStart(2, '0');
  const display = document.getElementById('relojDisplay');
  if (display) display.textContent = `${h}:${m}:${s}`;
}

actualizarReloj();
setInterval(actualizarReloj, 1000);

// ============================================
// 3. CONTADOR DE MILISEGUNDOS
// Reutiliza tu misma logica de primos (fibonacci.html / matematicas.js)
// junto a objetos Date, tal como sugiere la guia de la practica.
// ============================================
function esPrimoLocal(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function listarPrimosLocal(n) {
  const lista = [];
  let num = 2;
  while (lista.length < n) {
    if (esPrimoLocal(num)) lista.push(num);
    num++;
  }
  return lista;
}

function medirTiempoPrimos() {
  const campo = document.getElementById('inputPrimosTiempo');
  const n = parseInt(campo.value);
  const salida = document.getElementById('resultadoTiempo');

  if (isNaN(n) || n < 1) {
    marcarInput(campo, false);
    salida.textContent = 'Por favor ingresa un número mayor a 0.';
    return;
  }
  marcarInput(campo, true);

  // si tiene objetos Date
  const inicio = new Date();
  const primosGenerados = listarPrimosLocal(n);
  const fin = new Date();
  const transcurso = fin.getTime() - inicio.getTime(); // tiempo en milisegundos

  salida.textContent = `Primos: ${primosGenerados.join(', ')} — Tiempo: ${transcurso} ms`;
}
