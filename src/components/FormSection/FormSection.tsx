"use client";

import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  Stack,
  Typography,
} from "@mui/material";
import { Form, Formik, FormikErrors } from "formik";
import { CustomTextField } from "../Forms/CustomTextField";
import { PhoneInput } from "../Forms/PhoneInput";
import { validateEmail } from "../utils";
import { sendEmail } from "@/send-email";
import { toast } from "react-toastify";
import { useState } from "react";
import { SuccessLottie } from "./SuccessLottie";

export interface IFormSectionProps {}

export const FormSection = (props: IFormSectionProps) => {
  const [sendingState, setSendingState] = useState<
    "none" | "sending" | "success" | "error"
  >("none");

  const handleValidate = (values: IContactFormValues) => {
    const errors: FormikErrors<IContactFormValues> = {};

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
    <>
      <Box sx={{ backgroundColor: "primary.main", py: 10 }} id="contato">
        <Container maxWidth="sm">
          <Stack gap={4}>
            <Typography variant="h2" color="white">
              Acha que podemos lhe ajudar? Fale conosco!
            </Typography>

            <Formik
              initialValues={{ name: "", email: "", phone: "", message: "" }}
              onSubmit={async (values, { resetForm }) => {
                setSendingState("sending");

                try {
                  await sendEmail(values);

                  resetForm();

                  setSendingState("success");
                } catch {
                  toast(
                    "Houve um erro ao realizar seu cadastro. Tente novamente mais tarde.",
                    {
                      type: "error",
                    }
                  );

                  setSendingState("error");
                }
              }}
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

      <Backdrop open={sendingState === "sending"}>
        <CircularProgress />
      </Backdrop>

      <Dialog open={sendingState === "success"}>
        <Box maxWidth="25rem" width="100%" sx={{ aspectRatio: "1 / 1" }}>
          <SuccessLottie />
        </Box>

        <Stack sx={{ px: 4 }} alignItems="center" gap={2}>
          <Typography fontWeight="bold" fontSize={32} textAlign="center">
            Recebemos seu contato!
          </Typography>

          <Typography textAlign="center" maxWidth="32ch">
            Fique atento! Em breve um especialista vai entrar em contato com
            você.
          </Typography>
        </Stack>

        <Box sx={{ p: 4, width: "100%" }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setSendingState("none")}
            fullWidth
          >
            Entendi
          </Button>
        </Box>
      </Dialog>
    </>
  );
};

export interface IContactFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}
