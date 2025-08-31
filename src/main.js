let shareButtons = document.querySelectorAll(".share-button");
let shareContainer = document.querySelector(".share");
let authorContainer = document.querySelector(".author");

function toggleShare() {
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

