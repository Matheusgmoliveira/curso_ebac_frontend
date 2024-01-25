const form = document.getElementById('form-num')
const valor1 = document.getElementById('num-A')
const valor2 = document.getElementById('num-B')


function validaNum(num1,num2){
    const valA = parseInt(num1.value)
    const valB = parseInt(num2.value)
    return valB>valA
    
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const mensagemSucesso = `O valor B: ${valor2.value} é maior que o valor A: ${valor1.value}. Você preencheu corretamente`;


    let formEValido = validaNum(valor1,valor2)
    if(formEValido){
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        valor1.value=''
        valor2.value=''

        document.querySelector('.error-message').style.display = 'none';

        setTimeout(function () {
            containerMensagemSucesso.style.display = 'none';
        }, 2000);
    }else{
        document.querySelector('.error-message').style.display = 'block';
        
        document.querySelector('.success-message').style.display = 'none';

        
    }
})