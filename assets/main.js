document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.nav');

    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('active');
        nav.classList.toggle('active');
    });
});

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function changeSlide(direction) {
    currentSlide += direction;
    
    // Ajusta o índice se passar dos limites
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    // Move o carrossel
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Função para avançar slide automaticamente
function autoAdvanceSlide() {
    changeSlide(1);
}

// Avança o slide a cada 5 segundos
setInterval(autoAdvanceSlide, 6000);

function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
}

const produtos = {

internas: [

{

nome: 'Porta Branca Acabada',

imagem: './assets/imgs/produtos/portabrancaacabada.png',

},
{

nome: 'Porta Mogno Acabada',

imagem: './assets/imgs/produtos/portamognoacabada.png',

},
{

nome: 'Porta de Correr Branca',

imagem: './assets/imgs/produtos/portadecorrerbranca.png',

},
{

nome: 'Porta de Correr',

imagem: './assets/imgs/produtos/portadecorrer.png',

},
{

nome: 'Porta de Curupixá',

imagem: './assets/imgs/produtos/curupixa.jpeg',

},
{

nome: 'Porta de Ipê',

imagem: './assets/imgs/produtos/portadeipe.jpeg',

},
{

nome: 'Porta de Pinus',

imagem: './assets/imgs/produtos/pinus.jpeg',

},
{

nome: 'Porta de Tauari',

imagem: './assets/imgs/produtos/tauari.jpg',

},
{

nome: 'Porta Frisada',

imagem: './assets/imgs/produtos/portafrisada.jpg',

}

],

entrada: [

{

nome: 'Porta Almofadada Mista',

imagem: './assets/imgs/produtos/almofadadamista.jpg'

},

{

nome: 'Porta BBB Selada Cedro',

imagem: './assets/imgs/produtos/bbbseladacedro.jpeg'

},

{

nome: 'Porta Mexicana Tauari',

imagem: './assets/imgs/produtos/mexicanatauari.jpeg',

},

{

nome: 'Porta Torneada Mista',

imagem: './assets/imgs/produtos/torneadamista.jpg',

},
{

nome: 'Porta BBB Selada Eucalipto',

imagem: './assets/imgs/produtos/bbbseladaeucalipto.jpeg',

},
{

    nome: 'Porta Tijolinho Tauari',
    
    imagem: './assets/imgs/produtos/tijolinhotauari.png',
    
},
{

    nome: 'Porta Vidro Selada Eucalipto',
    
    imagem: './assets/imgs/produtos/vidroretoseladoeucalipto.jpg',
    
},
{

    nome: 'Porta Vidro Selada Cedro',
    
    imagem: './assets/imgs/produtos/vidrocurvoseladacedro.jpg',
    
},
{

    nome: 'Porta Malta Selada Cedro',
    
    imagem: './assets/imgs/produtos/maltaseladacedro.jpeg',
    
},
{

    nome: 'Porta Diagonal Mista',
    
    imagem: './assets/imgs/produtos/diagonalmista.jpg',
    
},
{

    nome: 'Porta Frisada Tauari',
    
    imagem: './assets/imgs/produtos/frisadatauari.jpeg',
    
},
{

    nome: 'Porta Gaveta Tauari',
    
    imagem: './assets/imgs/produtos/gavetatauari.png',
    
},
{

    nome: 'Porta Malta Tauari',
    
    imagem: './assets/imgs/produtos/maltatauari.jpg',
    
},
{

    nome: 'Porta BBB Tauari',
    
    imagem: './assets/imgs/produtos/bbbtauari.jpeg',
    
},
{

    nome: 'Porta Selada Frisada Eucalipto',
    
    imagem: './assets/imgs/produtos/seladafrisadaeucalipto.jpg',
    
},

],

fogo: [
{

nome: 'Caixilho de Cambará',

imagem: './assets/imgs/produtos/cambara.jpg'

},

{

nome: 'Caixilho de Pinus',
    
imagem: './assets/imgs/produtos/Caixilho de Pinus.png'
    
},

{

nome: 'Caixilho de Tauari',

imagem: './assets/imgs/produtos/Caixilho de Tauari.png'

},

{

nome: 'Caixilho Mogno Regulável',

imagem: './assets/imgs/produtos/Caixilho Mogno Regulável.png'

},
{

    nome: 'Caixilho Branco Regulável',
    
    imagem: './assets/imgs/produtos/Caixilho Branco Regulável.png'
    
}

],

promocoes: [

    {

        nome: 'Dobradiça Cromada',

        imagem: './assets/imgs/produtos/acessorios/Dobradiça Cromada.jpg'

    },

    {

        nome: 'Dobradiça de Sobrepor',

        imagem: './assets/imgs/produtos/acessorios/Dobradiça de Sobrepor.png'

    },

    {

        nome: 'Dobradiça de Sobrepor Preta',

        imagem: './assets/imgs/produtos/acessorios/Dobradiça de Sobrepor Preta.png'

    },

    {

        nome: 'Dobradiça Dourada',

        imagem: './assets/imgs/produtos/acessorios/Dobradiça Dourada.jpg'

    },

    {

        nome: 'Fechadura 1',

        imagem: './assets/imgs/produtos/acessorios/Fechadura 1.jpg'

    },

    {

        nome: 'Fechadura 2',

        imagem: './assets/imgs/produtos/acessorios/Fechadura 2.jpg'

    },

    {

        nome: 'Fechadura 3',

        imagem: './assets/imgs/produtos/acessorios/Fechadura 3.jpg'

    },

    {

        nome: 'Fechadura 4',

        imagem: './assets/imgs/produtos/acessorios/Fechadura 4.jpg'

    },

    {

        nome: 'Fechadura 5',

        imagem: './assets/imgs/produtos/acessorios/Fechadura 5.jpg'

    },

    {

        nome: 'Fechadura 6',

        imagem: './assets/imgs/produtos/acessorios/Fechadura 6.jpg'

    },

    {

        nome: 'Fechadura 7',

        imagem: './assets/imgs/produtos/acessorios/Fechadura 7.jpg'

    },

    {

        nome: 'Fechadura 9',

        imagem: './assets/imgs/produtos/acessorios/Fechadura 9.jpg'

    },
    {

        nome: 'Fechadura 10',

        imagem: './assets/imgs/produtos/acessorios/Fechadura 10.png'

    },

    {

        nome: 'Fechadura 11',

        imagem: './assets/imgs/produtos/acessorios/Fechadura 11.png'

    },

    {

        nome: 'Puxador Curvo Inox',

        imagem: './assets/imgs/produtos/acessorios/Puxador Curvo Inox.png'

    },

    {

        nome: 'Puxador Curvo Preto',

        imagem: './assets/imgs/produtos/acessorios/Puxador Curvo Preto.png'

    },

    {

        nome: 'Puxador Dourado',

        imagem: './assets/imgs/produtos/acessorios/Puxador Dourado.png'

    },

    {

        nome: 'Puxador Escovado',

        imagem: './assets/imgs/produtos/acessorios/Puxador Escovado.png'

    },

    {

        nome: 'Puxador Inox',

        imagem: './assets/imgs/produtos/acessorios/Puxador Inox.png'

    },

    {

        nome: 'Puxador Preto',

        imagem: './assets/imgs/produtos/acessorios/Puxador Preto.png'

    }

]

};


