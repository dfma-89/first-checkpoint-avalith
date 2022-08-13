
const rickMortyUrl = 'https://rickandmortyapi.com/api/character/?page=';

fetch(rickMortyUrl)
.then(response => response.json())
.then(characters => {
    console.log(characters);
    showCharacters(characters.results)
    showInfo(characters.info)
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
       
showInfo = info =>{
    
    // Creamos un botón por c/ página
    btn_pag = ``;        
    for (let i=0; i<=info.pages; i++){

        btn_pag +=`
        <li class="page-item"><button class="page-link" onclick="getPag(${i})">${i}</button></li>
        `  
    }
    document.getElementById ("pagination_btns").innerHTML = btn_pag;
    
}

// Evento de test
function getPag(pag) {

    const rickMortyUrl = 'https://rickandmortyapi.com/api/character/?page='+pag;

    fetch(rickMortyUrl)
    .then(response => response.json())
    .then(characters => {
        console.log(characters);
        showCharacters(characters.results)
        showInfo(characters.info)
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
