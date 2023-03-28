const telaProdutos = document.getElementById("confira-delicias")
const telaInicio = document.getElementById("inicio")

var carrinho = []

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

function excluirItem(x1){
    var item = $(x1).data("item")
    var cont = $(x1).data("cont")
    var qtde = parseInt($("#qtde_" + cont).html())
    var valor = parseFloat($("#valor_" + cont).html())

    var qtdeCarrinho = document.getElementById("qtde-carrinho")

    console.log(item)
    console.log(x1)
    // Verifica se o item já existe no carrinho
    var index = carrinho.findIndex(x => x.id === item.id);

    //Se existir apaga o item
    if (index !== -1) {
        carrinho.splice(index, 1)
    }

    let qtdeAdicionada = carrinho.length
    qtdeCarrinho.innerHTML = qtdeAdicionada

    //recarrega a página do carrinho de compras
    var html = ""
    carrinho.map((item)=>{
        // Adiciona as informações do item na variável html
        html += "<div class='conteudo-carrinho-compras'>"
        html += "<img src='" + item.imagem + "' alt='" + item.nome + "' />"
        html += "<div class='info'>"
        html += "<p><strong>Nome:</strong> " + item.nome + "</p>"
        html += "<p><strong>Quantidade:</strong> " + item.qtde + "</p>"
        html += "<p><strong>Valor</strong>: R$ " + item.valor + "</p>"
        html += "</div>"
        html += "</div>"
        html += "<button type='button' class='btn btn-outline-danger excluir-item' data-item='"+ JSON.stringify(item) +"' onclick='excluirItem($(this))'><i class='fa-regular fa-trash-can fa-bounce'></i> Excluir item</button><br>"
        html += "<hr>"
    })

    // Define o conteúdo HTML da div "carrinho-info" com as informações dos itens do carrinho
    document.getElementById("conteudo-carrinho").innerHTML = html
}