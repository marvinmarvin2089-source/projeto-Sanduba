const list = document.querySelector('ul');    // peguei minha ul, ou seja, minha lista, e vou trabalhar com ela.
const buttonShowAll = document.querySelector('.show-all');
const buttonMapAll = document.querySelector('.map-all');
const buttonSumAll = document.querySelector('.sum-all');
const buttonFilterAll = document.querySelector('.filter-all');

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    return newValue
}

function showall(productsArray) {
    let myLi = ''   // string vazia ela zera tudo ela reseta para que toda vez que eu clicar em um botão não aparece mais de um item. ou seja, cliquei aparece uma coisa, cliquei de novo aparece uma outra coisa. sem isso fica infilerando os meus itens.

    productsArray.forEach((product) => {
        myLi += `<li>
                    <img src="${product.src}">
                    <p>${product.name}</p>
                    <p class="item-price">R$ ${formatCurrency(product.price)}</p>
                </li>`
    })
    list.innerHTML = myLi
}


function mapAll() {
    const newPrices = menuOptions.map((product) => ({
        ...product,    // Copia todas as propriedades, repete tudo que não mudou -> Spread Operator.
        price: product.price * 0.9,  // 10% de desconto

    }))
    
    showall(newPrices)
} 

function sumAll() {
    const totalvalue = menuOptions.reduce((acc, product) => acc + product.price, 0)
// dessa forma vai aparecer na tela o valor total dos itens.
    list.innerHTML = `                                 
    <li>
        <p>O valor total dos itens é: R$ ${formatCurrency(totalvalue)}</p>
    </li>
    `

}


function filterAll() {
    const filtervegan = menuOptions.filter((product) => product.vegan)    
    showall(filtervegan)
}

buttonShowAll.addEventListener('click', () => showall(menuOptions))   //() => (isso signifique que eu chamei uma função anonima, ai ele não vai aparecer e ficar na tela, ele so vai aparecer quando eu clicar no botão)).
buttonMapAll.addEventListener('click', mapAll)                          // sinal que quando meu botão for clicado ele vai chamar essa funcao. que eu sinalizei acima.
buttonSumAll.addEventListener('click', sumAll)                                  // addEventListener serve para escutar um evento, quando um botão foi clicado, ele vai executar essa funcao.
buttonFilterAll.addEventListener('click', filterAll)