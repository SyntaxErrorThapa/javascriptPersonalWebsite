import React, { useEffect, useState } from "react";
import { RoughNotation } from "react-rough-notation";
import { useInView } from "react-intersection-observer";

function RoughHighlight({
  children,
  color = "#E06C75",
  threshold = 0.6,
  typeBox = "highlight",
  alwaysHighlight = false,
  strokeWidth = null
}) {
  const [isInView, setIsInView] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  useEffect(() => {
    if (alwaysHighlight || inView) {
      setIsInView(true);
    }
  }, [inView, alwaysHighlight]);

  return (
    <span ref={ref} style={{ display: "inline" }}>
      <RoughNotation
        type={typeBox}
        show={isInView}
        color={color}
        strokeWidth={strokeWidth}
        animationDuration={2000}
        multiline={false}
      >
        {children}
      </RoughNotation>
    </span>
  );
}

export default RoughHighlight;
