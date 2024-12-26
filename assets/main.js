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

link: './brancaacabada.html'

},
{

nome: 'Porta Mogno Acabada',

imagem: './assets/imgs/produtos/portamognoacabada.png',

link: './portamognoacabada.html'

},
{

nome: 'Porta de Correr Branca',

imagem: './assets/imgs/produtos/portadecorrerbranca.png',

link: './correrbranca.html'

},
{

nome: 'Porta de Correr',

imagem: './assets/imgs/produtos/portadecorrer.png',

link: './portadecorrer.html'

},
{

nome: 'Porta de Curupixá',

imagem: './assets/imgs/produtos/curupixa.jpeg',

link: './curupixa.html'

},
{

nome: 'Porta de Ipê',

imagem: './assets/imgs/produtos/portadeipe.jpeg',

link: './ipe.html'

},
{

nome: 'Porta de Pinus',

imagem: './assets/imgs/produtos/pinus.jpeg',

link: './pinus.html'

},
{

nome: 'Porta de Tauari',

imagem: './assets/imgs/produtos/tauari.jpg',

link: './tauari.html'

},
{

nome: 'Porta Frisada',

imagem: './assets/imgs/produtos/portafrisada.jpg',

link: './frisada.html'

}

],

entrada: [

{

nome: 'Porta Almofadada Mista',

imagem: './assets/imgs/produtos/almofadadamista.jpg',

link: './almofadadamista.html'

},

{

nome: 'Porta BBB Selada Cedro',

imagem: './assets/imgs/produtos/bbbseladacedro.jpeg',

link: './bbbseladacedro.html'

},

{

nome: 'Porta Mexicana Tauari',

imagem: './assets/imgs/produtos/mexicanatauari.jpeg',

link: './mexicanatauari.html'

},

{

nome: 'Porta Torneada Mista',

imagem: './assets/imgs/produtos/torneadamista.jpg',

link: './torneadamista.html'

},
{

nome: 'Porta BBB Selada Eucalipto',

imagem: './assets/imgs/produtos/bbbseladaeucalipto.jpeg',

link: './bbbseladaeucalipto.html'

},
{

    nome: 'Porta Tijolinho Tauari',
    
    imagem: './assets/imgs/produtos/tijolinhotauari.png',

    link: './tijolinhotauari.html'
    
},
{

    nome: 'Porta Vidro Selada Eucalipto',
    
    imagem: './assets/imgs/produtos/vidroretoseladoeucalipto.jpg',

    link: './vidroseladaeucalipto.html'
    
},
{

    nome: 'Porta Vidro Selada Cedro',
    
    imagem: './assets/imgs/produtos/vidrocurvoseladacedro.jpg',

    link: './vidroseladacedro.html'
    
},
{

    nome: 'Porta Malta Selada Cedro',
    
    imagem: './assets/imgs/produtos/maltaseladacedro.jpeg',

    link: './maltaseladacedro.html'
    
},
{

    nome: 'Porta Diagonal Mista',
    
    imagem: './assets/imgs/produtos/diagonalmista.jpg',

    link: './diagonalmista.html'
    
},
{

    nome: 'Porta Frisada Tauari',
    
    imagem: './assets/imgs/produtos/frisadatauari.jpeg',

    link: './frisadatauari.html'
    
},
{

    nome: 'Porta Gaveta Tauari',
    
    imagem: './assets/imgs/produtos/gavetatauari.png',

    link: './gavetatauari.html'
    
},
{

    nome: 'Porta Malta Tauari',
    
    imagem: './assets/imgs/produtos/maltatauari.jpg',

    link: './maltatauari.html'
    
},
{

    nome: 'Porta BBB Tauari',
    
    imagem: './assets/imgs/produtos/bbbtauari.jpeg',

    link: './bbbtauari.html'
    
},
{

    nome: 'Porta Selada Frisada Eucalipto',
    
    imagem: './assets/imgs/produtos/seladafrisadaeucalipto.jpg',

    link: './seladafrisadaeucalipto.html'
    
},

],

fogo: [
{

nome: 'Caixilho de Cambará',

imagem: './assets/imgs/produtos/cambara.jpg',

link: './caixilhocambara.html'

},

{

nome: 'Caixilho de Pinus',
    
imagem: './assets/imgs/produtos/Caixilho de Pinus.png',

link: './caixilhopinus.html'
    
},

{

nome: 'Caixilho de Tauari',

imagem: './assets/imgs/produtos/Caixilho de Tauari.png',

link: './caixilhotauari.html'

},

{

nome: 'Caixilho Mogno Regulável',

imagem: './assets/imgs/produtos/Caixilho Mogno Regulável.png',

link: './caixilhomognoregulavel.html'

},
{

    nome: 'Caixilho Branco Regulável',
    
    imagem: './assets/imgs/produtos/Caixilho Branco Regulável.png',

    link: './caixilhobrancoregulavel.html'
    
}

],

