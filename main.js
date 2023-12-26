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