const menuBtn = document.querySelector("#menu-hamburguer");
const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", () => {
    // Só funciona se a tela for menor que 768px
    if (window.innerWidth <= 768) {
        menu.classList.toggle("active");
        menuBtn.classList.toggle("active");
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        menu.classList.remove("active");
        menuBtn.classList.remove("active");     
    }
});

const menuLinks = document.querySelectorAll("#menu a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        menuBtn.classList.remove("active");
    });
});

const formulario = document.querySelector('#meu-formulario');

function validarFormulario(event) {
    event.preventDefault(); 

    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const msg = document.querySelector('#msg').value;

    if (nome === "" || email === "" || msg === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
    } else {
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        formulario.reset(); 
    }
}

formulario.addEventListener('submit', validarFormulario);

const meusProjetos = [
    {
        titulo: "Loja de Carros",
        descricao: "Loja virtual moderna com design responsivo para uma loja de carros de luxo.",   
        imagem: "assets/imagens/projeto1.png",
        link: "#",
        github: "#"
    },
    {
        titulo: "Página de Viagens",
        descricao: "Uma página interativo com roteiros de viagens mais cobiçados do mundo.", 
        imagem: "assets/imagens/projeto2.png",
        link: "#",
        github: "#"
    },
    {
        titulo: "Microsoft",
        descricao: "Página da Microsoft criada para demonstrar conhecimentos em diversas tecnologias.",   
        imagem: "assets/imagens/projeto3.png",
        link: "#",
        github: "#",
    }
];

function renderizarProjetos() {
    const container = document.querySelector('.projetos-container');
    
    container.innerHTML = "";

    meusProjetos.forEach(projeto => {
        const cardHTML = `
            <article class="card-projeto">
                <img src="${projeto.imagem}" alt="${projeto.titulo}">

                <div class="info-projetos">
                    <h3>${projeto.titulo}</h3>
                    <p>${projeto.descricao}</p>

                    <div class="botoes-projeto">
                        <a
                            href=${projeto.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn-ver-projeto"
                            >
                            Ver projeto
                        </a>

                        <a
                            href=${projeto.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn-github"
                            >
                            GitHub
                        </a>
                    </div>

                </div>
            </article>
        `;
        container.innerHTML += cardHTML;
    });
}

renderizarProjetos();
