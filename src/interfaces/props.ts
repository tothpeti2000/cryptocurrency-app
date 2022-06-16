import { HTMLInputTypeAttribute } from "react";
import { Control, Path } from "react-hook-form";
import { Asset } from "./currency";
import { UserCredentials } from "./user";

export interface InputFieldProps {
  name: Path<UserCredentials>;
  label: string;
  type: HTMLInputTypeAttribute;
  control: Control<UserCredentials>;
}

export interface CurrencyListItemProps {
  currency: Asset;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  onDelete: (idx: number) => void;
}

export interface ErrorToastProps {
  message: string;
}
