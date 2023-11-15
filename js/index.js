
getElementById('calculator-container').addEventListener('click', function(e) {
    if(e.target.innerText !== 'C') {
        getElementById('calculator-input').value = getElementById('calculator-input').value + e.target.innerText;
    } else {
        getElementById('calculator-input').value = '';
    }

    if(e.target.innerText === '+' || e.target.innerText === '-' || e.target.innerText === 'x' || e.target.innerText === '/' ) {
        // let number = 0;
        // if(e.target.innerText === '+') {
        //     number = parseInt(getElementById('calculator-input').value);
        //     result += number;
        // }  else if(e.target.innerText === '-') {
        //     if(!result) {
        //         result = parseInt(getElementById('calculator-input').value);
        //     } else {
        //         number = parseInt(getElementById('calculator-input').value);
        //         result -= number;
        //     }
        // }  else if(e.target.innerText === 'x') {
        //     if(!result) {
        //         result = parseInt(getElementById('calculator-input').value);
        //     } else {
        //         number = parseInt(getElementById('calculator-input').value);
        //         result *= number;
        //     }
            
        // }  else {
        //     if(!result) {
        //         result = parseInt(getElementById('calculator-input').value);
        //     } else {
        //         number = parseInt(getElementById('calculator-input').value);
        //         result /= number;
        //     }
        // } 
        // getElementById('calculator-input').value = result; 
    }
})

function getElementById(id){
    return document.getElementById(id);
}

function getFieldValue(id, isValue) {
    let value;

    if(isValue){
        value = getElementById(id).value;
    }

    else {
        value = getElementById(id).innerText;
    }

    return value;
}