   // Função para obter o ID do personagem a partir da URL
   function getCharacterIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
  }

  // Função para carregar os detalhes do personagem da API
  function loadCharacterDetails() {
    const characterId = getCharacterIdFromUrl();
    const characterDetailsDiv = document.getElementById('character-details');

    if (characterId) {
      fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
        .then(response => response.json())
        .then(character => {
          const name = document.createElement('h2');
          name.textContent = character.name;
          characterDetailsDiv.appendChild(name);

          const image = document.createElement('img');
          image.src = character.image;
          characterDetailsDiv.appendChild(image);

          const species = document.createElement('p');
          species.textContent = `Species: ${character.species}`;
          characterDetailsDiv.appendChild(species);

          const status = document.createElement('p');
          status.textContent = `Status: ${character.status}`;
          characterDetailsDiv.appendChild(status);

          const origin = document.createElement('p');
          origin.textContent = `Origin: ${character.origin.name}`;
          characterDetailsDiv.appendChild(origin);
        })
        .catch(error => console.log(error));
    }
  }

  // Chamar a função para carregar os detalhes do personagem ao carregar a página
  window.addEventListener('load', loadCharacterDetails);