function MostrarSenha(){
    let inputSenha = document.getElementById('Senha')
    let btnSenha = document.getElementById('btn-senha')
        if(inputSenha.type === 'password'){
            inputSenha.setAttribute('type', 'text')
            btnSenha.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
        }else{
            inputSenha.setAttribute('type', 'password')
            btnSenha.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
        }
}

function DigitarLogin(){
    let cadastro = document.querySelectorAll('.cadastro-login')
    
    cadastro.forEach(function(input){
        input.addEventListener('focus', function() {
            input.setAttribute('placeholder', '')
        })

        input.addEventListener('blur', function() {
            input.setAttribute('placeholder', 'Email')
        })  
    })
}

function DigitarSenha() {
    let cadastro = document.querySelectorAll('.cadastro-senha')
    
    cadastro.forEach(function(input){
        input.addEventListener('focus', function() {
            input.setAttribute('placeholder', '')
        })

        input.addEventListener('blur', function() {
            input.setAttribute('placeholder', 'Senha')
        })
    })
}
DigitarLogin()
DigitarSenha()