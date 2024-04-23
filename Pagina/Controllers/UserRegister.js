import { UserRegister, everification } from "./Global";

const agregar = document.getElementById('registerbtn')

async function registrar (){

    const usuario = document.getElementById('newuser')
    const contraseña = document.getElementById("newpassword")

    const verificar = UserRegister(email,pass)
    const validation = await verificar

    if(validation != null){
        everification()
        alert('Registro Exitoso! '+email)
        window.location.href = 'Register.html'
    }else{
        alert('Error, autenticacion fallida')
        console.log('sesion '+email+' no validada')
    }

}

window.addEventListener('DOMContentLoaded',async()=>{
    agregar.addEventListener('click',registrar)
})