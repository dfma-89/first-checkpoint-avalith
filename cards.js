for (let i=1; i<=42; i++) {

    const rickMortyUrl = 'https://rickandmortyapi.com/api/character/?page='+i;

    fetch(rickMortyUrl)
        .then(response => response.json())
        .then(characters => {
            console.log(characters);
            showCharacters(characters.results)
        })
        .catch(error => console.log("Error!", error))

        showCharacters = characters => {      

            let card = ``;
            characters.forEach(character => {                         
                card = `
                <div class="col">
                <div class="card border-danger mb-3" style="max-width: 18rem;">
                    <img class="card-img-top" src="${character.image}" alt="Card image cap">
                    <div class="card-body">
                    <h4 class="card-title">${character.id}</h4>
                    <h4 class="card-text">${character.name}</h4>
                    <h5 class="card-text">${character.status}</h5>
                    <h5 class="card-text">${character.species}</h5>
                    <h5 class="card-text">${character.type}</h5>
                    <h5 class="card-text">${character.gender}</h5>
                    <h5 class="card-text">${character.origin.name}</h5>
                    <h5 class="card-text">${character.origin.url}</h5>
                    <h5 class="card-text">${character.location.name}</h5>
                    <h5 class="card-text">${character.location.url}</h5>
                    <h5 class="card-text">${character.created}</h5>                    
                    </div>
                </div>
                </div>     
                <br>       
                `;
                document.getElementById ("rickMortyCharacters").innerHTML += card;
                
                
            });            
       
        }
        
}       

