"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

export interface ISuccessLottieProps {}

export const SuccessLottie = (props: ISuccessLottieProps) => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/lotties/success.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

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
