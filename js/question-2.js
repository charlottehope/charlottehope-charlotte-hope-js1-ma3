const apiGames = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const gamesContainer = document.querySelector(".gamesContainer");

async function callGames() {
    try {
        const response = await fetch(apiGames);
        const results = await response.json();
        const data = results.results;
        gamesContainer.innerHTML = "";
        

        for (i = 0; i < data.length; i++) {
            if (i === 8) {
                break;
            }

            gamesContainer.innerHTML += `
            <div class="game">
                <p>Game title: ${data[i].name}</p>
                <p>Rating: ${data[i].rating}</p>
                <p>Number of tags: ${data[i].tags.length}</p>
                <br>
            </div>`
        }
    }

    catch (error) {
        gamesContainer.innerHTML ="An error occurred. Please try again later."
    }
};

callGames();