import { StyledButton } from "./Button.styled";

interface ButtonProps {
  label: string;
  primary?: boolean;
  size?: "small" | "medium" | "large";
  width?: "normal" | "stretch";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  style?: Object;
}

export const Button = ({
  label,
  primary = false,
  size = "medium",
  width = "normal",
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      width={width}
      type={type}
      $primary={primary}
      size={size}
      {...props}
    >
      {label}
    </StyledButton>
  );
};
