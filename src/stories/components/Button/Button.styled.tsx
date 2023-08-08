import { styled } from "styled-components";

interface StyledButtonProps {
  $primary: boolean;
  size: "small" | "medium" | "large";
  width: "normal" | "stretch";
}

export const StyledButton = styled.button<StyledButtonProps>`
  height: max-content;
  font-size: ${({ size, width }) =>
    width !== "stretch" && size === "small"
      ? "12px"
      : width !== "stretch" && size === "medium"
      ? "14px"
      : "16px"};
  font-weight: 500;
  line-height: 1;
  color: ${({ $primary, theme }) =>
    $primary ? theme.colors.whiteColor : theme.colors.blackColor};

  cursor: pointer;
  display: inline-block;
  background-color: ${({ $primary, theme }) =>
    $primary ? theme.colors.primaryColor : theme.colors.whiteColor};
  box-shadow: ${({ $primary }) =>
    $primary ? "none" : "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset"};
  padding: ${({ size }) =>
    size === "small"
      ? "10px 16px"
      : size == "medium"
      ? "11px 20px"
      : "12px 24px"};

  min-width: 7rem;
  border: 0;
  border: ${({ $primary, theme }) =>
    `1px solid ${
      $primary ? theme.colors.whiteColor : theme.colors.primaryColor
    }`};
  border-radius: 0.8rem;

  width: ${({ width }) => (width === "normal" ? "auto" : "100%")};
`;
