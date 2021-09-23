let obriga = document.getElementById('botao')
let teste  = document.getElementById('inputEmail')
let eMail 
obriga.addEventListener('click', ()=> {
    eMail = teste.value 
    console.log(eMail)
    try{
        if(eMail.indexOf('@') > -1 && eMail.length > 5){
            alert('Um email para redefinição de senha foi enviado')
            return location = './login.html'      
        }
     else {
        throw new Erro ('Email invalido, escreva novamente')
    }} catch (error){
       alert('Digite o email corretamente')

    }
});




