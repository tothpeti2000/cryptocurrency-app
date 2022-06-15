import { HTMLInputTypeAttribute } from "react";
import { Control, Path } from "react-hook-form";
import { UserCredentials } from "./user";

export interface InputFieldProps {
  name: Path<UserCredentials>;
  label: string;
  type: HTMLInputTypeAttribute;
  control: Control<UserCredentials>;
}

export interface CurrencyListItemProps {
  currency: string;
  min: number;
  max: number;
}

export interface HeaderProps {
  userName: string;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
