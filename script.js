function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');

    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas!`;

    if (hora > 0 ) {
        //BOM DIA
        img.src = "manha.png"
        document.body.style.background = '#cbdde5'
    } else if (hora > 11 && hora <= 18) {
        //BOA TARDE
        img.src = "tarde.png"
        document.body.style.background = '#805f49'
    } else {
        // BOA NOITE 
        img.src = "noite.png"
        document.body.style.background = '#815973'
    }
}