import { useDate } from "@/hooks/useDate";
export default function Footer() {
  const { year, wish } = useDate();
  return (
    <div
      className={`flex h-10 items-center justify-between text-center font-normal pl-4 pr-4 pb-6 md:pr-9 bebas-neue bg-[#191919] text-sm md:text-base`}
    >
      <p>&#169; {+year + ` Joshua Edo • ALL RIGHTS RESERVED`}</p> <p>{wish}</p>
    </div>
  );
}
