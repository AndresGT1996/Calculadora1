function sumar (){

let num1 = parseFloat(document.getElementById('numero1').value);
let num2 = parseFloat(document.getElementById('numero2').value);

let resultado = num1 + num2

document.getElementById('resultadoOperacion').textContent = resultado;
}

function restar (){

    let num1 = parseFloat(document.getElementById('numero1').value);
    let num2 = parseFloat(document.getElementById('numero2').value);
    
    let resultado = num1 - num2
    
    document.getElementById('resultadoOperacion').textContent = resultado;
    }

    function multiplicacion (){

        let num1 = parseFloat(document.getElementById('numero1').value);
        let num2 = parseFloat(document.getElementById('numero2').value);
        
        let resultado = num1 * num2
        
        document.getElementById('resultadoOperacion').textContent = resultado;
        }

        function division (){

            let num1 = parseFloat(document.getElementById('numero1').value);
            let num2 = parseFloat(document.getElementById('numero2').value);
            
            let resultado = num1 / num2
            
            document.getElementById('resultadoOperacion').textContent = resultado;
            }