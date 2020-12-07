// import functions and grab DOM elements
import { sum } from './utils.js'

import {
    handleAddClick
}from './clickHandlers.js'





const addButton=document.getElementById('add-button');


const subtractInput1=document.getElementById('subtract-input-1');
const subtractInput2=document.getElementById('subtract-input-2');
const subtractButton=document.getElementById('subtract-button');
const subtractResult=document.getElementById('subtract-result');

const multiplyInput1=document.getElementById('multiply-input-1');
const multiplyInput2=document.getElementById('multiply-input-2');
const multiplyButton=document.getElementById('multiply-button');
const multiplyResult=document.getElementById('multiply-result');

const divideInput1=document.getElementById('divide-input-1');
const divideInput2=document.getElementById('divide-input-2');
const divideButton=document.getElementById('divide-button');
const divideResult=document.getElementById('divide-result');



// initialize state

// set event listeners to update state and DOM





addButton.addEventListener('click', handleAddClick);

subtractButton.addEventListener('click', ()=>{
   
    const number1=Number(subtractInput1.value);
    const number2=Number(subtractInput2.value);
    const result= number1 - number2;
   
    //console.log(result);     
    
    subtractResult.textContent= result;
});

multiplyButton.addEventListener('click', ()=>{
   
    const number1=Number(multiplyInput1.value);
    const number2=Number(multiplyInput2.value);
    const result= number1 * number2;
   
    //console.log(result);
    
    multiplyResult.textContent= result;
});

divideButton.addEventListener('click', ()=>{
   
    const number1=Number(divideInput1.value);
    const number2=Number(divideInput2.value);
    const result= number1/number2; 
    //console.log(result);
    
    divideResult.textContent= result;
});

 



             