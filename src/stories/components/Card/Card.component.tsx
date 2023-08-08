import { useNavigate } from "react-router-dom";

import { PokemonDetailsModel } from "../../../models";
import { ROUTES } from "../../../util";

import { Button } from "../Button";
import { StyledCard, StyledUl, StyledAbility } from "./Card.styled";

export const Card = (pokemon: PokemonDetailsModel) => {
  // React Router Hook
  const navigate = useNavigate();

  // Constant Variables
  const {
    id,
    name,
    height,
    weight,
    image,
    abilities,
    experience,
    order,
    type = "listing",
  } = pokemon;

  // Page Events
  const goToDetails = () => {
    navigate(ROUTES.DETAILS + "/" + id, { state: { pokemon: pokemon } });
  };

  return (
    <>
      <StyledCard type={type}>
        <img src={image} alt={name} />
        <div>
          <StyledUl>
            <li>
              <strong>Name: </strong>
              {name}
            </li>
            <li>
              <strong>height: </strong>
              {height}
            </li>
            <li>
              <strong>Weight: </strong>
              {weight}
            </li>
            {type === "details" ? (
              <>
                <li>
                  <strong>Base Experience: </strong>
                  {experience}
                </li>
                <li>
                  <strong>Order: </strong>
                  {order}
                </li>
              </>
            ) : null}
          </StyledUl>
          <StyledAbility>
            <StyledUl>
              <p>
                <strong> List of Abilities:</strong>
              </p>
              {abilities.map((ability, index) => {
                return <li key={index}>{ability.ability.name}</li>;
              })}
            </StyledUl>
          </StyledAbility>
          {type === "listing" && (
            <Button
              label="More Details"
              onClick={goToDetails}
              width="stretch"
              size="small"
              style={{
                marginTop: "1rem",
              }}
            ></Button>
          )}
        </div>
      </StyledCard>
    </>
  );
};
