"use client";

import { BaseTextFieldProps, TextField } from "@mui/material";
import { useField } from "formik";
import { forwardRef } from "react";
import { PatternFormat, PatternFormatProps } from "react-number-format";
import { CustomTextField } from "./CustomTextField";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export const NumericFormatCustom = forwardRef<PatternFormatProps, CustomProps>(
  function NumericFormatCustom({ onChange, name, ...other }, ref) {
    return (
      <PatternFormat
        {...other}
        name={name}
        getInputRef={ref}
        valueIsNumericString
        format="(##) #####-####"
        onValueChange={(values) => {
          onChange({
            target: {
              name: name,
              value: values.value,
            },
          });
        }}
      />
    );
  }
);

export interface ICurrencyInputProps extends BaseTextFieldProps {
  name: string;
}

export const PhoneInput = ({ name, ...props }: ICurrencyInputProps) => {
  return (
    <CustomTextField
      textFieldProps={{
        ...props,
        slotProps: {
          input: {
            inputComponent: NumericFormatCustom as any,
          },
        },
      }}
      name={name}
    />
  );
};
