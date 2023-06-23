function loadCharacters() {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        const charactersDiv = document.getElementById('characters');

        data.results.forEach(character => {
          const card = document.createElement('div');
          card.className = 'card';

          const image = document.createElement('img');
          image.src = character.image;
          card.appendChild(image);

          const name = document.createElement('h3');
          name.textContent = character.name;
          card.appendChild(name);

          const origin = document.createElement('p');
          origin.textContent = character.origin.name;
          card.appendChild(origin);

          card.addEventListener('click', () => {
            window.location.href = `character-details.html?id=${character.id}`;
          });

          charactersDiv.appendChild(card);
        });
      })
      .catch(error => console.log(error));
  }

  // Chamar a função para carregar os personagens ao carregar a página
  window.addEventListener('load', loadCharacters);