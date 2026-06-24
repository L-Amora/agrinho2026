// Rolagem suave ao clicar nos links do menu
document.querySelectorAll("header nav ul li a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // ajusta para não cobrir pelo header
                behavior: "smooth"
            });
        }
    });
});

// Validação simples do formulário de contato
const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return;
    }

    // Validação básica de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Digite um e-mail válido.");
        return;
    }

    // Simulação de envio
    alert("Obrigado pelo contato, " + nome + "! Sua mensagem foi enviada com sucesso.");
    form.reset();
});

// Destaque da seção ativa no menu conforme rolagem
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollPos = window.scrollY + 80; // compensar altura do header

    sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            document.querySelectorAll("header nav ul li a").forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href").substring(1) === section.id) {
                    link.classList.add("active");
                }
            });
        }
    });
});

