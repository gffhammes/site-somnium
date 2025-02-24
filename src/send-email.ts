import { IContactFormValues } from "./components/FormSection/FormSection";

export const sendEmail = async (data: IContactFormValues) => {
  const apiEndpoint = "/api/email";

  const response = await fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw Error();
  }

  return response;
};
