// Requete API avec Pokedex
const pokedex = document.querySelector(".pokedex")

let apiLink = "https://pokebuildapi.fr/api/v1/pokemon"


const typeColors = {
    Normal: "linear-gradient(135deg, #EFEFEF, #9c9c9c)",
    Feu: "linear-gradient(135deg, #ED6A00, #A54700)",
    Eau: "linear-gradient(135deg, #00B7EA, #008AA3)",
    Électrik: "linear-gradient(135deg, #E8C100, #A08300)",
    Plante: "linear-gradient(135deg, #1AE500, #0D9E00)",
    Glace: "linear-gradient(135deg, #00E2DB, #149B94)",
    Combat: "linear-gradient(135deg, #E00003, #991318)",
    Poison: "linear-gradient(135deg, #9B00DD, #651399)",
    Sol: "linear-gradient(135deg, #DB7400, #994F13)",
    Vol: "linear-gradient(135deg, #AFFCFF, #6E918E)",
    Psy: "linear-gradient(135deg, #D800A9, #991382)",
    Insecte: "linear-gradient(135deg, #92D600, #739913)",
    Roche: "linear-gradient(135deg, #68401D, #382313)",
    Spectre: "linear-gradient(135deg, #30104F, #140026)",
    Dragon: "linear-gradient(135deg, #5A00D1, #4F1399)",
    Ténèbres: "linear-gradient(135deg, #4C4451, #262428)",
    Acier: "linear-gradient(135deg, #ADACAB, #686768)",
    Fée: "linear-gradient(135deg, #C97BCE, #994E97)"
};

const multiColors = {
  Normal: "#A8A878",
  Feu: "#F08030",
  Eau: "#6890F0",
  Électrik: "#F8D030",
  Plante: "#78C850",
  Glace: "#98D8D8",
  Combat: "#C03028",
  Poison: "#A040A0",
  Sol: "#E0C068",
  Vol: "#A890F0",
  Psy: "#F85888",
  Insecte: "#A8B820",
  Roche: "#B8A038",
  Spectre: "#705898",
  Dragon: "#7038F8",
  Ténèbres: "#705848",
  Acier: "#B8B8D0",
  Fée: "#EE99AC"
  };

// On utilise fetch pour faire notre requete, par défaut fetch fait des req de type GET
fetch(apiLink)
.then(res => res.json())
.then(data => {
    data.forEach(pokemon => {
        // On récupères les infos pour chaque pokemon de l'api (nom, image etc)
        const name = pokemon.name
        const imageURL = pokemon.image
        const types = pokemon.apiTypes
        const id = pokemon.id 

        // console.log(types)

        // On crée une div qui recevra les infos du dessus
        const card = document.createElement("div") 
        card.classList.add("card")

        // On crée les différents éléments HTML un par un 
        const cardName = document.createElement("h2") 
        const cardImage = document.createElement("img")
        const cardTypes = document.createElement("h3")
        const cardId = document.createElement("p")

        // On donne la valeur adéquate (issu de l'api) à nos différents éléments HTML
        cardName.textContent = name
        cardImage.src = imageURL

        // On vient chercher le premier type d'un pokémon pour lui attribuer sa couleur en background a partir de la table typeColors
        
        if (types.length == 1) {
            console.log(types.lenght)
            const firstType = types[0].name;
            card.style.background = typeColors[firstType] || "#ccc"; // "ccc" est au cas ou il y a un problème
        } else {
            const firstType = types[0].name;
            const secType = types[1].name;
            card.style.background = `linear-gradient(135deg, ${multiColors[firstType]}, ${multiColors[secType]})`
        }

        types.forEach((type) => {
            cardTypes.textContent += `${type.name} `
        });

        cardId.textContent = id

        // On ajoute tous ces éléments à notre card
        card.append(cardName, cardImage, cardTypes, cardId)

        // enfin on insère notre card dans la section pokedex (définie dans le HTML)
        pokedex.append(card)

    })
})
.catch(err => console.log(err));