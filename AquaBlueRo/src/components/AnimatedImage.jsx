import React from "react";
import useInView from "../hooks/useInView";
import "./AnimatedImage.css";

export default function AnimatedImage({ src, alt, height = 500 }) {
  const [imageRef, inView] = useInView({ threshold: 0.1 });

  return (
    <img
      ref={imageRef}
      src={src}
      alt={alt}
      height={height}
      className={`animated-image ${inView ? "in-view" : ""}`}
    />
  );
}
