import timer from './timer.js';
import './styles.css';

function elements() {

  let timeField = document.createElement('input');
  timeField.setAttribute('id', 'tF');

  let noteField = document.createElement('input');
  noteField.setAttribute('id', 'nF');

  let remainedTime = document.createElement('textarea');
  remainedTime.setAttribute('id', 'remTime');
  remainedTime.setAttribute('readonly', 'true');

  let containerForButton = document.createElement('div');

  let buttonStart = document.createElement('button');
  buttonStart.setAttribute('id', 'butStart');
  buttonStart.innerHTML = 'Start';

  let buttonStop = document.createElement('button');
  buttonStop.setAttribute('id', 'butStop');
  buttonStop.innerHTML = 'Stop';

  let buttonPause = document.createElement('button');
  buttonPause.setAttribute('id', 'butPause');
  buttonPause.innerHTML = 'Pause';

  let buttonReset = document.createElement('button');
  buttonReset.setAttribute('id', 'butReset');
  buttonReset.innerHTML = 'Reset';

  containerForButton.appendChild(buttonStart);
  containerForButton.appendChild(buttonPause);
  containerForButton.appendChild(buttonReset);
  containerForButton.appendChild(buttonStop);

  let allElems = document.createElement('div');
  allElems.appendChild(timeField);
  allElems.appendChild(noteField);
  allElems.appendChild(remainedTime);
  allElems.appendChild(containerForButton);

  return allElems;

}

document.body.appendChild(elements());
