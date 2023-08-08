import { PokemonModel } from "../models";
import { get } from "../util";

export const getPokemon = (endpoint: string): Promise<PokemonModel[]> => {
  return get(endpoint).then((response) => {
    const pokemonList: PokemonModel[] = response.data.results;
    return pokemonList;
  });
};
