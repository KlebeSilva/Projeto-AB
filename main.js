const form = document.getElementById("form-container");
let dadoA = document.getElementById("dado-A");
let dadoB = document.getElementById("dado-B");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let p = document.getElementById("final-menssagem")
    if (dadoB.value > dadoA.value) {
        p.innerHTML =`Sim, o número ${dadoB.value}(B) é maior que o número ${dadoA.value}(A)`;
        p.style.display="block";
    }else {
        p.innerHTML =`Não, o número ${dadoB.value}(B) é menor que o número ${dadoA.value}(A)` ;
        p.style.display="block";
    }
    dadoA.value= "";
    dadoB.value= "";
});



/*function verificador() {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

    let dadoA = document.getElementById("dado-A").value;
    let dadoB = document.getElementById("dado-B").value;
    if (dadoB > dadoA) {
        document.getElementById("final-menssagem").innerHTML ="mensagem de sucesso";
    }else {
        document.getElementById("final-menssagem").innerHTML ="mensagem de erro";
    }
})
}

//let containerMenssageSucess = getElementById("sucess-menssage")
//let containerMenssageErrorr = getElementById("error-menssage")
    const tbnSubmit = document.getElementById("btn-Submit")
btnSubmit.addEventListener("keyup") {
    resultado()
}

if (resultado() == true) {
    const msgA = `mensagem de sucesso`
    const containerMenssagemSucess = document.querySelector(".sucess-menssage");
    containerMenssagemSucess.innerHTML = MensagemSucesso;
    containerMenssagemSucess.style.display = "block";
}


    if() {
        const msgA = `mensagem de sucesso`
        const containerMenssagemSucess = document.querySelector(".sucess-menssage");
        containerMenssagemSucess.innerHTML = MensagemSucesso;
        containerMenssagemSucess.style.display = "block";
    }else {
        const msgB = `O numero é invalido, B menor que A`
        const containerMenssagemSucess = document.querySelector(".sucess-menssage");
        containerMenssagemSucess.innerHTML = msgB;
        containerMenssagemSucess.style.display = "block";
    }
})*/
