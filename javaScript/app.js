function remover_item(id, texto){
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

function copiar(){
    let principal__criptografado = document.getElementById('nenhuma_mensagem').innerText;

    let textarea = document.createElement('textarea');
            textarea.textContent = principal__criptografado;
            document.body.appendChild(textarea);

            textarea.select();

            document.execCommand('copy');

            document.body.removeChild(textarea);

    remover_item('botao_copiar', 'Copiado');
}

function criptografar(){
    let texto_criptografar = document.getElementById('principal__cripto').value;

        let principal__criptografado = '';

        for(i = 0; i < texto_criptografar.length; i++) {

            if (texto_criptografar[i] === 'a') {
                principal__criptografado += 'ai';
            } else if(texto_criptografar[i] === 'e'){
            principal__criptografado += 'enter';
            } else if(texto_criptografar[i] === 'i'){
                principal__criptografado += 'imes';
            } else if(texto_criptografar[i] === 'o'){
                principal__criptografado += 'ober';
            } else if(texto_criptografar[i] === 'u'){
                    principal__criptografado += 'ufat';
            } else {
                principal__criptografado += texto_criptografar[i];
            }
            }
            
            let letrasMaiusculas = principal__criptografado.match(/[A-Z]/g);
            let acento = principal__criptografado.match(/[á-ú]/g);

            if(letrasMaiusculas){
                remover_item('nenhuma_mensagem', 'Há letras maiúsculas no seu texto!');
            } else if (acento){
                remover_item('nenhuma_mensagem', 'O seu texto contem acentuação');
            }else {

                remover_item('texto_deseja', '');
                remover_item('nenhuma_mensagem', principal__criptografado);
                remover_item('botao_copiar', 'Copiar');
                let img = document.getElementById('codigo_imagem');
                    img.parentNode.removeChild(img);
            }
}

function descriptografar(){

    let principal__criptografado = document.getElementById('principal__cripto').value;
    let texto_descriptografado = '';

    for(let i = 0; i < principal__criptografado.length; i++) {
        if (principal__criptografado.substring(i, i + 2) === 'ai') {
            texto_descriptografado += 'a';
            i++;
        } else if(principal__criptografado.substring(i, i + 5) === 'enter') {
            texto_descriptografado += 'e';
            i += 4;
        } else if(principal__criptografado.substring(i, i + 4) === 'imes') {
            texto_descriptografado += 'i';
            i += 3;
        } else if(principal__criptografado.substring(i, i + 4) === 'ober') {
            texto_descriptografado += 'o';
            i += 3;
        } else if(principal__criptografado.substring(i, i + 4) === 'ufat') {
            texto_descriptografado += 'u';
            i += 3;
        } else {
            texto_descriptografado += principal__criptografado[i];
        }
    }
    let letrasMaiusculas = principal__criptografado.match(/[A-Z]/g);
    let acento = principal__criptografado.match(/[á-ú]/g);

    if(letrasMaiusculas){
        remover_item('nenhuma_mensagem', 'Há letras maiúsculas no seu texto!');
    } else if (acento){
        remover_item('nenhuma_mensagem', 'O seu texto contem acentuação!');
    }else {

    remover_item('texto_deseja', '');
    remover_item('nenhuma_mensagem', texto_descriptografado);
    remover_item('botao_copiar', 'Copiar');
    let img = document.getElementById('codigo_imagem');
        img.parentNode.removeChild(img);      

        console.log(texto_descriptografado);
        console.log(principal__criptografado);
        console.log(i);
    }
}