import { transform } from "@svgr/core";

const svgCode = `
<svg width="55" height="44" viewBox="0 0 55 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dii_55_7856)">
<path d="M2.17191 39.6054L0.609987 2.60544C0.550008 1.18462 1.68568 0 3.10776 0H16.4053C17.2828 0 18.096 0.460009 18.548 1.21205L19.4578 2.72561C19.5482 2.87602 19.7109 2.96802 19.8864 2.96802H50.9001C52.3192 2.96802 53.4538 4.14788 53.3982 5.56589L52.0649 39.5979C52.0124 40.9395 50.9095 42 49.5669 42H4.66969C3.32999 42 2.22842 40.9439 2.17191 39.6054Z" fill="url(#paint0_linear_55_7856)"/>
<path d="M2.32178 39.5991L0.759853 2.59912C0.703473 1.26355 1.771 0.15 3.10776 0.15H16.4053C17.2301 0.15 17.9946 0.582409 18.4195 1.28933L19.3293 2.80288L19.4578 2.72561L19.3293 2.80289C19.4468 2.99842 19.6582 3.11802 19.8864 3.11802H50.9001C52.2341 3.11802 53.3006 4.22709 53.2483 5.56002L51.9151 39.592C51.8657 40.8531 50.8289 41.85 49.5669 41.85H4.66969C3.41037 41.85 2.37489 40.8573 2.32178 39.5991Z" stroke="url(#paint1_linear_55_7856)" stroke-width="0.3"/>
</g>
<g filter="url(#filter1_d_55_7856)">
<path d="M3.60254 4.77576H50.4416L49.8806 18.2188H4.05694L3.60254 4.77576Z" fill="white"/>
</g>
<g filter="url(#filter2_dii_55_7856)">
<path d="M3.55861 7.36383H49.9053C51.3094 7.36383 52.4387 8.50816 52.4072 9.91191C52.2778 15.6782 51.975 29.9665 51.925 39.5031C51.9178 40.8838 50.7987 41.9999 49.4179 41.9999H4.86703C3.5292 41.9999 2.42847 40.9467 2.36946 39.6102L1.06104 9.9741C0.998235 8.5515 2.13462 7.36383 3.55861 7.36383Z" fill="url(#paint2_linear_55_7856)"/>
<path d="M3.55861 7.51383H49.9053C51.2261 7.51383 52.2869 8.58975 52.2573 9.90854C52.1279 15.6747 51.825 29.9642 51.775 39.5023C51.7682 40.8007 50.7159 41.8499 49.4179 41.8499H4.86703C3.60947 41.8499 2.57478 40.8599 2.51931 39.6036L1.2109 9.96748C1.15186 8.63024 2.22006 7.51383 3.55861 7.51383Z" stroke="url(#paint3_linear_55_7856)" stroke-width="0.3"/>
</g>
<g filter="url(#filter3_dii_55_7856)">
<rect x="33.334" y="12.4445" width="12.9268" height="6.74074" rx="1" fill="url(#paint4_linear_55_7856)"/>
</g>
<rect x="35.4023" y="14.5185" width="9" height="0.75" rx="0.375" fill="white"/>
<rect x="35.4023" y="16.3334" width="6" height="0.75" rx="0.375" fill="white"/>
<defs>
<filter id="filter0_dii_55_7856" x="0.350593" y="-0.257317" width="53.8217" height="43.2866" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.257317" dy="0.514634"/>
<feGaussianBlur stdDeviation="0.257317"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_55_7856"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_55_7856" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.257317" dy="0.257317"/>
<feGaussianBlur stdDeviation="0.257317"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.941667 0 0 0 0 0.941667 0 0 0 0 0.941667 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_55_7856"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.771951" dy="-0.771951"/>
<feGaussianBlur stdDeviation="0.128659"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.895833 0 0 0 0 0.895833 0 0 0 0 0.895833 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_55_7856" result="effect3_innerShadow_55_7856"/>
</filter>
<filter id="filter1_d_55_7856" x="2.05864" y="2.71722" width="50.9559" height="17.5601" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.514634"/>
<feGaussianBlur stdDeviation="1.02927"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_55_7856"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_55_7856" result="shape"/>
</filter>
<filter id="filter2_dii_55_7856" x="0.801277" y="7.10651" width="52.3784" height="35.9227" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.257317" dy="0.514634"/>
<feGaussianBlur stdDeviation="0.257317"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_55_7856"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_55_7856" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.771951" dy="0.771951"/>
<feGaussianBlur stdDeviation="0.257317"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_55_7856"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.771951" dy="-0.771951"/>
<feGaussianBlur stdDeviation="0.128659"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.879167 0 0 0 0 0.879167 0 0 0 0 0.879167 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_55_7856" result="effect3_innerShadow_55_7856"/>
</filter>
<filter id="filter3_dii_55_7856" x="32.8194" y="12.1871" width="13.956" height="7.76999" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.257317"/>
<feGaussianBlur stdDeviation="0.257317"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.734635 0 0 0 0 0.762891 0 0 0 0 0.904167 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_55_7856"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_55_7856" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.257317"/>
<feGaussianBlur stdDeviation="0.257317"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.815781 0 0 0 0 0.841792 0 0 0 0 0.945833 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_55_7856"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.257317" dy="-0.257317"/>
<feGaussianBlur stdDeviation="0.128659"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.329412 0 0 0 0 0.364706 0 0 0 0 0.501961 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_55_7856" result="effect3_innerShadow_55_7856"/>
</filter>
<linearGradient id="paint0_linear_55_7856" x1="43.7959" y1="3.78461" x2="20.5026" y2="53.9938" gradientUnits="userSpaceOnUse">
<stop stop-color="#D8D8D8"/>
<stop offset="0.855332" stop-color="#CACACA"/>
</linearGradient>
<linearGradient id="paint1_linear_55_7856" x1="5.65061" y1="-4.98352" x2="27.3928" y2="42.3559" gradientUnits="userSpaceOnUse">
<stop stop-color="#E0DEDE"/>
<stop offset="0.192009" stop-color="#E7E7E7"/>
<stop offset="0.703503" stop-color="#D9D9D9"/>
<stop offset="0.962692" stop-color="#C3C3C7"/>
</linearGradient>
<linearGradient id="paint2_linear_55_7856" x1="43.3463" y1="11.1555" x2="26.7008" y2="53.924" gradientUnits="userSpaceOnUse">
<stop stop-color="#EBEBEC"/>
<stop offset="0.855332" stop-color="#EDEDEE"/>
</linearGradient>
<linearGradient id="paint3_linear_55_7856" x1="6.64733" y1="4.07853" x2="22.1703" y2="44.3658" gradientUnits="userSpaceOnUse">
<stop stop-color="#E0DEDE"/>
<stop offset="0.192009" stop-color="#E7E7E7"/>
<stop offset="0.703503" stop-color="#D9D9D9"/>
<stop offset="0.962692" stop-color="#C3C3C7"/>
</linearGradient>
<linearGradient id="paint4_linear_55_7856" x1="37.8486" y1="12.1794" x2="40.7258" y2="19.5205" gradientUnits="userSpaceOnUse">
<stop stop-color="#ABB2D0"/>
<stop offset="1" stop-color="#8E98BE"/>
</linearGradient>
</defs>
</svg>

`;

const jsCode = await transform(
  svgCode,
  {
    plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx", "@svgr/plugin-prettier"],
    icon: true,
  },
  { componentName: "MyComponent" }
);
console.log("jsCode", jsCode);
