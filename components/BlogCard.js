import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/BlogCard.module.css";

export default function BlogCard({
  title,
  author,
  coverPhoto,
  slug,
  id,
  datePublished,
}) {
  return (
    <div className={styles.card}>
      <Link href={"/posts/" + slug}>
        <div className={styles.imgContainer}>
          <Image src={coverPhoto.url} alt={title} width={220} height={220} />
        </div>
      </Link>
    </div>
  );
}
