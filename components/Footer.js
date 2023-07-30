import { useDate } from "@/hooks/useDate";
export default function Footer() {
  const { year, wish } = useDate();
  return (
    <div
      className={`flex h-10 items-center justify-between text-center font-normal pl-6 pr-9 pb-9 bebas-neue`}
    >
      <p>{year + ` Joshua Edo • ALL RIGHTS RESERVED`}</p> <p>{wish}</p>
    </div>
  );
}
