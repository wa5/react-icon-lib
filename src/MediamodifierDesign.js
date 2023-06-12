import * as React from "react";
const SvgMediamodifierDesign = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    viewBox="0 0 1080 1080"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M18.315 23.231h63.369c2.61 0 4.796 1.853 4.796 4.169v32.835c0 2.269-2.186 4.168-4.796 4.168H54.877L38.035 76.77l6.395-12.365H18.315c-2.665 0-4.796-1.899-4.796-4.168V27.401c0-2.317 2.132-4.17 4.796-4.17z"
      style={{
        stroke: "#000",
        strokeWidth: 0,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeDashoffset: 0,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        fill: "#656565",
        fillRule: "nonzero",
        opacity: 1,
      }}
      transform="translate(490 490)"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
);
export default SvgMediamodifierDesign;
