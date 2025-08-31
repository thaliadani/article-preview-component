let shareButtons = document.querySelectorAll(".share-button");
let shareContainer = document.querySelector(".share");
let authorContainer = document.querySelector(".author");

function toggleShare() {
    // Verifica se é desktop
    const isDesktop = window.matchMedia("(min-width: 1440px)").matches;
    
    if (isDesktop) {
        // No desktop, apenas toggle no share container
        shareContainer.classList.toggle("visible");
    } else {
        // No mobile, alterna ambos os containers
        shareContainer.classList.toggle("visible");
        authorContainer.classList.toggle("hidden");
    }
    
    // Alterna a classe 'active' em todos os botões
    shareButtons.forEach(button => {
        button.classList.toggle("active");
    });
}

// Adiciona o evento de clique a todos os botões de share
shareButtons.forEach(button => {
    button.addEventListener("click", function(event) {
        event.stopPropagation();
        toggleShare();
    });
});

// Fecha o menu de share ao clicar em qualquer lugar da página
document.addEventListener("click", function(event) {
    if (shareContainer.classList.contains("visible")) {
        const isDesktop = window.matchMedia("(min-width: 1440px)").matches;
        let isShareButton = event.target.closest(".share-button");
        let isShareContainer = event.target.closest(".share");
        
        if (!isShareButton && !isShareContainer) {
            shareContainer.classList.remove("visible");
            
            if (!isDesktop) {
                authorContainer.classList.remove("hidden");
            }
            
            // Remove a classe active de todos os botões
            shareButtons.forEach(button => {
                button.classList.remove("active");
            });
        }
    }
});

// Impede que o clique dentro do container de share feche o menu
shareContainer.addEventListener("click", function(event) {
    event.stopPropagation();
});

// Fecha o tooltip ao redimensionar para mobile
window.addEventListener('resize', function() {
    const isDesktop = window.matchMedia("(min-width: 1440px)").matches;
    if (!isDesktop && shareContainer.classList.contains("visible")) {
        shareContainer.classList.remove("visible");
        authorContainer.classList.remove("hidden");
        
        shareButtons.forEach(button => {
            button.classList.remove("active");
        });
    }
});
