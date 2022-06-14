import { HTMLInputTypeAttribute } from "react";
import { Control, Path } from "react-hook-form";
import { UserCredentials } from "./user";

export interface InputFieldProps {
  name: Path<UserCredentials>;
  label: string;
  type: HTMLInputTypeAttribute;
  control: Control<UserCredentials>;
}
