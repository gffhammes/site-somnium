"use client";

import { useBreakpoints } from "@/useBreakpoints";
import { Button, ButtonProps } from "@mui/material";
import { scrollTo } from "./utils";

export interface IScrollButtonProps extends ButtonProps {
  targetSection: string;
}

export const ScrollButton = ({
  targetSection,
  ...props
}: IScrollButtonProps) => {
  const { md } = useBreakpoints();

  return (
    <Button {...props} onClick={() => scrollTo(targetSection, md ? 50 : 0)} />
  );
};
