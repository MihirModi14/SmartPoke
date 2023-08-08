import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { getPokemonDetails } from "../../APIs";
import { Message } from "../../components";
import { PokemonDetailsModel } from "../../models";
import { Card } from "../../stories";
import { ENDPOINTS } from "../../util";

import DetailsStyle from "./PokemonDetails.module.scss";

export const PokemonDetails = () => {
  // React Router Hooks
  const { id } = useParams();
  const location = useLocation();

  // State Variables
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pokemon, setPokemon] = useState<PokemonDetailsModel>(
    location.state?.pokemon
  );

  // Hooks
  useEffect(() => {
    if (!pokemon) {
      setIsLoading(true);
      getPokemonDetails(`${ENDPOINTS.POKEMON}/${id}/`)
        .then((pokemon: PokemonDetailsModel) => {
          setPokemon(pokemon);
        })
        .catch(() => {
          console.log(`Pokemon Not Found !! ID: ${id}`);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);

  return pokemon ? (
    <section className={DetailsStyle.section}>
      {pokemon && <Card {...pokemon} type="details"></Card>};
    </section>
  ) : (
    <Message
      message={isLoading ? "Loading ..." : "No Pokemon Found !!"}
    ></Message>
  );
};
