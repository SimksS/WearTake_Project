import { data } from "./database.js";
import { newData } from "./newFunctions.js"
alert("Atenção! Este é um projeto de estudo sem fins lucrativos. Todas as imagens contidas são meramente ilustrativas.")
headerCreate()
function headerCreate(){
    //Criando menu header e h1
    let header = document.createElement('header')
    document.querySelector('body').appendChild(header)
    let nav = document.createElement('nav')
    nav.setAttribute("id","menu-top")
    document.querySelector("header").appendChild(nav)
    let shopTitle = document.createElement("h1")
    document.querySelector("#menu-top").appendChild(shopTitle)
    let shopName = document.createTextNode("Wear")
    document.querySelector("h1").appendChild(shopName)
    let addTyping = document.createElement('p')
    addTyping.setAttribute("class","typing-change")
    document.querySelector('h1').appendChild(addTyping)
    //Criando menu de navegação
    let navigationMenu = document.querySelector("#menu-top")
    navigationMenu.innerHTML += `
    <ul>
    <li class = "navigation-Menu"><a class="nav-item">Todos</a></li>
    <li class = "navigation-Menu"><a class="nav-item">Acessórios</a></li>
    <li class = "navigation-Menu"><a class="nav-item">Jaquetas</a></li>
    <li class = "navigation-Menu"><a class="nav-item">Camisetas</a></li>
    </ul>`
    shopInit()
}
function shopInit (){ 
    //criando containeres de armazenamento do conteudo
   let divSnow = document.createElement("div")
    divSnow.setAttribute("Class","Snow")
    document.querySelector("body").appendChild(divSnow)
   let mainTag = document.createElement("main")
   document.querySelector('.Snow').appendChild(mainTag)
   let sectionAll = document.createElement('section')
   sectionAll.setAttribute("id","products-grid")
   sectionAll.setAttribute("class","product-grid") 
   document.querySelector("main").appendChild(sectionAll)
   //criando as grids com os produtos
   let productMaker = document.querySelector("#products-grid")
   for (let i = 0 ; i < data.length ; i++){
       productMaker.innerHTML += `
       <section class="product-item `+data[i].tag+`">
       <figure class="product-img">
           <img src="`+data[i].img+`" alt="`+data[i].nameItem+`" class = "iten-img">
       </figure>
       <p class="category" >`+data[i].tag+`</p>
       <h2 class = "product-title">`+data[i].nameItem+`</h2>
       <p class="description">`+data[i].description+`</p>
       <ul>
           <li class="price" >R$ `+data[i].value.toFixed(2).replace('.',",")+`</li>
           <li><button class = "addTo">Adicionar ao carrinho</button></li>
       </ul>
   </section> 
       `
   }
  
   cartInit()
}
function cartInit(){
    //criando containers externos do carrinho
    let sectionAside = document.createElement('section')
    sectionAside.setAttribute("id","menu-aside")
    document.querySelector("main").appendChild(sectionAside)
   
    let searchPlace = document.createElement('section')
    searchPlace.setAttribute("class","search-aside-menu")
    document.querySelector("#menu-aside").appendChild(searchPlace)
    let searchInput = document.createElement("input")
    searchInput.type = "text"
    searchInput.placeholder = "Digite aqui sua pesquisa"
    searchInput.setAttribute ("class","input-field" )
    document.querySelector(".search-aside-menu").appendChild(searchInput)
    let searchButton = document.createElement("button")
    searchButton.className = "search-button"
    let searchText = document.createTextNode("Pesquisar")
    document.querySelector(".search-aside-menu").appendChild(searchButton)
    document.querySelector(".search-button").appendChild(searchText)
    
    let buyCart = document.createElement('section')
    buyCart.setAttribute("class","shop-cart")
    document.querySelector("#menu-aside").appendChild(buyCart)
  //------------------------------------------------------------- 
    
    //criando containers internos do carrinho
    let cartTitle = document.createElement("section")
    cartTitle.setAttribute("class","shop-cart-title")
    document.querySelector(".shop-cart").appendChild(cartTitle)

    let cartItens = document.createElement("section")
    cartItens.setAttribute("class","shop-cart-itens")
    document.querySelector(".shop-cart").appendChild(cartItens)

    //-----------------------------------------------------------
   
    //Adicionando elementos às sections
    let carName = document.createElement("h2")
    carName.setAttribute("class","ShopTitle")
    let carNameShop = document.createTextNode("Carrinho de compras")
    document.querySelector(".shop-cart-title").appendChild(carName)
    document.querySelector(".ShopTitle").appendChild(carNameShop)

    let noItens =  document.createElement("section")
    noItens.setAttribute("class","no-itens")
    document.querySelector(".shop-cart-itens").appendChild(noItens)
    let noItensName = document.createElement("h3")
    noItensName.className = "noitens-name"
    let noItensNameAdd = document.createTextNode("Carrinho vazio")
    document.querySelector(".no-itens").appendChild(noItensName)
    document.querySelector(".noitens-name").appendChild(noItensNameAdd)
    let noItensSub = document.createElement("p")
    noItensSub.className = "noitens-sub"
    let noItensSubAdd = document.createTextNode("Adicione itens")
    document.querySelector(".no-itens").appendChild(noItensSub)
    document.querySelector(".noitens-sub").appendChild(noItensSubAdd)
    let carrinho = document.querySelector(".shop-cart")
    carrinho.innerHTML += `
    <section class="checkout-view invisible">
        <section class="quantity">
            <p class="quantity-title">Quantidade: </p>
            <p class="quantity-value">0</p>
        </section>
        <section class="price-checkout">
            <p class="price-title">Total: </p>
            <ul class="price-value">
                <li class="coin">R$</li>
                <li class="total-price">0,00</li>
            </ul>
        </section>
    </section> `
    let sectionProduct = document.createElement('section')
    sectionProduct.setAttribute("class","cart-itens")
    document.querySelector(".shop-cart-itens").appendChild(sectionProduct)
    let cartProduct = document.createElement("section")
    cartProduct.setAttribute("class","cart-product")
    document.querySelector(".cart-itens").appendChild(cartProduct)
    let cupomCheckout = document.createElement("section")
    cupomCheckout.classList.add("cupom-place")
    document.querySelector(".checkout-view").appendChild(cupomCheckout)
    let insideCheckout = document.querySelector(".cupom-place")
    insideCheckout.innerHTML += `
    <ul class="cupom">
        <li>
            <ul class="cupom-input">
                <li class="cupom-type"><input type="text" placeholder="Insira seu cupom de desconto"></li>
                <li class="cupom-enter"><button>Aplicar</button></li>
            </ul>
        </li>
        <li class = "result-cupom"></li>
        <li class="finish-cart"><button>Checkout</button></li>
    </ul>`
    ready()
}

