import Link from "next/link";
import Image from "next/image";

export default function BlogCard({
  title,
  author,
  coverPhoto,
  slug,
  id,
  datePublished,
}) {
  return (
    <Link href={"/posts/" + slug}>
      <div className="relative px-[1.5rem] md:pl-[2rem]">
        <div className="flex cursor-pointer items-center justify-center">
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
          <p className="bebas-neue tracking-wide inline w-[233px] pt-3 text-2xl font-medium uppercase md:w-[332px] md:text-3xl">
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
}
