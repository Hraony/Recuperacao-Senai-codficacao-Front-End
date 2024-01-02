const emailInput = document.getElementById('email')
const senhaInput = document.getElementById('senha')

function login() {
    if(emailInput.value == 'admin@email.com' && senhaInput.value == '1234') {
        window.location.href = "painel.html"
    } else {
        alert('email e/ou senha incorretos')
    }
}