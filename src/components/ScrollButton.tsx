"use client";

import { useBreakpoints } from "@/useBreakpoints";
import { Button, ButtonProps } from "@mui/material";
import { scrollTo } from "./utils";

export interface IScrollButtonProps extends ButtonProps {
  targetSection: string;
  offset?: number;
}

export const ScrollButton = ({
  targetSection,
  offset,
  ...props
}: IScrollButtonProps) => {
  const { md } = useBreakpoints();

  return (
    <Button
      {...props}
      onClick={() => scrollTo(targetSection, offset ?? md ? 50 : 0)}
    />
  );
};