promocoes: [

    {

        nome: 'Dobradiça Cromada',

        imagem: './assets/imgs/produtos/acessorios/Dobradiça Cromada.jpg',

        link: './dobradicacromada.html'

    },

    {

        nome: 'Dobradiça de Sobrepor',

        imagem: './assets/imgs/produtos/acessorios/Dobradiça de Sobrepor.png',

        link: './dobradicasobrepor.html'

    },

    {

        nome: 'Dobradiça de Sobrepor Preta',

        imagem: './assets/imgs/produtos/acessorios/Dobradiça de Sobrepor Preta.png',

        link: './dobradicasobreporpreta.html'

    },

    {

        nome: 'Dobradiça Dourada',

        imagem: './assets/imgs/produtos/acessorios/Dobradiça Dourada.jpg',

        link: './dobradicadourada.html'

    },

    {

        nome: 'Fechadura 1',

        imagem: './assets/imgs/produtos/acessorios/Fechadura 1.jpg',

        link: './fechadura1.html'

    },

    {

        nome: 'Fechadura 2',

        imagem: './assets/imgs/produtos/acessorios/Fechadura 2.jpg',

        link: './fechadura2.html'

    },

    {

        nome: 'Fechadura 3',

        imagem: './assets/imgs/produtos/acessorios/Fechadura 3.jpg',

        link: './fechadura3.html'

    },

    {

        nome: 'Fechadura 4',

        imagem: './assets/imgs/produtos/acessorios/Fechadura 4.jpg',

        link: './fechadura4.html'

    },

    {

        nome: 'Fechadura 5',

        imagem: './assets/imgs/produtos/acessorios/Fechadura 5.jpg',

        link: './fechadura5.html'

    },

    {

        nome: 'Fechadura 6',

        imagem: './assets/imgs/produtos/acessorios/Fechadura 6.jpg',

        link: './fechadura6.html'

    },

    {

        nome: 'Fechadura 7',

        imagem: './assets/imgs/produtos/acessorios/Fechadura 7.jpg',

        link: './fechadura7.html'

    },

    {

        nome: 'Fechadura 8',

        imagem: './assets/imgs/produtos/acessorios/Fechadura 9.jpg',

        link: './fechadura8.html'

    },
    {

        nome: 'Fechadura 9',

        imagem: './assets/imgs/produtos/acessorios/Fechadura 10.png',

        link: './fechadura9.html'

    },

    {

        nome: 'Fechadura 10',

        imagem: './assets/imgs/produtos/acessorios/Fechadura 11.png',

        link: './fechadura10.html'

    },

    {

        nome: 'Puxador Curvo Inox',

        imagem: './assets/imgs/produtos/acessorios/Puxador Curvo Inox.png',

        link: './puxadorcurvoinox.html'

    },

    {

        nome: 'Puxador Curvo Preto',

        imagem: './assets/imgs/produtos/acessorios/Puxador Curvo Preto.png',

        link: './puxadorcurvopreto.html'

    },

    {

        nome: 'Puxador Dourado',

        imagem: './assets/imgs/produtos/acessorios/Puxador Dourado.png',

        link: './puxadordourado.html'

    },

    {

        nome: 'Puxador Escovado',

        imagem: './assets/imgs/produtos/acessorios/Puxador Escovado.png',

        link: './puxadorescovado.html'

    },

    {

        nome: 'Puxador Inox',

        imagem: './assets/imgs/produtos/acessorios/Puxador Inox.png',

        link: './puxadorinox.html'

    },

    {

        nome: 'Puxador Preto',

        imagem: './assets/imgs/produtos/acessorios/Puxador Preto.png',

        link: './puxadorpreto.html'

    }

]

};


// Função para criar HTML do produto

function criarProdutoHTML(produto) {
    return `
    <div class="product">
        <div class="product-image-container">
            <img src="${produto.imagem}" alt="${produto.nome}" onclick="redirecionarProduto('${produto.link || '#'}')"/>
        </div>
        <div class="title">${produto.nome}</div>
        <button class="button" style="color: black;" onclick="redirecionarProduto('${produto.link || '#'}')">Ver</button>
    </div>
    `;
}

function redirecionarProduto(link) {

    if (link && link !== '#') {

        window.location.href = link;

    }

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

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links de navegação
    const navLinks = document.querySelectorAll('nav ul li a');
    const footerNavLinks = document.querySelectorAll('.footer-nav ul li a');
    
    // Função para adicionar rolagem suave
    function addSmoothScroll(links) {
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault(); // Previne o comportamento padrão do link
                
                // Determina o texto do link para mapear para a seção correta
                const linkText = this.textContent.toLowerCase().replace(/\s+/g, '-');
                
                // Mapeia os textos dos links para os IDs das seções e categorias
                const sectionMap = {
                    'portas-internas': {
                        section: '#produtos',
                        category: 'internas'
                    },
                    'portas-externas': {
                        section: '#produtos',
                        category: 'entrada'
                    },
                    'portas-sob-medida': '#produtos',
                    'caixilhos': {
                        section: '#produtos',
                        category: 'fogo'
                    },
                    'acessórios': {
                        section: '#produtos',
                        category: 'promocoes'
                    },
                    'sobre': '#sobre',
                    'localização': '.location-section'
                };
                
                // Encontra a seção correspondente
                const sectionInfo = sectionMap[linkText] || `#${linkText}`;
                
                // Determina o seletor da seção e a categoria
                const sectionSelector = typeof sectionInfo === 'object' ? sectionInfo.section : sectionInfo;
                const targetSection = document.querySelector(sectionSelector);
                
                if (targetSection) {
                    // Rola suavemente para a seção
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Se for uma categoria específica, clica no botão correspondente
                    if (typeof sectionInfo === 'object' && sectionInfo.category) {
                        const categoryBtn = document.querySelector(`.category-btn[data-category="${sectionInfo.category}"]`);
                        if (categoryBtn) {
                            categoryBtn.click();
                        }
                    }
                }
            });
        });
    }
    
    // Adiciona rolagem suave para links de navegação principal e rodapé
    addSmoothScroll(navLinks);
    addSmoothScroll(footerNavLinks);
}); 

