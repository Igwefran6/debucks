import React from "react";

const RadialProgressBar = ({
  progress,
  size = 100,
  strokeWidth = 10,
  color = "#03B076",
  smallText = "",
  bigText = "",
}) => {
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="absolute -rotate-90" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#D9D9D9"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset,
            transition: "stroke-dashoffset 0.5s",
          }}
        />
      </svg>
      <div
        className="absolute text-lg font-bold text-center flex flex-col justify-center leading-4 text-dark bg-light rounded-full "
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: `${size - 25}px`,
          height: `${size - 25}px`,
        }}
      >
        <span className="text-[10px]">{smallText}</span>
        <span className="">{bigText}</span>
      </div>
    </div>
  );
};

export default RadialProgressBar;
