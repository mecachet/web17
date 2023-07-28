console.log("JavaScript file is linked correctly. Hooray.");
const characters = [
  {
    first_name: "Harry",
    last_name: "Potter",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/harry.jpg",
  },
  {
    first_name: "Hermione",
    last_name: "Granger",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
  },
  {
    first_name: "Ron",
    last_name: "Weasley",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/ron.jpg",
  },
  {
    first_name: "Draco",
    last_name: "Malfoy",
    house: "Slytherin",
    image: "http://hp-api.herokuapp.com/images/draco.jpg",
  },
];
document.addEventListener("DOMContentLoaded", () => {
  const charactersListElement = document.getElementById("characters-list");
  characters.forEach((character) => {
    const characterCard = document.createElement("div");
    characterCard.classList.add("character-card");

    const characterInfo = document.createElement("div");
    characterInfo.classList.add("character-info");

    const characterName = document.createElement("div");
    characterName.classList.add("character-name");
    characterName.textContent = `${character.first_name} ${character.last_name}`;

    const characterHouse = document.createElement("div");
    characterHouse.classList.add("character-house");
    characterHouse.textContent = character.house;

    characterInfo.appendChild(characterName);
    characterInfo.appendChild(characterHouse);

    characterCard.appendChild(characterInfo);

    const characterImage = document.createElement("img");
    characterImage.classList.add("character-image");
    characterImage.src = character.image;
    characterImage.alt = `${character.first_name} ${character.last_name}`;

    characterCard.appendChild(characterImage);

    charactersListElement.appendChild(characterCard);
  });
});
