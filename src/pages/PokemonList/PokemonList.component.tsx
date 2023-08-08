import { useState } from "react";

import { Pokemon, Message } from "../../components";
import { useFetch } from "../../hooks";
import { PokemonModel, PaginationParamsModel } from "../../models";
import { Button, FormControl } from "../../stories";
import { PAGINATION } from "../../util";

import PokemonListStyle from "./PokemonList.module.scss";

export const PokemonList = () => {
  // State Variables
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pokemonName, setPokemonName] = useState<string>("");
  const [recordsPerPage, setRecordsPerPage] = useState<number>(PAGINATION[0]);
  const [paginationParams, setPaginationParams] =
    useState<PaginationParamsModel>({
      offset: 0,
      limit: PAGINATION[0],
    });

  // Custom Hooks
  const { pokemonList } = useFetch(pokemonName, paginationParams, setIsLoading);

  // Page Events
  const onClickPrevious = (): void => {
    let offset: number = paginationParams.offset - paginationParams.limit;
    if (paginationParams.offset - paginationParams.limit < 0) {
      offset = 0;
    }
    setPageRecords(offset, recordsPerPage);
  };

  const onClickNext = (): void => {
    setPageRecords(
      paginationParams.offset + paginationParams.limit,
      recordsPerPage
    );
  };

  // Helper Methods
  const setPageRecords = (offset: number, limit: number): void => {
    setPaginationParams({
      offset: offset,
      limit: limit,
    });
  };

  return (
    <>
      <section className="container">
        <div className={PokemonListStyle.filter}>
          <div
            className={`${PokemonListStyle.filter__btn}  ${
              pokemonName ? PokemonListStyle.disable : ""
            }`}
          >
            <span
              className={
                paginationParams.offset === 0 ? PokemonListStyle.disable : ""
              }
            >
              <Button label="Previous" onClick={onClickPrevious}></Button>
            </span>
            <Button label="Next" onClick={onClickNext}></Button>
          </div>
          <div className={PokemonListStyle.filter__search}>
            <FormControl
              label=""
              name="search"
              placeholder="search"
              type="text"
              value={pokemonName}
              onChange={setPokemonName}
            ></FormControl>
            <select
              className={PokemonListStyle.select}
              name="pagination"
              id="pagination"
              value={recordsPerPage}
              onChange={(e) => {
                const listSize = Number(e.target.value);
                setRecordsPerPage(listSize);
                setPageRecords(paginationParams.offset, listSize);
              }}
            >
              {PAGINATION.map((recordsPerPage) => {
                return (
                  <option key={recordsPerPage} value={recordsPerPage}>
                    {recordsPerPage}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        {pokemonList.length ? (
          <main className={`${PokemonListStyle.section}`}>
            {pokemonList.map((pokemon: PokemonModel) => {
              return <Pokemon key={pokemon.name} url={pokemon.url}></Pokemon>;
            })}
          </main>
        ) : (
          <Message
            message={isLoading ? "Loading ..." : "No Pokemon Found !!"}
          ></Message>
        )}
      </section>
    </>
  );
};
