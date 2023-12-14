import React from 'react';

// Icon based from Figma Design

const HomeIcon = ({ fill = "#3154A6" }) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <mask id="mask0_249_1802" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
            <rect width="32" height="32" fill="#203A73" />
        </mask>
        <g mask="url(#mask0_249_1802)">
            <path d="M5.33334 28V12L16 4L26.6667 12V28H18.6667V18.6667H13.3333V28H5.33334Z" fill={fill} />
        </g>
    </svg>
);


export default HomeIcon;