//Funçao Secretária que chama as demais funções de acordo com
 // evento capturado
function ready(){
    let addCart = document.getElementsByClassName("addTo")
    for (let i = 0 ; i < addCart.length ; i++){
        let add = addCart[i]
        add.addEventListener('click',adicionarCarrinho)
        
    }
    let navFilter = document.getElementsByClassName("navigation-Menu")
    for (let i = 0 ; i < navFilter.length ; i++){
        let filterNav = navFilter[i]
        filterNav.addEventListener('click',filterCat)
    }
    let KeySearch = document.querySelector(".input-field")
    KeySearch.addEventListener("keyup",captureText)
   
}
function adicionarCarrinho(event){
    //obtendo o elemento pai atraves do comando parentNode em cadeia
    let addCart = event.target
    let productShop = addCart.parentNode
    let fatherProduc = productShop.parentNode
    let aboveProduct = fatherProduc.parentNode
    //obtido o elemento pai solicitado, utilizamos o queryselector para pegar o elementos necessários
    let title = aboveProduct.querySelector(".product-title").innerText
    let price = aboveProduct.querySelector(".price").innerText.replace(",",".")
    let img = aboveProduct.querySelector(".iten-img").src
    produtosCarrinho(title,price,img)
    discount()
}

function produtosCarrinho(title,price,img){
    //recido os parametros,devolvemos a visibilidade dos elementos
    //que compõe a utilização adequada do carrinho de compras
    let invisible = document.querySelector(".no-itens")
    invisible.classList.add("invisible")
    let checkout = document.querySelector(".checkout-view")
    checkout.classList.remove("invisible")
    //utilizamos o recurso
     let ulProduct = document.createElement ("ul")
     ulProduct.setAttribute("class","cart-product-item")
     let placeSelector = document.getElementsByClassName("cart-product")[0]
     let addCarrinho =`
         <li class="cart-image">
            <img src=${img} alt="">
         </li>
            <li>
                    <ul class="cart-description">
                        <li class="cart-product-title">${title}</li>
                        <li class="cart-product-price">${price}</li>
                        <li class="cart-remove"><button>Remover produto</button></li>
                    </ul>   
            </li>`
    ulProduct.innerHTML = addCarrinho
    placeSelector.appendChild(ulProduct)
    newReady()
    atualizarTotal()
}
//função cujo parametro é receber as informações de remoção
// do carrinho e repassar para função que faz o procedimento
function newReady (){
    let cartRemove = document.querySelectorAll(".cart-remove")
    for (let i = 0 ; i < cartRemove.length; i++){
        let remove = cartRemove[i]
        remove.addEventListener('click',removerCarrinho)
    }
    let discountCupom =  document.querySelector(".cupom-enter button")
    discountCupom.addEventListener("click",discount)
} 
//função que remove os itens do carrinho
function removerCarrinho(event){
    let removeCart = event.target
    let productShop = removeCart.parentNode
    let fatherProduc = productShop.parentNode
    let aboveFather = fatherProduc.parentNode
    aboveFather.parentNode.remove()  
    atualizarTotal()
    discount()
}
//função para atualizar o total 
function atualizarTotal() {
    let productItens = document.querySelectorAll(".cart-product-item")
    let total = 0
    let quantidade = 0
    for (let i = 0 ; i < productItens.length; i++){
        let productItem = productItens[i]
        let precoElemento = productItem.querySelector('.cart-product-price')
    
        let preco = parseFloat(precoElemento.innerText.replace("R$ ",""))
        total += preco
        quantidade += 1
    }
    document.querySelector(".total-price").innerHTML = total.toFixed(2).replace(".",",")
    document.querySelector(".quantity-value").innerHTML = quantidade
    emptyCart (quantidade)
}
//função que mudar o visual do carrinho quando está vazio
function emptyCart(quantidade){
    if(quantidade == 0){
        let invisible = document.querySelector(".no-itens")
        invisible.classList.remove("invisible")
        let checkout = document.querySelector(".checkout-view")
        checkout.classList.add("invisible")
        discountClear()
        // document.location.reload(true)
    }
}
//função que filtra por categoria
function filterCat (event) {
    let styleRemove = document.getElementsByClassName("nav-item")
    for (let i = 0 ; i < styleRemove.length ; i++){
       if(styleRemove[i].classList.contains("bold-style") == true){
            let remove = styleRemove[i]
           remove.classList.remove("bold-style")
       }
    }
    let Sum = data.concat(newData)
    let categoryFilter = event.target
    let SearchBy = categoryFilter.innerText
    let filtro = data.filter((item)=>item.tag[0] === SearchBy ||item.nameItem.toLowerCase().includes(SearchBy.slice(0,-1).toLowerCase()) )
    let filtered = newData.filter((iten)=> iten.description.includes(SearchBy.slice(0,-1).toLowerCase()) || iten.nameItem.toLowerCase().includes(SearchBy.slice(0,-1)))

        if (SearchBy == "Todos"){
            categoryFilter.classList.add("bold-style")
            remakeGrid(Sum)
        }
        else {
            if (filtro.length > 0 && filtered.length > 0){
                categoryFilter.classList.add("bold-style")
                let newFiltro = filtro.concat(filtered)
                remakeGrid(newFiltro)
            }
             else if (filtro.length == 0){
                categoryFilter.classList.add("bold-style")
                remakeGrid(filtered)
            }
            else if (filtro.length > 0 && filtered == 0) {
                categoryFilter.classList.add("bold-style")
                remakeGrid(filtro)
            }
        }
}
//função que refaz a tela baseado nos parametros recebidos    
function remakeGrid (filter){
    let maxDatabaseCount = data.length
    let maxNDatabaseCount = newData.length
    let removeAll = document.querySelectorAll(".product-item")
    for (let i = 0 ; i < removeAll.length ; i++){
        let removeItem = removeAll[i]
        removeItem.remove()
    }
    if (filter.length < maxDatabaseCount - 1 || maxNDatabaseCount - 1) {
        let reorder = document.querySelector("#products-grid")
        reorder.style.justifyContent = "flex-start"
        reorder.className = "remake-grid"
    }
    let addFiltered = document.querySelector("#products-grid")
    if (filter.length == 0){
        let styleRemove = document.getElementsByClassName("nav-item")
        for (let i = 0 ; i < styleRemove.length ; i++){
           if(styleRemove[i].classList.contains("bold-style") == true){
                let remove = styleRemove[i]
                let lastRemove = styleRemove[0]
               remove.classList.remove("bold-style")
               lastRemove.classList.add("bold-style")
           }
        }
        for (let i = 0 ; i < data.length; i++){
            addFiltered.innerHTML += `
            <section class="product-item `+data[i].tag+`">
                <figure class="product-img">
                    <img src="`+data[i].img+`" alt="`+data[i].nameItem+`" class = "iten-img">
                </figure>
                <p class="category" >`+data[i].tag+`</p>
                <h2 class = "product-title">`+data[i].nameItem+`</h2>
                <p class="description">`+data[i].description+`</p>
                <ul>
                    <li class="price" >R$ `+data[i].value.toFixed(2).replace('.',',')+`</li>
                    <li><button class = "addTo">Adicionar ao carrinho</button></li>
                </ul>
            </section> 
            `
    }
}
    if (filter.length > 0){
        for (let i = 0 ; i < filter.length; i++){
        addFiltered.innerHTML += `
        <section class="product-item `+filter[i].tag+`">
            <figure class="product-img">
                <img src="`+filter[i].img+`" alt="`+filter[i].nameItem+`" class = "iten-img">
            </figure>
            <p class="category" >`+filter[i].tag+`</p>
            <h2 class = "product-title">`+filter[i].nameItem+`</h2>
            <p class="description">`+filter[i].description+`</p>
            <ul>
                <li class="price" >R$ `+filter[i].value.toFixed(2).replace('.',',')+`</li>
                <li><button class = "addTo">Adicionar ao carrinho</button></li>
            </ul>
        </section> 
        `
    }
}
    
    ready ()
    newReady()
}

