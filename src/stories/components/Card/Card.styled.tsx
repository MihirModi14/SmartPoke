import { styled, css } from "styled-components";

interface StyledCardProps {
  type: "listing" | "details";
}

export const StyledCard = styled.div<StyledCardProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;

  border: 1px solid ${({ theme }) => theme.colors.primaryColor};
  border-radius: 1rem;
  box-shadow: 0 8px 12px rgba(${({ theme }) => theme.colors.blackColor}, 0.15);

  img {
    max-width: 15rem;
    max-height: 20rem;
  }

  ${({ type }) => type === "details" && StyledDetails}
`;

export const StyledUl = styled.ul`
  list-style: none;

  strong {
    font-weight: 500;
  }

  li {
    font-size: 1.5rem;
    margin-bottom: 0.6rem;
  }
`;

export const StyledAbility = styled.div`
  margin-top: 3rem;

  p {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  }

  li {
    color: ${({ theme }) => theme.colors.whiteColor};
    background: ${({ theme }) => theme.colors.primaryColor};
    border: 0;
    border-radius: 1rem;
    padding: 0.7rem 1.5rem;
  }
`;

const StyledDetails = css`
  flex-direction: column;
  justify-content: start;
  text-align: center;
  width: min-content;
  margin: auto;
  pointer-events: none;
  width: 35rem;
  max-width: 90%;

  img {
    margin-bottom: 2rem;
  }
`;
