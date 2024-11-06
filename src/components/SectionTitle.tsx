// src/components/SectionTitle.tsx

import React from "react";

interface SectionTitleProps {
  text: string;
}

export default function SectionTitle({ text }: SectionTitleProps) {
  return <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">{text}</h2>;
}