//função para ler o que é escrito na  barra de pesquisa
function captureText(event){
     let x = document.querySelector(".input-field").value
     let y = []
    for(let i = 0 ; i < data.length; i++){
        if (x.length > 0){
            if(data[i].nameItem.toLowerCase().includes(x.toLowerCase()) || data[i].tag[0].toLowerCase().includes(x.toLowerCase()) || data[i].description.toLowerCase().includes(x.toLowerCase())){
                y.push(data[i])
            }
        }
    }
    for(let i = 0 ; i < newData.length; i++){
        if (x.length > 0){
            if(newData[i].nameItem.toLowerCase().includes(x.toLowerCase()) || newData[i].tag[0].toLowerCase().includes(x.toLowerCase()) || newData[i].description.toLowerCase().includes(x.toLowerCase())){
                    y.push(newData[i])
                }
            }
        }
 
    
    remakeGrid(y)
}

//Novas funcionalidades
addAdvertising()
function addAdvertising (){
    let advertisingSlide = document.createElement('div')
    let queueUp = document.querySelector("main")
    advertisingSlide.setAttribute("id","slider-container")
    document.querySelector(".Snow").insertBefore(advertisingSlide,queueUp)
    let slider = document.querySelector("#slider-container")
    slider.innerHTML +=`
    <div class = "slider">
        <img class="fashion selected" src="./slider/Fashion-NewCollection.png" alt="Image1" >
        <img src="./slider/Kids-wear.jpg" alt="Image2" class="Kids">
        <img src="./slider/Summer-Wear.png" alt="Image3" class = "Summer">
    </div>
    <div class = "slider">
        <img  src="./slider/Winter-Wear.jpg" alt="Image1" class = "Winter">
        <img src="./slider/Winter-Kids.jpg"  alt="Image2" class = "Winter">
        <img src="./slider/Men-Winter-Wear.jpg" alt="Image3" class = "Winter">
    </div>
    <div class = "slider">
        <img  src="./slider/Gym-Wear.jpg" alt="Image1" class = "Gym">
        <img src="./slider/Fitness-Wear.jpg" alt="Image2" class = "Gym">
        <img src="./slider/Fitness-Collection.jpg" alt="Image3" class = "Gym">
    </div>      
        `
      
}
//variáveis globais para função para mudar imagens
let time = 5000,
currentImageIndex = 0,
images = document.querySelectorAll(".slider img"),
max = images.length;
//função que altera a imagem
function nextImage() {
images[currentImageIndex].classList.remove("selected")
currentImageIndex++
if(currentImageIndex >= max)
    currentImageIndex = 0
images[currentImageIndex].classList.add("selected")
 let position = document.querySelector(".selected")
 position.addEventListener("click",advertisingSelected)
}
//função inicia o muda imagem
export function start() {
setInterval(() => {
    nextImage()
}, time)
}
window.addEventListener("load", start)

