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
    <div className="flex justify-center pb-4">
      <div className="border-bottom">
        <div className="relative img-border overflow-hidden">
          <Link href={"/posts/" + slug}>
            <Image
              src={coverPhoto.url}
              height={1000}
              width={1000}
              alt={title}
              className="h-[320px] w-[233px] rounded-sm object-cover md:h-[380px] md:w-[310px] hover:scale-105 transition ease-in-out"
            />
            <div className="bg-[#f6f6f6] text-black stardom absolute top-4 right-6 px-4 text-lg py-1 rounded-full border border-black">
              {author.name + ` • ` + datePublished}
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <p className="bebas-neue tracking-tight inline w-[233px] pt-4 pb-12 text-2xl font-medium uppercase md:w-[310px] md:text-3xl">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
