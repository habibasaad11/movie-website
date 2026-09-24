/* =====================================================
   MOVIES DATA
   ===================================================== */

const movies = [

    {
        id: 1,
        title: "Interstellar",
        year: 2014,
        genre: "Sci-Fi",
        rating: 8.7,
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },

    {
        id: 2,
        title: "Inception",
        year: 2010,
        genre: "Sci-Fi",
        rating: 8.8,
        poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
    },

    {
        id: 3,
        title: "Dune: Part Two",
        year: 2024,
        genre: "Sci-Fi",
        rating: 8.6,
        poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
    },

    {
        id: 4,
        title: "The Batman",
        year: 2022,
        genre: "Action",
        rating: 7.8,
        poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
    },

    {
        id: 5,
        title: "Avatar",
        year: 2009,
        genre: "Fantasy",
        rating: 7.8,
        poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg"
    },

    {
        id: 6,
        title: "The Dark Knight",
        year: 2008,
        genre: "Action",
        rating: 9.0,
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },

    {
        id: 7,
        title: "Oppenheimer",
        year: 2023,
        genre: "Drama",
        rating: 8.6,
        poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
    },

    {
        id: 8,
        title: "Guardians of the Galaxy",
        year: 2014,
        genre: "Adventure",
        rating: 8.0,
        poster: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg"
    },

    {
        id: 9,
        title: "The Matrix",
        year: 1999,
        genre: "Sci-Fi",
        rating: 8.7,
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
    },

    {
        id: 10,
        title: "Joker",
        year: 2019,
        genre: "Drama",
        rating: 8.3,
        poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
    },

    {
        id: 11,
        title: "Avengers: Endgame",
        year: 2019,
        genre: "Action",
        rating: 8.4,
        poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
    },

    {
        id: 12,
        title: "Spider-Man: No Way Home",
        year: 2021,
        genre: "Action",
        rating: 8.2,
        poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
    }

];


/* =====================================================
   ELEMENTS
   ===================================================== */

const moviesGrid = document.getElementById("moviesGrid");

const searchInput = document.getElementById("searchInput");

const genreFilter = document.getElementById("genreFilter");

const yearFilter = document.getElementById("yearFilter");

const ratingFilter = document.getElementById("ratingFilter");

const sortMovies = document.getElementById("sortMovies");

const movieCount = document.getElementById("movieCount");

const noResults = document.getElementById("noResults");

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.querySelector(".nav-links");


/* =====================================================
   DISPLAY MOVIES
   ===================================================== */

function displayMovies(movieList) {

    moviesGrid.innerHTML = "";


    if (movieList.length === 0) {

        noResults.style.display = "block";

        movieCount.textContent = "0";

        return;

    }


    noResults.style.display = "none";


    movieCount.textContent = movieList.length;


    movieList.forEach(movie => {

        const card = document.createElement("div");

        card.classList.add("movie-card");


        card.innerHTML = `

            <div class="poster-container">

                <img
                    src="${movie.poster}"
                    alt="${movie.title}"
                    loading="lazy"
                >

                <div class="rating">
                    ⭐ <span>${movie.rating}</span>
                </div>


                <div class="poster-overlay">

                    <button
                        class="view-btn"
                        onclick="openMovie(${movie.id})"
                    >
                        View Details
                    </button>

                </div>

            </div>


            <div class="movie-info">

                <h3 class="movie-title">
                    ${movie.title}
                </h3>

                <div class="movie-meta">

                    <span>${movie.year}</span>

                    <span class="dot">•</span>

                    <span class="genre">
                        ${movie.genre}
                    </span>

                </div>

            </div>

        `;


        moviesGrid.appendChild(card);

    });

}


/* =====================================================
   FILTER MOVIES
   ===================================================== */

function filterMovies() {

    const searchValue =
        searchInput.value.toLowerCase().trim();


    const selectedGenre =
        genreFilter.value;


    const selectedYear =
        yearFilter.value;


    const selectedRating =
        ratingFilter.value;


    let filteredMovies = movies.filter(movie => {


        const matchesSearch =
            movie.title
                .toLowerCase()
                .includes(searchValue);


        const matchesGenre =
            selectedGenre === "all" ||
            movie.genre === selectedGenre;


        const matchesYear =
            selectedYear === "all" ||
            movie.year.toString() === selectedYear;


        const matchesRating =
            selectedRating === "all" ||
            movie.rating >= Number(selectedRating);


        return (
            matchesSearch &&
            matchesGenre &&
            matchesYear &&
            matchesRating
        );

    });


    sortMovieList(filteredMovies);

}


/* =====================================================
   SORT MOVIES
   ===================================================== */

function sortMovieList(movieList) {

    const sortValue =
        sortMovies.value;


    if (sortValue === "rating-high") {

        movieList.sort(
            (a, b) => b.rating - a.rating
        );

    }


    else if (sortValue === "rating-low") {

        movieList.sort(
            (a, b) => a.rating - b.rating
        );

    }


    else if (sortValue === "year-new") {

        movieList.sort(
            (a, b) => b.year - a.year
        );

    }


    else if (sortValue === "year-old") {

        movieList.sort(
            (a, b) => a.year - b.year
        );

    }


    displayMovies(movieList);

}


/* =====================================================
   SEARCH
   ===================================================== */

searchInput.addEventListener(
    "input",
    filterMovies
);


/* =====================================================
   FILTER EVENTS
   ===================================================== */

genreFilter.addEventListener(
    "change",
    filterMovies
);


yearFilter.addEventListener(
    "change",
    filterMovies
);


ratingFilter.addEventListener(
    "change",
    filterMovies
);


sortMovies.addEventListener(
    "change",
    filterMovies
);


/* =====================================================
   OPEN DETAILS
   ===================================================== */

function openMovie(id) {

    window.location.href =
        `details.html?id=${id}`;

}


/* =====================================================
   MOBILE MENU
   ===================================================== */

menuBtn.addEventListener(
    "click",
    () => {

        navLinks.classList.toggle("show");

    }
);


/* =====================================================
   INITIAL DISPLAY
   ===================================================== */

displayMovies(movies);