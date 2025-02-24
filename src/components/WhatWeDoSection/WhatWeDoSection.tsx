import { Box } from "@mui/material";
import { WhatWeDoSectionMobile } from "./WhatWeDoSectionMobile";
import { WhatWeDoSectionDesktop } from "./WhatWeDoSectionDesktop";

export interface IWhatWeDoSectionProps {}

export const WhatWeDoSection = (props: IWhatWeDoSectionProps) => {
  return (
    <Box id="conteudo">
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <WhatWeDoSectionMobile />
      </Box>

      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <WhatWeDoSectionDesktop />
      </Box>
    </Box>
  );
};

export const whatWeDoItems = [
  {
    title: "Organização e controle financeiro",
    text: `Manter a organização financeira de uma empresa é essencial para garantir sua sustentabilidade e crescimento. Na Somnium Consultoria, ajudamos micro e pequenos empreendedores a estruturar e controlar suas finanças de forma simples, prática e eficiente, permitindo uma gestão mais estratégica e segura.

Nosso trabalho começa com uma análise detalhada da situação financeira do negócio, identificando gastos desnecessários, oportunidades de melhoria e pontos críticos que precisam de atenção. Utilizamos relatórios financeiros como DRE (Demonstração do Resultado do Exercício) e Fluxo de Caixa para oferecer um panorama real da saúde financeira da empresa. Esses relatórios ajudam a entender de onde vem o dinheiro, para onde ele está indo e qual é o real resultado do negócio.
`,
  },
  {
    title: "Acompanhamento de métricas e resultados",
    text: `Cuidamos da gestão completa das contas a pagar e a receber da sua empresa, garantindo que os pagamentos sejam feitos dentro do prazo e que os recebimentos aconteçam corretamente.

🔹 O que fazemos?
✅ Organizamos e monitoramos todas as contas a pagar, evitando atrasos e juros
✅ Agendamos e realizamos os pagamentos conforme as autorizações do cliente
✅ Controlamos as contas a receber e acompanhamos inadimplências
✅ Criamos relatórios claros para que você tenha total visão da sua situação financeira

Com esse controle, você não precisa mais se preocupar com boletos, vencimentos e cobranças – nós cuidamos de tudo, enquanto você foca no crescimento do seu negócio.
`,
  },
  {
    title: "Planejamento e Gestão de Fluxo de Caixa",
    text: `Cuidamos integralmente da gestão do fluxo de caixa da sua empresa, garantindo que você tenha sempre dinheiro disponível para as operações e tome decisões financeiras com mais segurança.

🔹 O que fazemos?
✅ Monitoramos diariamente as entradas e saídas de dinheiro
✅ Criamos projeções financeiras para evitar surpresas e garantir previsibilidade
✅ Organizamos e estruturamos um fluxo de caixa eficiente e atualizado
✅ Identificamos períodos de baixa e sugerimos estratégias para manter a saúde financeira
✅ Fornecemos relatórios claros e acessíveis para que você acompanhe tudo sem complicação

Com esse controle, você não precisa mais se preocupar em administrar os recursos do dia a dia – nós cuidamos disso para você, permitindo que foque no crescimento do seu negócio.
`,
  },
  {
    title: "Emissão de Notas Fiscais",
    text: `Cuidamos da emissão completa das notas fiscais da sua empresa, garantindo que tudo esteja regularizado e dentro das normas fiscais.

🔹 O que fazemos?
✅ Emitimos notas fiscais de produtos e serviços conforme a legislação vigente
✅ Gerenciamos o envio e o armazenamento das notas fiscais
✅ Organizamos e classificamos as notas para facilitar a gestão financeira
✅ Integramos a emissão de notas com o controle de contas a receber

Com esse serviço, você não precisa se preocupar com burocracia ou erros na emissão de notas – nós fazemos tudo por você, garantindo mais agilidade e segurança.
`,
  },
  {
    title: "Análise de Custos e Rentabilidade",
    text: `Entender onde o dinheiro está sendo gasto e quais atividades realmente trazem lucro é essencial para qualquer negócio.
    
A análise de custos e rentabilidade permite identificar desperdícios, otimizar recursos e tomar decisões mais estratégicas para aumentar a margem de lucro e a eficiência financeira da empresa.
`,
  },
  {
    title: "Estratégias para Aumento da Lucratividade",
    text: `A lucratividade de um negócio não depende apenas de vender mais, mas também de otimizar processos, reduzir desperdícios e tomar decisões estratégicas baseadas em dados financeiros.
    
Com um planejamento eficiente, é possível maximizar os lucros sem necessariamente aumentar os custos.
`,
  },
  {
    title: "Treinamento e Capacitação para Empreendedores",
    text: `Empreender exige mais do que apenas uma boa ideia – é preciso conhecimento, estratégia e habilidades práticas para tomar decisões assertivas e manter o negócio sustentável.
    
O treinamento e capacitação são essenciais para que os empreendedores desenvolvam uma visão financeira mais clara, melhorem a gestão da empresa e aumentem suas chances de sucesso.`,
  },
];
