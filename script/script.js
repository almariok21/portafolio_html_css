function login(){
    let usuario=document.getElementById("usuarios").value;
    let contraseña=document.getElementById("contraseñas").value;
        if (usuario =="admin"  && contraseña == "123" || usuario=="kevin" && contraseña=="admin") {
            alert("Bienvenido");
          window.location ="index.html";
        } else {
            alert('Nombre de usuario y clave incorrecta');
        }
}