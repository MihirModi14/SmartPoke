import { styled } from "styled-components";

export const StyledLabel = styled.label`
  text-transform: capitalize;
  display: block;
  font-size: 16px;
  margin-bottom: 0.7rem;
`;

export const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.grayColor2};
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.grayColor};
    font-weight: 500;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primaryColor};
    outline: none;
  }
`;

export const StyledError = styled.span`
  color: ${({ theme }) => theme.colors.redColor};
  font-size: 1.3rem;
`;
