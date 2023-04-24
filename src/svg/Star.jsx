import React from "react";

const Star = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 -0.5 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0005 0L21.4392 9.27275L32.0005 11.5439L24.8005 19.5459L25.889 30.2222L16.0005 25.895L6.11194 30.2222L7.20049 19.5459L0.000488281 11.5439L10.5618 9.27275L16.0005 0Z"
        fill="#FFCB45"
      />
    </svg>
  );
};

export default Star;
