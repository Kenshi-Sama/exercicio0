function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var titulo = window.document.querySelector('h1');

    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas!`;

    if (hora >= 6 && hora <= 11) {
        //BOM DIA
        img.src = "manha.png"
        document.body.style.background = '#cbdde5'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = "tarde.png"
        document.body.style.background = '#805f49'
    } else if (hora >= 1 && hora < 6) {
        //BOA MADRUGADA
        titulo.innerHTML = 'FELIZ HALLOWEEN'
        titulo.style.color = '#ea670a'
        msg.innerHTML = 'A madrugada não assusta, as <strong>Bruxas</strong> sim!'
        img.src = "halloween.png"
        document.body.style.background = '#000000'
    } else {
        // BOA NOITE 
        img.src = "noite.png"
        document.body.style.background = '#815973'
    }
}