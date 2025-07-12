document.addEventListener('DOMContentLoaded', () => {
  const operationElement = document.querySelector('#operation');
  const totalElement = document.querySelector('#total');
  const keys = document.querySelectorAll('.key');
  const scientificToggle = document.querySelector('#scientificToggle');
  const scientificKeys = document.querySelector('#scientificKeys');
  const calculator = document.querySelector('.calculator');

  let displayExpression = '';
  let evalExpression = '';

  document.querySelector('#open-paren').addEventListener('click', () => {
    writeText('(', '(');
  });

  document.querySelector('#close-paren').addEventListener('click', () => {
    writeText(')', ')');
  });

  const updateDisplay = () => {
    operationElement.innerText = displayExpression;
  };

  const showTime = () => {
    const date = new Date();
    let h = date.getHours();
    const m = date.getMinutes();
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    const time = `${h}:${m < 10 ? '0' + m : m} ${ampm}`;
    document.querySelector('#time').innerText = time;
    setTimeout(showTime, 60000);
  };

  const writeTotal = val => totalElement.innerText = val;
  const writeText = (text, evalText) => {
    displayExpression += text;
    evalExpression += evalText || text;
    updateDisplay();
  };

  const onDelete = () => {
    displayExpression = displayExpression.slice(0, -1);
    evalExpression = evalExpression.slice(0, -1);
    updateDisplay();
  };

  const onClear = () => {
    displayExpression = '';
    evalExpression = '';
    totalElement.innerText = '0';
    updateDisplay();
  };

  const onEqual = () => {
    try {
      const result = eval(evalExpression);
      writeTotal(result);
      displayExpression = result.toString();
      evalExpression = result.toString();
      updateDisplay();
    } catch {
      document.querySelector('.screen').classList.add('shake');
      setTimeout(() => document.querySelector('.screen').classList.remove('shake'), 400);
      writeTotal('Error');
    }
  };

  const action = key => {
    switch (key.id) {
      case 'clear': onClear(); break;
      case 'delete': onDelete(); break;
      case 'equal': onEqual(); break;
      default: writeText(key.innerText); break;
    }
  };

  keys.forEach(k => {
    if (!k.closest('#scientificKeys')) {
      k.addEventListener('click', () => action(k));
    }
  });

  scientificToggle.addEventListener('change', (e) => {
    if (e.target.checked) {
      scientificKeys.classList.add('active');
      calculator.classList.add('expanded');
    } else {
      scientificKeys.classList.remove('active');
      calculator.classList.remove('expanded');
    }
    onClear();
  });

  scientificKeys.querySelectorAll('.key').forEach((btn) => {
    btn.addEventListener('click', () => {
      const op = btn.innerText;
      const lastNumMatch = evalExpression.match(/(\d+\.?\d*)$/);
      const lastNum = lastNumMatch ? lastNumMatch[1] : '';

      switch (op) {
        case 'π':
          writeText('π', Math.PI.toFixed(8));
          break;
        case 'e':
          writeText('e', Math.E.toFixed(8));
          break;
        case '√':
          writeText('√(', 'Math.sqrt(');
          break;
        case 'sin':
          writeText('sin(', 'Math.sin((' + Math.PI + '/180)*');
          break;
        case 'cos':
          writeText('cos(', 'Math.cos((' + Math.PI + '/180)*');
          break;
        case 'tan':
          writeText('tan(', 'Math.tan((' + Math.PI + '/180)*');
          break;
        case 'log':
          writeText('log(', 'Math.log10(');
          break;
        case 'ln':
          writeText('ln(', 'Math.log(');
          break;
        case '^':
          writeText('^', '**');
          break;
        case 'x!':
          if (lastNum) {
            evalExpression = evalExpression.slice(0, -lastNum.length);
            displayExpression = displayExpression.slice(0, -lastNum.length);
            writeText(`${lastNum}!`, `fact(${lastNum})`);
          }
          break;
        default:
          break;
      }
    });
  });

  window.fact = function (n) {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    return n * fact(n - 1);
  };

  showTime();
});
