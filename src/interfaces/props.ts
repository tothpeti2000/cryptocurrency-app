import { Control } from "react-hook-form";
import { UserCredentials } from "./user";

export interface InputFieldProps {
  name: "userName" | "password";
  label: string;
  type: string;
  control: Control<UserCredentials>;
}
