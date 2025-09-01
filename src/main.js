let shareButtons = document.querySelectorAll(".share-button");

let shareContainerMobile = document.querySelector(".share-mobile");

let shareContainerDesktop = document.querySelector(".share-desktop");

let authorContainer = document.querySelector(".author");

function toggleShare() {
    // Verifica se é desktop
    const isDesktop = window.matchMedia("(min-width: 1440px)").matches;
    
    if (isDesktop) {
        // No desktop, apenas toggle no share container
        shareContainerDesktop.classList.toggle("visible");
    } else {
        // No mobile, alterna ambos os containers
        shareContainerMobile.classList.toggle("visible");
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
