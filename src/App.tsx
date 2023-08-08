import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Header } from "./components";
import { GlobalContext } from "./contexts";
import { GlobalContextType } from "./models";
import { Login, PokemonDetails, PokemonList, Register } from "./pages";
import { Theme } from "./theme/default";
import { GET_QUERY_PARAM, ROUTES } from "./util";

import "./App.scss";

function App() {
  // Context API
  const { userDetails } = useContext<GlobalContextType>(GlobalContext);

  // Constant Variable
  const isUserLogged: boolean = userDetails.email !== "";

  return (
    <>
      <ThemeProvider theme={Theme}>
        {isUserLogged ? (
          <>
            <Header></Header>
            <Routes>
              <Route
                path={ROUTES.POKEMONLIST}
                element={<PokemonList />}
              ></Route>
              <Route
                path={ROUTES.DETAILS + GET_QUERY_PARAM.POKEMON_ID}
                element={<PokemonDetails />}
              ></Route>

              <Route
                path={ROUTES.NOT_FOUND}
                element={<Navigate to={ROUTES.POKEMONLIST}></Navigate>}
              ></Route>
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path={ROUTES.LOGIN} element={<Login />}></Route>
            <Route path={ROUTES.REGISTER} element={<Register />}></Route>
            <Route
              path={ROUTES.NOT_FOUND}
              element={<Navigate to={ROUTES.LOGIN}></Navigate>}
            ></Route>
          </Routes>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
