import { useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";

import { getPokemon } from "../APIs";
import { PokemonModel, PaginationParamsModel } from "../models";
import { ENDPOINTS, MAX_LIMIT_SIZE, MAX_SEARCH_RESULT_SIZE } from "../util";

export const useFetch = (
  pokemonName: string,
  paginationParams: PaginationParamsModel,
  setIsLoading: Function
) => {
  // Constant Variables
  let offset: number = paginationParams.offset;
  let limit: number = paginationParams.limit;
  if (pokemonName) {
    offset = 0;
    limit = MAX_LIMIT_SIZE;
  }

  // State Variables
  const [pokemonList, setPokemonList] = useState<PokemonModel[]>([]);

  // Helper Methods
  const filterPokemonList = (pokemonList: PokemonModel[]): PokemonModel[] => {
    if (!pokemonName) return pokemonList;

    // SHOW 'MAX_SEARCH_RESULT_SIZE' RESULTS IF USER SEARCH BY THE NAME
    const filteredList: PokemonModel[] = pokemonList
      .filter((pokemon: PokemonModel) => {
        return pokemon.name.includes(pokemonName.toLocaleLowerCase());
      })
      .slice(0, MAX_SEARCH_RESULT_SIZE);
    return filteredList;
  };

  const handlePokemonListReponse = (pokemonList: PokemonModel[]): void => {
    const filteredPokemonList: PokemonModel[] = filterPokemonList(pokemonList);
    setPokemonList(filteredPokemonList);

    setTimeout(() => {
      setIsLoading(false);
    }, 700);
  };

  // Hooks
  useEffect(() => {
    setIsLoading(true);
    getPokemon(ENDPOINTS.POKEMON + `?offset=${offset}&limit=${limit}`)
      .then((pokemonList: PokemonModel[]) => {
        handlePokemonListReponse(pokemonList);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [
    useDebounce<string>(pokemonName, 600),
    useDebounce<Object>(paginationParams, 400),
  ]);

  return { pokemonList };
};
