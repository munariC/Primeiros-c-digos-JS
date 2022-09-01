function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var res2 = document.getElementById('aquiVaiAImagem')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'imagem')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <= 3) {
                //Baby
                img.setAttribute('src', 'bbmenino.png')
            }else if (idade <= 13) {
                //Criança
                img.setAttribute('src', 'menino.png')
            }else if (idade <= 21) {
                //Jovem
                img.setAttribute('src', 'homemadulto.png')
            }else if (idade <= 60) {
                //Adulto
                img.setAttribute('src', 'homemadulto.png')
            }else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }  
        }   else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <= 3) {
                //Baby
                img.setAttribute('src', 'bbmenina.png')
            } else if (idade < 13) {
                //Criança
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'mulherjovem.png')
            }else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'mulheradulta.png')
            }else {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res2.appendChild(img)
    }
}