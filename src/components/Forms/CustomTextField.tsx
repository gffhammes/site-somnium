"use client";

import { TextField, TextFieldProps } from "@mui/material";
import { useField } from "formik";

export interface ICustomTextFieldProps {
  name: string;
  textFieldProps?: TextFieldProps;
}

export const CustomTextField = ({
  name,
  textFieldProps,
}: ICustomTextFieldProps) => {
  const [input, meta, helper] = useField({ name });

  return (
    <TextField
      {...textFieldProps}
      {...input}
      error={meta.touched && !!meta.error}
      helperText={meta.touched && meta.error}
      color="secondary"
      sx={{
        "& .MuiInputBase-input": {
          color: "white",
        },
      }}
    />
  );
};
