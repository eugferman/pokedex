function mapperTableTypes(typeOfCurrentPokemon, tableTypesOfPokemon) {
  
  console.log("typeOfCurrentPokemon: ", typeOfCurrentPokemon);
  console.log("tableTypesOfPokemon", tableTypesOfPokemon);

  const typesPokemon = []
  for(let x = 0; x < typeOfCurrentPokemon.length; x++){
    typesPokemon.push(typeOfCurrentPokemon[x].type.name);
  }

  const result =[];
  for(let x = 0; x < typesPokemon.length; x++){
    for(let y = 0; y < tableTypesOfPokemon.length; y++){
      if(tableTypesOfPokemon[y].type === typesPokemon[x]){
        const typeWithProperties = {};
        typeWithProperties.type = typesPokemon[x];
        typeWithProperties.weaknesses = tableTypesOfPokemon[y].weaknesses.toString();
        typeWithProperties.strengths = tableTypesOfPokemon[y].strengths.toString();
        typeWithProperties.immunes = tableTypesOfPokemon[y].immunes.toString();
        result.push(typeWithProperties);
      }
    }
  }

  return result;
}

export {mapperTableTypes};