//MODAL//

const caixas = document.querySelectorAll('.box')

caixas.forEach(caixa => {
    const verMais = caixa.querySelector('.verMais')
    const dialog = caixa.querySelector('dialog')
    const fechar = dialog.querySelector('.fechar')


    verMais.addEventListener('click', () =>{
        dialog.showModal()
    })

    fechar.addEventListener('click', () =>{
        dialog.close()
    })

})



//FILTRAGEM//
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('vinho-formulario');

    formulario.addEventListener('submit', function (e) {
        e.preventDefault(); 
        filtrarProdutos();   
    });

    
    document.getElementById('btn-limpar').addEventListener('click', limparFormulario);
});

function filtrarProdutos() {
    
    const categoriaSelect = document.getElementById('categorias').value.toLowerCase();
    const pesquisaTexto = document.getElementById('pesquisa').value.toLowerCase();
    const anoSelect = Array.from(document.querySelectorAll('.ano input[type="checkbox"]')).filter(c => c.checked).map(c => c.value); 

    
    document.querySelectorAll('.box').forEach(produto => {
        const categoria = produto.dataset.categoria.toLowerCase();
        const nome = produto.dataset.nome.toLowerCase();
        const idade = produto.dataset.idade;

        
        const condicaoCategoria = !categoriaSelect || categoria === categoriaSelect;
        const condicaoPesquisa = !pesquisaTexto || nome.includes(pesquisaTexto);
        const condicaoIdade = anoSelect.length === 0 || anoSelect.includes(idade);

        
        if (condicaoCategoria && condicaoPesquisa && condicaoIdade) {
            produto.style.display = 'flex';
        } else {
            produto.style.display = 'none';
        }
    });
}

function limparFormulario() {
    
    document.getElementById('pesquisa').value = '';
    document.getElementById('categorias').value = '';
    document.querySelectorAll('.ano input[type="checkbox"]').forEach(c => c.checked = false);
    
    document.querySelectorAll('.box').forEach(p => p.style.display = 'flex');
}
