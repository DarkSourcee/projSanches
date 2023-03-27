const telaProdutos = document.getElementById("confira-delicias")
const telaInicio = document.getElementById("inicio")

// navegar entre telas
if (telaProdutos){
    telaProdutos.addEventListener("click", () => {
        window.location.href = "../produtos.html"
    });
}

if (telaInicio){
    telaInicio.addEventListener("click", () => {
        window.location.href = "../index.html"
    });
}


// vai fazer a importação html para colocar vários itens de uma vez só
async function carregaProdutos() {
    fetch("./products.json").then((res) => {
        return res.json();
    }).then(async function(data) {
        var html = ""

        var cont = 1;

        await data.Product.map((item) => {
            html += '<div class="itens">' +
                        '<img src="'+ item.patch +'" alt="">' +
                        '<div class="grid">' +
                            '<div>' +
                                '<p>' +  item.description + '</p>' +
                            '</div>' +
                            '<div>' +
                                '<p>R$ <span class="valor" id="valor_'+ cont +'">'+ item.value +'</span></p>' +
                                '<div class="flex">'+
                                    '<div class="valores">' +
                                        '<button class="aumenta" data-valor="'+ item.value +'" data-item="'+ cont +'">+</button>' +
                                        '<p class="qtde" id="qtde_'+ cont +'">' + item.amount +'</p>' +
                                        '<button class="diminui" data-valor="'+ item.value +'" data-item="'+ cont +'">-</button>' +
                                    '</div>' +
                                    "<button class='btn btn-outline-danger carrinho' data-item='" + JSON.stringify(item) + "' data-cont='"+ cont +"'>Adicionar ao carrinho</button>" +
                                '</div>'+
                            '</div>' +
                        '</div>' +
                    '</div>'

            cont++;
        })

        html += '<button class="btn btn-danger finalizar-compra">Finalizar compra</button>'
    
        $("#conteudo").html(html)

    })
}