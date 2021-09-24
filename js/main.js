var elList = document.querySelector(".main__list");

for (var pokemon of pokemons) {
    
    // ======== Declare element variables ========
    
    var newLi = document.createElement("li");
    var newImg = document.createElement("img");
    var newDiv = document.createElement("div");
    
    
    // ======== Declare element variables in div element ========
    
    var newHeading = document.createElement("h3");
    var newPokemonTypeList = document.createElement("ul");
    var newPokemonTypeItem = document.createElement("li");
    var newPokemonHeight = document.createElement("p");
    var newPokemonCandy = document.createElement("p");
    var newPokemonMultipliersList = document.createElement("ul");
    var newPokemonMultipliersItem = document.createElement("li");
    var newPokemonWeaknessList = document.createElement("ul");
    var newPokemonWeaknessItem = document.createElement("li");
    var newPokemonEvolutionList = document.createElement("ul");
    var newPokemonEvolutionItem = document.createElement("li");
    
    
    
    // Set class for declared elements
    
    newLi.setAttribute("class", "main__item d-flex flex-wrap align-items-center shadow p-3 m-3 bg-white rounded")
    newImg.setAttribute("class", "pokemon__image")
    newDiv.setAttribute("class", "pokemon__wrapper d-flex")
    
    
    // Set class for declared elements in div element
    
    newHeading.setAttribute("class", "pokemon__name m-3")
    newPokemonTypeList.setAttribute("class", "pokemon__type__list list-unstyled")
    newPokemonTypeItem.setAttribute("class", "pokemon__type__item mt-2 h6")
    newPokemonHeight.setAttribute("class", "pokemon__height m-4")
    newPokemonCandy.setAttribute("class", "pokemon__candy mt-2")
    newPokemonMultipliersList.setAttribute("class", "pokemon__multipliers__list list-unstyled")
    newPokemonMultipliersItem.setAttribute("class", "pokemon__multipliers__item")
    newPokemonWeaknessList.setAttribute("class", "pokemon__weakness__list list-unstyled")
    newPokemonWeaknessItem.setAttribute("class", "pokemon__weakness__item")
    newPokemonEvolutionList.setAttribute("class", "pokemon__evolution__list list-unstyled")
    newPokemonEvolutionItem.setAttribute("class", "pokemon__evolution__item")
    
    
    
    // Load content from database...
    
    newHeading.textContent = pokemon.name;
    newPokemonTypeItem.textContent = pokemon.type.join(", ");
    newPokemonHeight.textContent = pokemon.height;
    newPokemonCandy.textContent = pokemon.candy;
    
    
    
    // Set attributes for img element (src/alt/width/heith...)
    newImg.setAttribute("src", pokemon.img)
    newImg.setAttribute("width", 120)
    newImg.setAttribute("height", 120)
    newImg.setAttribute("alt", pokemon.name + " pokemon's image")
    
    
    
    // Set location of created elements in js (parent --> child)
    
    newDiv.appendChild(newHeading);
    newPokemonTypeList.appendChild(newPokemonTypeItem);
    newHeading.appendChild(newPokemonTypeList);
    newDiv.appendChild(newPokemonHeight);
    newPokemonHeight.appendChild(newPokemonCandy);
    newPokemonMultipliersList.appendChild(newPokemonMultipliersItem);
    newDiv.appendChild(newPokemonMultipliersList);
    newPokemonWeaknessList.appendChild(newPokemonWeaknessItem);
    newDiv.appendChild(newPokemonWeaknessList);
    newPokemonEvolutionList.appendChild(newPokemonEvolutionItem);
    newDiv.appendChild(newPokemonEvolutionList);
    
    newLi.appendChild(newImg);
    newLi.appendChild(newDiv);
    
    elList.appendChild(newLi);
}


