getElementById('calculator-container').addEventListener('click', function(e) {
    if(e.target.innerText !== 'C') {
        getElementById('calculator-input').value = getElementById('calculator-input').value + e.target.innerText;
    } else {
        getElementById('calculator-input').value = '';
    }
})

getElementById('calculate').addEventListener('click',function(){
    if(getElementById('calculator-input').value) {
       getElementById('calculator-input').value = eval(getElementById('calculator-input').value)
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