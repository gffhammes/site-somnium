"use client";

import { useBreakpoints } from "@/useBreakpoints";
import { HTMLMotionProps, motion } from "framer-motion";

export interface IAnimateProps extends HTMLMotionProps<"div"> {
  responsiveDelay?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

export const Animate = ({
  children,
  responsiveDelay,
  ...props
}: IAnimateProps) => {
  const { sm, md, lg, xl } = useBreakpoints();

  const getDelay = () => {
    if (xl && !!responsiveDelay?.xl) {
      return responsiveDelay.xl;
    }

    if (lg && !!responsiveDelay?.lg) {
      return responsiveDelay.lg;
    }

    if (md && !!responsiveDelay?.md) {
      return responsiveDelay.md;
    }

    if (sm && !!responsiveDelay?.sm) {
      return responsiveDelay.sm;
    }

    if (!!responsiveDelay?.xs) {
      return responsiveDelay.xs;
    }

    return 0;
  };

  const delay = getDelay();

  return (
    <motion.div {...props} transition={{ ...props.transition, delay }}>
      {children}
    </motion.div>
  );
};
