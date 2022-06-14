import { FormControl, Input, InputLabel } from "@mui/material";
import { Controller } from "react-hook-form";
import { InputFieldProps } from "../../interfaces/props";

const InputField = (props: InputFieldProps) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      defaultValue=""
      render={({ field }) => (
        <FormControl>
          <InputLabel htmlFor={props.name}>{props.label}</InputLabel>
          <Input type={props.type} id={props.name} {...field} />
        </FormControl>
      )}
    />
  );
};

export default InputField;
