const display = document.getElementById('display');



function appendValue(val) {

  display.value += val;

}



function clearDisplay() {

  display.value = '';

}



function deleteLast() {

  display.value = display.value.slice(0, -1);

}



function calculate() {

  try {

    display.value = eval(display.value.replace('%', '/100'));

  } catch {

    display.value = 'Error';

  }

}



//  Keyboard support

document.addEventListener('keydown', function (e) {

  if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '.', '%'].includes(e.key)) {

    appendValue(e.key);

  } else if (e.key === 'Enter') {

    calculate();

  } else if (e.key === 'Backspace') {

    deleteLast();

  } else if (e.key === 'Escape') {

    clearDisplay();

  }

});# CALCULATOR-LEVEL-1-TASK-3-CODSOFT
