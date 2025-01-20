"use client";

import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik, FormikErrors } from "formik";
import { CustomTextField } from "../Forms/CustomTextField";
import { PhoneInput } from "../Forms/PhoneInput";
import { validateEmail } from "../utils";

export interface IFormSectionProps {}

export const FormSection = (props: IFormSectionProps) => {
  const handleValidate = (values: IValues) => {
    const errors: FormikErrors<IValues> = {};

    if (values.name === "") {
      errors.name = "Obrigatório";
    }

    if (values.email === "") {
      errors.email = "Obrigatório";
    } else if (!validateEmail(values.email)) {
      errors.email = "Informe um e-mail válido";
    }

    if (values.phone === "") {
      errors.phone = "Obrigatório";
    }

    return errors;
  };

  return (
    <Box sx={{ backgroundColor: "primary.main", py: 10 }} id="contato">
      <Container maxWidth="sm">
        <Stack gap={4}>
          <Typography variant="h2" color="white">
            Acha que podemos lhe ajudar? Fale conosco!
          </Typography>

          <Formik
            initialValues={{ name: "", email: "", phone: "", message: "" }}
            onSubmit={() => {}}
            validate={handleValidate}
          >
            <Form>
              <Stack gap={2}>
                <CustomTextField
                  name="name"
                  textFieldProps={{ placeholder: "Seu nome *" }}
                />

                <CustomTextField
                  name="email"
                  textFieldProps={{ placeholder: "Seu e-mail *" }}
                />

                <PhoneInput name="phone" placeholder="Telefone *" />

                <CustomTextField
                  name="message"
                  textFieldProps={{
                    multiline: true,
                    placeholder: "Conta pra gente! O que você precisa?",
                    rows: 4,
                  }}
                />

                <Button variant="contained" color="secondary" type="submit">
                  Enviar
                </Button>
              </Stack>
            </Form>
          </Formik>
        </Stack>
      </Container>
    </Box>
  );
};

interface IValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}
