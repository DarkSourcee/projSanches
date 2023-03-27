const telaProdutos = document.getElementById("confira-delicias")
const telaInicio = document.getElementById("inicio")

// navegar entre telas
if (telaProdutos){
    telaProdutos.addEventListener("click", () => {
        window.location.href = "../view/produtos.html"
    });
}

if (telaInicio){
    telaInicio.addEventListener("click", () => {
        window.location.href = "../index.html"
    });
}