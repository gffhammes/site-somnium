"use client";

import animationData from "../../lotties/success.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

export interface ISuccessLottieProps {}

export const SuccessLottie = (props: ISuccessLottieProps) => {
  return (
    <Lottie
      options={{
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      }}
      height="100%"
      width="100%"
    />
  );
};
