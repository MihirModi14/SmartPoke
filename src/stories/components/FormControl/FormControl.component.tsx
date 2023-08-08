import { FocusEvent } from "react";

import { StyledInput, StyledLabel, StyledError } from "./FormControl.styled";

interface FormControlProps {
  label: string;
  name: string;
  placeholder: string;
  type: "text" | "number" | "password" | "email";
  value: string | number;
  onChange?: (e: string) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  error?: string;
}

export const FormControl = ({
  label,
  name,
  placeholder,
  type,
  value,
  onChange,
  onBlur,
  error,
}: FormControlProps) => {
  return (
    <div className="form-control">
      {label != "" && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <StyledInput
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => {
          onChange && onChange(e.target.value);
        }}
        placeholder={placeholder}
        onBlur={onBlur}
      ></StyledInput>
      <StyledError>{error}</StyledError>
    </div>
  );
};
