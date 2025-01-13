// "use client";

// import { Box, Stack, Typography } from "@mui/material";
// import { timelineItems } from "./HowItWorksSection";
// import { useEffect, useRef, useState } from "react";

// export interface IMobileTimelineProps {}

// export const MobileTimeline = (props: IMobileTimelineProps) => {
//   const [activeItem, setActiveItem] = useState(-1);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const screenHeight = useRef(0);

//   useEffect(() => {
//     window.addEventListener("scroll", (e) => {
//       const triggerHeight = screenHeight.current / 2;

//       const containerTopDistance =
//         containerRef.current!.getClientRects()[0].top;

//       const mustTrigger = containerTopDistance <= triggerHeight;

//       if (mustTrigger) {
//         setActiveItem(0);
//       }

//       console.log(mustTrigger);
//     });

//     screenHeight.current = window.innerHeight;

//     return window.removeEventListener("scroll", () => {});
//   }, []);

//   return (
//     <Stack ref={containerRef}>
//       {timelineItems.map((item, index) => {
//         const isLastItem = index === timelineItems.length - 1;

//         const isActiveItem = index === activeItem;

//         return (
//           <Box
//             key={item}
//             display="grid"
//             gridTemplateAreas={`
//             "dot    text"
//             "line   nothing"
//           `}
//             justifyContent="start"
//             alignItems="center"
//             columnGap={2}
//           >
//             <Stack
//               sx={{ height: "2rem", width: "2rem" }}
//               alignItems="center"
//               justifyContent="center"
//             >
//               <Box
//                 gridArea="dot"
//                 sx={{
//                   height: isActiveItem ? "2rem" : "1rem",
//                   width: isActiveItem ? "2rem" : "1rem",
//                   borderRadius: isActiveItem ? "2rem" : "1rem",
//                   backgroundColor: "primary.main",
//                 }}
//               />
//             </Stack>

//             <Typography
//               fontSize={20}
//               gridArea="text"
//               lineHeight={1}
//               fontWeight={isActiveItem ? "bold" : "500"}
//             >
//               {item}
//             </Typography>

//             {!isLastItem && (
//               <Box gridArea="line">
//                 <Box
//                   sx={{
//                     height: "3rem",
//                     width: "1px",
//                     backgroundColor: "primary.main",
//                     mx: "auto",
//                   }}
//                 />
//               </Box>
//             )}
//           </Box>
//         );
//       })}
//     </Stack>
//   );
// };

"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { timelineItems } from "./HowItWorksSection";

export const MobileTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const observerRef = useRef<any>(null); // Referência para o Intersection Observer

  const handleScroll = () => {
    const items = document.querySelectorAll(".timeline-item");
    const windowHeight = window.innerHeight;

    items.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const offset = windowHeight / 2 + 100;

      if (rect.top < offset && rect.bottom > offset) {
        setActiveIndex(index);
      }
    });
  };

  useEffect(() => {
    const observeVisibility = (entries: any) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        window.addEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    };

    observerRef.current = new IntersectionObserver(observeVisibility, {
      root: null, // Usa a viewport como referência
      threshold: 0.1, // Dispara quando 10% do container estiver visível
    });

    if (containerRef.current) {
      observerRef.current.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <Stack ref={containerRef}>
      {timelineItems.map((item, index) => {
        const isLastItem = index === timelineItems.length - 1;

        const isActiveItem = index === activeIndex;

        return (
          <Box
            key={index}
            className="timeline-item"
            display="grid"
            gridTemplateAreas={`
            "dot    text"
            "line   nothing"
          `}
            justifyContent="start"
            alignItems="center"
            columnGap={2}
          >
            <Box
              gridArea="dot"
              sx={{
                height: "1rem",
                width: "1rem",
                borderRadius: "1rem",
                backgroundColor: "primary.main",
                transform: isActiveItem ? "scale(2)" : "none",
                transition: ".3s ease all",
              }}
            />

            <Typography
              fontSize={20}
              gridArea="text"
              lineHeight={1}
              fontWeight={isActiveItem ? "bold" : "500"}
              sx={{
                transition: ".3s ease all",
              }}
            >
              {item}
            </Typography>

            {!isLastItem && (
              <Box gridArea="line">
                <Box
                  sx={{
                    height: "3rem",
                    width: "1px",
                    backgroundColor: "primary.main",
                    mx: "auto",
                  }}
                />
              </Box>
            )}
          </Box>
        );
      })}
    </Stack>
  );
};