// variáveis globais para a função que muda o texto
const typedTextSpan = document.querySelector(".typing-change");

const textArray = ["Summer", "Winter", "Fitness", "Take"];
const typingDelay = 150;
const erasingDelay = 75;
const newTextDelay = 2000; //delay entre uma palavra e outra
let textArrayIndex = 0;
let charIndex = 0;
 let indexas = document.querySelector('h1')
//função que escreve o texto
function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    indexas.style.color = "white"
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    
    setTimeout(type, typingDelay);
  } 
  else {
    
  	setTimeout(erase, newTextDelay);
  }
}
//função que apaga o texto
function erase() {
	if (charIndex > 0) {
        indexas.style.color = "#4af80b"
        typedTextSpan.classList.add('color1')
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    typedTextSpan.classList.remove('color1')
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { 
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

function advertisingSelected (pointer){
    let newGrid = pointer.target
    let allNdProducts = [] 
    for(let i = 0 ; i < newData.length; i ++){
        allNdProducts.push(newData[i].identifier)
    }
    let AllNdCat = Array.from(new Set (allNdProducts))
    if (newGrid.classList.contains("selected")){
        for (let i = 0; i < AllNdCat.length ; i++){
            if(newGrid.classList.contains(AllNdCat[i])){
                let productFiltered = newData.filter((item) => item.identifier === AllNdCat[i])
                remakeGrid(productFiltered)
            }
        }
    }

}
//Função para gerar código de desconto
function discount(){
    let message = document.querySelector(".result-cupom")
    message.style.width = "280px"
    message.style.display = "none"
    
    let verifyDiscount = document.querySelector(".cupom-type input").value
    let price = document.querySelector(".total-price").innerText.replace(",",".")
    let itensPrice = document.querySelectorAll(".cart-product-price")
    let totalPrice = 0
    for (let i = 0 ; i < itensPrice.length; i++){
        let parcialPrice = itensPrice[i].innerText.replace("R$ ","")
        totalPrice += parseFloat(parcialPrice)
    }
    //Codigos de desconto
    const DiscountsCard = [{nome:"Wear10%", DescontoAplicado: price - (totalPrice/10)},
                           {nome:"Wear20Reais", DescontoAplicado: price-20},
                           {nome:"Verao10", DescontoAplicado: price - 10},
                           {nome:"Inverno30", DescontoAplicado: price - 30},
                           {nome:"gerentemaluco50", DescontoAplicado: price - (totalPrice/2)}]
                           
    let  discountMatch = DiscountsCard.filter((item)=> item.nome === verifyDiscount)
    let colorCh = document.querySelector(".cupom-type input")
    colorCh.style.background = "white"
    colorCh.style.color = "black"

    let changeVisibility = document.querySelector(".cupom-input")
    changeVisibility.style.display = "flex"
   
    //Codição de preço minimo para desconto
    if(discountMatch.length > 0 && totalPrice > 50){
         let colorCh = document.querySelector(".cupom-type input")
         colorCh.style.background = "green"
         message.style.display = "flex"
         message.innerHTML = "Cupom aplicado com sucesso!"
         message.style.color = "green"
         message.style.fontWeight = "600"
         let changeVisibility = document.querySelector(".cupom-input")
         changeVisibility.style.display = "none"
         let newPrice = discountMatch[0].DescontoAplicado
         document.querySelector(".total-price").innerHTML = newPrice.toFixed(2).replace(".",",")

    }
    else if (discountMatch.length > 0 && totalPrice < 50){
        let colorCh = document.querySelector(".cupom-type input")
         colorCh.style.background = "red"
         message.style.display = "flex"
         message.innerHTML = "Cupom válido apenas para compras acima de R$ 50,00!"
         message.style.color = "red"
         message.style.paddingTop = "10px"
         setTimeout(()=> {message.innerHTML = ""},1800)
    }
    else if (discountMatch.length == 0 && verifyDiscount.length > 0) {
        let colorCha = document.querySelector(".cupom-type input")
         colorCha.style.boxShadow; "0px 0px 20px red"
        colorCha.classList.add("error")
        let message = document.querySelector(".result-cupom")
        message.style.display = "flex"
        message.innerHTML = "Codigo inválido!"
        message.style.color = "red"
        setTimeout(()=> {message.innerHTML = ""},1800)
    }
    setTimeout(()=> {colorCh.classList.remove("error")},1000)
    
}
function discountClear(){
    document.querySelector(".cupom-type input").value = "" 
}
