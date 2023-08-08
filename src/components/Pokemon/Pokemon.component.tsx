import { useEffect, useState } from "react";

import { getPokemonDetails } from "../../APIs";
import { PokemonDetailsModel } from "../../models";
import { Card } from "../../stories";

export const Pokemon = ({ url }: { url: string }) => {
  // Constant Variables
  const initialValues: PokemonDetailsModel = {
    id: 0,
    name: "...",
    weight: 0,
    height: 0,
    image: "../../../assets/images/loading.png",
    abilities: [],
    experience: 0,
    order: 0,
  };

  // State Variables
  const [pokemon, setPokemon] = useState<PokemonDetailsModel>(initialValues);
  useEffect(() => {
    getPokemonDetails(url)
      .then((pokemon: PokemonDetailsModel) => {
        setPokemon(pokemon);
      })
      .catch(() => {
        console.log(`Pokemon Not Found !! URL: ${url}`);
      });
  }, []);

  return <Card {...pokemon} type="listing"></Card>;
};
