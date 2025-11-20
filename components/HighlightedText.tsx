import React from 'react';

const HighlightedText = ({ children, bgColor = "bg-[#f2f1e7]", textColor = "text-[#59815B]" }: { children?: React.ReactNode, bgColor?: string, textColor?: string }) => (
  <span className="relative inline-block">
    <span
      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] h-[60%] ${bgColor} -rotate-1 z-0`}
      aria-hidden="true"
    />
    <span className={`relative z-10 ${textColor}`}>{children}</span>
  </span>
);

export default HighlightedText;
