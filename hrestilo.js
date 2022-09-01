function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerText = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12) {
        //Bom Dia
        img.src = 'manha1.png'
        document.body.style.background = '#FFE4B5'
    }
    else if (hora >= 12 && hora <= 18) {
        //Boa Tarde
        img.src = 'tarde1.png'
        document.body.style.background = '#FF8C00'
    }
    else {
        //Boa Noite
        img.src = 'noite1.png'
        document.body.style.background = '#8B8386'
    }
}