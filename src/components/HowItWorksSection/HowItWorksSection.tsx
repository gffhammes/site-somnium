import { HowItWorksSectionMobile } from "./HowItWorksSectionMobile";

export interface IHowItWorksSectionProps {}

export const HowItWorksSection = (props: IHowItWorksSectionProps) => {
  return (
    <>
      <HowItWorksSectionMobile />
    </>
  );
};

export const timelineItems = [
  "Reunião de Setup",
  "Captação de Documentos",
  "Processamento do Financeiro",
  "Envio do Relatório",
  "Tomada de Decisão",
];
