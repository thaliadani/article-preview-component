let shareButtons = document.querySelectorAll(".share-button");
let shareContainer = document.querySelector(".share");
let authorContainer = document.querySelector(".author");

function toggleShare() {
    // Alterna a visibilidade dos containers com transição
    shareContainer.classList.toggle("visible");
    authorContainer.classList.toggle("hidden");
    
    // Alterna a classe 'active' em todos os botões
    shareButtons.forEach(button => {
        button.classList.toggle("active");
    });
}

// Adiciona o evento de clique a todos os botões de share
shareButtons.forEach(button => {
    button.addEventListener("click", function(event) {
        event.stopPropagation(); // Impede a propagação do evento
        toggleShare();
    });
});

// Fecha o menu de share ao clicar em qualquer lugar da página
document.addEventListener("click", function(event) {
    if (shareContainer.classList.contains("visible")) {
        // Verifica se o clique não foi em um botão de share
        let isShareButton = event.target.closest(".share-button");
        if (!isShareButton) {
            shareContainer.classList.remove("visible");
            authorContainer.classList.remove("hidden");
            
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