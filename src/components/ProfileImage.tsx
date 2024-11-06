// src/components/ProfileImage.tsx

import Image from "next/image";

interface ProfileImageProps {
  src: string;
  alt: string;
  size?: number;
}

export default function ProfileImage({ src, alt, size = 250 }: ProfileImageProps) {
  return (
    <div className="mb-6">
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="rounded-full shadow-lg"
      />
    </div>
  );
}
