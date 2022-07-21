


var pokemonArray = pokemons;


var elList = document.querySelector(".list");



function renderPokemons(array, wrapper) {
    elList.innerHTML = null;
    
    for (const item of array) {
        const newLi = document.createElement("li");
        newLi.classList = "card-pakemon"
        const newImg = document.createElement("img");

        newImg.src = item.img;
        newImg.width = 200
        
        const newH = document.createElement("h2");
        newH.textContent = item.name;
        const newP = document.createElement("h3")
        newP.textContent = item.candy;
        
        const newSpan = document.createElement("span")
        newSpan.classList = "pokemon_id";
        newSpan.textContent = item.id;

        const newH4 = document.createElement("h4")
        newH4.textContent = item.height;

        const newH41 = document.createElement("h4")
        newH41.textContent = item.weight;

        const newDIV = document.createElement("div")
        newDIV.classList = "weight-height" ;
        
        const newTIME = document.createElement("time")
        newTIME.textContent = item.spawn_time;

        newLi.appendChild(newSpan)
        newLi.appendChild(newImg)
        newLi.appendChild(newH)
        newLi.appendChild(newP)
        newLi.appendChild(newDIV)
        newDIV.appendChild(newH4)
        newDIV.appendChild(newH41)
        newLi.appendChild(newTIME)
        console.log(newLi);
        elList.appendChild(newLi)
    }
}


renderPokemons(pokemonArray, elList)




