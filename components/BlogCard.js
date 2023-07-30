import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function BlogCard({
  title,
  author,
  coverPhoto,
  slug,
  id,
  datePublished,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <Link href={"/posts/" + slug}>
      <div className="relative px-[1.5rem] md:pl-[2rem]">
        <div
          className="flex cursor-pointer items-center justify-center"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <div className="relative">
            <Image
              src={coverPhoto.url}
              height={1000}
              width={1000}
              alt={title}
              className="h-[320px] w-[233px]  rounded-sm object-cover md:h-[457px] md:w-[332px]"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p className="inline w-[233px] pt-3 text-2xl font-thin md:w-[332px] md:text-3xl">
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
}
