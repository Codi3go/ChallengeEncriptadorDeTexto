function encriptacion() {
    var textoEncriptar = document.getElementById('textoEncriptar').value;
    if (textoEncriptar == '') {
        return;
    }
    var imagen = document.getElementById('empty-state');
    imagen.classList.add('hidden')
    var textoEncriptado = textoEncriptar
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    document.getElementById('encripted-text').textContent = textoEncriptado;
    const encriptedBlock = document.getElementById('encripted-block');
    encriptedBlock.classList.remove('hidden');
    encriptedBlock.classList.add('visible');
}

function desencriptacion() {
    var textoEncriptar = document.getElementById('textoEncriptar').value;
    if (textoEncriptar == '') {
        return;
    }
    const encriptedBlock = document.getElementById('encripted-block');
    encriptedBlock.classList.remove('hidden');
    encriptedBlock.classList.add('visible');

    document.getElementById('empty-state').classList.add('hidden');
    var textoEncriptado = textoEncriptar
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.getElementById('encripted-text').textContent = textoEncriptado;
}

function copiar() {
    
    const textArea = document.getElementById('encripted-text');

    navigator.clipboard.writeText(textArea.textContent);
    textArea.textContent = "";

    const emptyBlock = document.getElementById('empty-state');
    emptyBlock.classList.remove('hidden');
    emptyBlock.classList.add('visible');

    const encriptedBlock = document.getElementById('encripted-block');
    encriptedBlock.classList.remove('visible');
    encriptedBlock.classList.add('hidden');

    const textoEncriptar = document.getElementById('textoEncriptar');
    textoEncriptar.value = "";
}


