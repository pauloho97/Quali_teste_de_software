function validar() {
    var tax = document.getElementById("tax").value;
    var nom = document.getElementById("nom").value;

      //isNan significa = is not number, se não é número.  
    if(isNaN(tax) || tax < 5 || tax > 20) {
        alert("ops, taxa não permitida");
        return false;
    }
        // pode ter letras maius. e mini. com espaço                                                                          
    if (!/^[a-zA-Z\s]+$/.test(nom) || nom.length < 3 || nom.length > 50) {   
        alert("permitido apenas nomes com letras de 3 a 50 caracteres");
    }

    return true
}
