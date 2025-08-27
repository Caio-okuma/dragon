const resultsdiv = document.getElementById("results");
var result = ""

async function fetchCharacters() {
    resultsdiv.innerHTML = "<p>Carregando....</p>";

    try {
        const response = await fetch("https://dragonball-api.com/api/characters");
        const data = await response.json();

        resultsdiv.innerHTML = "";
        result = data

        console.log(result.items[0])

        for(var i = 0; i < result.items.length; i++){

            var character = result.items[i]
            console.log(character)
            console.log(character.image,character.name)

            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="${character.image}" alt="${character.name}">
                <h3>${character.name}</h3>
                <p>Ki: ${character.ki}</p>
                <p>Max Ki: ${character.maxKi}</p>
            `;
        
            resultsdiv.appendChild(card);
        };
    } catch (error) {
        console.error(error);
        resultsdiv.innerHTML = "<p>Erro ao carregar dados da API.</p>";
    }
}

fetchCharacters();
