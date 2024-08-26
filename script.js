function criptografar() {
    let texto = document.getElementById("inputText").value;
    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputText").value = textoCriptografado;

    // Atualiza a mensagem no lado direito
    document.getElementById("outputMessage").style.display = "none";
}

function descriptografar() {
    let texto = document.getElementById("inputText").value;

    // Verifica se a mensagem possui as sequências criptografadas
    if (!/enter|imes|ai|ober|ufat/.test(texto)) {
        document.getElementById("outputText").value = "";
        document.getElementById("outputMessage").style.display = "block";
        return;
    }

    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputText").value = textoDescriptografado;

    // Oculta a mensagem de erro
    document.getElementById("outputMessage").style.display = "none";
}

function copiarTexto() {
    let textoCopiado = document.getElementById("outputText");
    textoCopiado.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
}