// Função para criar HTML do produto

function criarProdutoHTML(produto) {

const descontoHTML = produto.desconto > 0 ? 

`<span class="discount">-${produto.desconto}%</span>

<span class="old-price">R$${produto.precoAntigo},00</span>` : '';


return `

<div class="product">

<img src="${produto.imagem}" alt="${produto.nome}"/>

<div class="availability">

    <i class="fas fa-circle"></i>

    Em estoque, entrega em 1-7 dias

</div>

<div class="title">${produto.nome}</div>

<button class="button">Ver</button>

</div>

`;

}


// Função para carregar produtos por categoria

function carregarProdutos(categoria) {

const container = document.getElementById('productContainer');

container.innerHTML = '';


const produtosCategoria = produtos[categoria];

produtosCategoria.forEach(produto => {

container.innerHTML += criarProdutoHTML(produto);

});

}


// Evento de clique nas categorias

document.querySelectorAll('.category-btn').forEach(btn => {

btn.addEventListener('click', function() {

// Remove classe 'active' de todos os botões

document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));



// Adiciona classe 'active' no botão clicado

this.classList.add('active');


// Carrega produtos da categoria

const categoria = this.dataset.category;

carregarProdutos(categoria);

});

});


// Carrega produtos iniciais (internos)

carregarProdutos('internas');

