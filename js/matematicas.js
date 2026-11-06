// ============================================
// 1. FACTORIAL
// Basado en tu algoritmo con do-while (factorial.html)
// ============================================
function calcularFactorial() {
  const campo = document.getElementById('inputFactorial');
  let n = parseInt(campo.value);
  const salida = document.getElementById('resultadoFactorial');

  if (isNaN(n) || n < 0) {
    marcarInput(campo, false);
    salida.textContent = 'Por favor ingresa un número entero positivo.';
    return;
  }
  marcarInput(campo, true);

  let c = 1;
  let p = 1;
  let texto = '';

  do {
    texto += c;
    p = p * c;
    if (c < n) {
      texto += '*';
    }
    c++;
  } while (c <= n);

  salida.textContent = `${n}! : ${texto} = ${p}`;
}

// ============================================
// 2. FIBONACCI
// Función fibo(n) que llamaba tu archivo fibonacci.html
// ============================================
function fibo(n) {
  n = parseInt(n);
  const serie = [];
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    serie.push(a);
    const siguiente = a + b;
    a = b;
    b = siguiente;
  }
  return serie.join(', ');
}

function calcularFibonacci() {
  const campo = document.getElementById('inputFibonacci');
  const n = campo.value;
  const salida = document.getElementById('resultadoFibonacci');

  if (isNaN(parseInt(n)) || parseInt(n) < 1) {
    marcarInput(campo, false);
    salida.textContent = 'Por favor ingresa un número mayor a 0.';
    return;
  }
  marcarInput(campo, true);

  salida.textContent = fibo(n);
}

// ============================================
// 3. NUMEROS PRIMOS
// Función primos(n) que llamaba tu archivo fibonacci.html
// ============================================
function esPrimo(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function primos(n) {
  n = parseInt(n);
  const lista = [];
  let num = 2;
  while (lista.length < n) {
    if (esPrimo(num)) lista.push(num);
    num++;
  }
  return lista.join(', ');
}

function calcularPrimos() {
  const campo = document.getElementById('inputPrimos');
  const n = campo.value;
  const salida = document.getElementById('resultadoPrimos');

  if (isNaN(parseInt(n)) || parseInt(n) < 1) {
    marcarInput(campo, false);
    salida.textContent = 'Por favor ingresa un número mayor a 0.';
    return;
  }
  marcarInput(campo, true);

  salida.textContent = primos(n);
}

// ============================================
// 4. ECUACION DE SEGUNDO GRADO
// Tal como se vio en clases (math-cuadratica.html)
// ============================================
function generar() {
  const campoA = document.getElementById('a');
  const campoB = document.getElementById('b');
  const campoC = document.getElementById('c');
  const a = campoA.value;
  const b = campoB.value;
  const c = campoC.value;
  const salida = document.getElementById('res');

  if (a === '' || b === '' || c === '') {
    marcarInput(campoA, a !== '');
    marcarInput(campoB, b !== '');
    marcarInput(campoC, c !== '');
    salida.innerHTML = 'Por favor completa los tres coeficientes (a, b, c).';
    return;
  }
  if (parseFloat(a) === 0) {
    marcarInput(campoA, false);
    salida.innerHTML = 'a no puede ser 0.';
    return;
  }
  marcarInput(campoA, true);
  marcarInput(campoB, true);
  marcarInput(campoC, true);

  const dis = Math.pow(b, 2) - (4 * a * c);
  const x1 = (-b + Math.sqrt(dis)) / (2 * a);
  const x2 = (-b - Math.sqrt(dis)) / (2 * a);

  salida.innerHTML = "x1= " + x1 + "<br>" + "x2= " + x2;
}

// ============================================
// 5. NUMERO PERFECTO
// ============================================
function calcularPerfecto() {
  const campo = document.getElementById('inputPerfecto');
  const n = parseInt(campo.value);
  const salida = document.getElementById('resultadoPerfecto');

  if (isNaN(n) || n < 1) {
    marcarInput(campo, false);
    salida.textContent = 'Por favor ingresa un número entero positivo.';
    return;
  }
  marcarInput(campo, true);

  const divisores = [];
  for (let i = 1; i < n; i++) {
    if (n % i === 0) divisores.push(i);
  }
  const suma = divisores.reduce((acc, val) => acc + val, 0);

  if (suma === n) {
    salida.textContent = `${n} SÍ es un número perfecto. Divisores: ${divisores.join(' + ')} = ${suma}`;
  } else {
    salida.textContent = `${n} NO es un número perfecto. Divisores: ${divisores.join(' + ')} = ${suma}`;
  }
}
