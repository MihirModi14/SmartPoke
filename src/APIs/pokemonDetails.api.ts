import { PokemonDetailsModel } from "../models";
import { get } from "../util";

export const getPokemonDetails = (
  endpoint: string
): Promise<PokemonDetailsModel> => {
  return get(endpoint).then((response) => {
    const details = response.data;
    const pokemon: PokemonDetailsModel = {
      id: details.id,
      name: details.name,
      weight: details.weight,
      height: details.height,
      image: details.sprites.other.dream_world.front_default,
      abilities: details.abilities,
      experience: details.base_experience,
      order: details.order,
    };
    return pokemon;
  });
};
