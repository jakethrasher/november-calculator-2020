
export {const addInput1=document.getElementById('add-input-1');
        const addInput2=document.getElementById('add-input-2');
        const addResult=document.getElementById('add-result') ;
            }



export function handleAddClick () {
   
    const number1=Number(addInput1.value);
    const number2=Number(addInput2.value);
    const result= sum(number1, number2);

    //console.log(result);
    
    addResult.textContent= result;
};