import React from "react";
const numberOfSpans = 20;
const angles = Array.from(
  { length: numberOfSpans },
  (_, index) => (360 / numberOfSpans) * index
);
const LoadingRequset = () => {
  return (
    <div className="loader">
      {angles.map((angle, index) => (
        <span
          key={index}
          className="loader-span"
          style={{
            transform: `rotate(${angle}deg) translate(60px) rotate(-${angle}deg)`,
            animationDelay: `${index * 0.1}s`,
            opacity: `${index * 0.03}`,
          }}
        ></span>
      ))}
    </div>
  );
};

export default LoadingRequset;
