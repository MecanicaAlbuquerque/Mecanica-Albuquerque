document.addEventListener("DOMContentLoaded", function() {
    const intro = document.getElementById("intro");

    // Garante que o intro fique visível e bloqueia o scroll no body
    if (intro) {
        intro.style.display = "flex";
        document.body.style.overflow = "hidden";
        // Define altura e largura para garantir que ocupe 100% da viewport (se quiser reforçar via JS)
        intro.style.position = "fixed";
        intro.style.top = "0";
        intro.style.left = "0";
        intro.style.width = "100vw";
        intro.style.height = "100vh";
        intro.style.zIndex = "9999";
    }

    function removerIntro() {
        if (intro && intro.style.display !== "none") {
            intro.style.display = "none";
            document.body.style.overflow = "auto"; // libera scroll
        }
    }

    // Remove intro após 7 segundos ou se o usuário clicar ou rolar
    setTimeout(removerIntro, 7000);
    document.addEventListener("click", removerIntro, { once: true });
    document.addEventListener("wheel", removerIntro, { once: true });
    document.addEventListener("touchmove", function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

    window.addEventListener("scroll", function() {
    window.scrollTo(0, window.scrollY);
    });


    // Carrossel Quem Somos (exemplo já existente)
    const carrosselInner = document.querySelector(".carrossel-inner");
    if (carrosselInner) {
        const slides = document.querySelectorAll(".slide");
        const totalSlides = slides.length;
        let index = 0;
        const slidesToShow = 3;

        function trocarImagem() {
            if (index >= totalSlides - slidesToShow) {
                index = 0;
            } else {
                index++;
            }
            const slideWidth = slides[0].clientWidth;
            carrosselInner.style.transform = `translateX(-${index * slideWidth}px)`;
        }

        setInterval(trocarImagem, 5000);
    }

    // Carrossel de Serviços (novo)
    const carrosselInnerServicos = document.querySelector(".carrossel-inner-servicos");
    const slidesServicos = document.querySelectorAll(".slide-servico");
    



        function getSlidesToShow() {
            return window.innerWidth <= 768 ? 1 : 3;
        }

        function atualizarCarrossel(novoIndex) {
            const slidesToShow = getSlidesToShow();
            const totalSlides = slidesServicos.length;
            const slideWidth = carrosselInnerServicos.offsetWidth / slidesToShow;
            const maxIndex = totalSlides - slidesToShow;

            indexServicos = novoIndex !== undefined ? novoIndex : (indexServicos + 1);
            if (indexServicos > maxIndex) indexServicos = 0;

            carrosselInnerServicos.style.transform = `translateX(-${indexServicos * slideWidth}px)`;

            
        }

        let intervalo = setInterval(() => atualizarCarrossel(), 5000);

});

// Formulário WhatsApp
document.getElementById("form-whatsapp").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const titulo = document.getElementById("titulo").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto = `*Novo orcamento do Site:*\n\n*Nome:* ${nome}\n*Telefone:* ${telefone}\n*Título:* ${titulo}\n*Mensagem:* ${mensagem}`;

    const numero = "5561984084390"; // Seu número WhatsApp
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
});
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  const inicioHeight = document.getElementById("inicio").offsetHeight;

  const elementos = document.querySelectorAll('.text1, .seja, .fotos-container');

  if (scrollY > inicioHeight * 0.7) {
    elementos.forEach(el => el.style.display = 'none');
  } else {
    elementos.forEach(el => el.style.display = 'block');
  }
});

document.addEventListener("DOMContentLoaded", function() {
    const carrosselInner = document.querySelector(".carrossel-inner-servicos");
    const setaEsquerda = document.querySelector(".seta-esquerda");
    const setaDireita = document.querySelector(".seta-direita");
    const slides = document.querySelectorAll(".slide-servico");

    let index = 0;
    const slidesToShow = window.innerWidth <= 768 ? 1 : 3;
    const totalSlides = slides.length;

    function moverCarrossel(direcao) {
        const slideWidth = carrosselInner.offsetWidth / slidesToShow;
        index += direcao;

        if (index < 0) index = totalSlides - slidesToShow;
        if (index > totalSlides - slidesToShow) index = 0;

        carrosselInner.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    setaEsquerda.addEventListener("click", () => moverCarrossel(-1));
    setaDireita.addEventListener("click", () => moverCarrossel(1));
});
document.addEventListener("touchmove", function(event) {
    if (event.touches.length === 1) {
        if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
            event.preventDefault();
        }
    }
}, { passive: false });

document.addEventListener("touchmove", function(event) {
    if (event.touches.length === 1 && Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        event.preventDefault();
    }
}, { passive: false });
