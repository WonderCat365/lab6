import timer from './timer.js';
import './styles.css';


function elements(){
    let allElems = document.createElement('div');
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
    
    let buttonStop = document.createElement('button');
    buttonStop.setAttribute('id', 'butStop');
    
    let buttonPause  = document.createElement('button');
    buttonPause.setAttribute('id', 'butPause');

    containerForButton.appendChild(buttonPause);
    containerForButton.appendChild(buttonStart);
    containerForButton.appendChild(buttonStop);
    
    
    allElems.appendChild(timeField);
    allElems.appendChild(noteField);
    allElems.appendChild(remainedTime);
    allElems.appendChild(containerForButton);

    return allElems;
}
let buf = elements();
document.body.appendChild(buf);