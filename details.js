function openMovie(id) {
    window.location.href = `details.html?id=${id}`;
}

const filterButtons = document.querySelectorAll(".filter-btn");
const movieCards = document.querySelectorAll(".movie-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.textContent.trim();

        movieCards.forEach(card => {
            const genre = card.querySelector(".movie-info p").textContent;

            if (category === "All" || genre.includes(category)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});