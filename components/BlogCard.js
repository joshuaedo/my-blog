import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/BlogCard.module.css";
import moment from "moment";

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
          <Image src={coverPhoto.url} alt={title} width={1000} height={1000} />
          {/* <img src={coverPhoto.url} alt={title} /> */}
        </div>

        <div className={styles.text}>
          <h3>{title}</h3>
          <div className={styles.details}>
            <div className={styles.author}>
              <Image
                src={author.avatar.url}
                alt={author}
                width={55}
                height={55}
              />
              <h4>{author.name}</h4>
            </div>
            <h6 className={styles.date}>
              {moment(datePublished).format("MMMM d, YYYY")}
            </h6>
          </div>
        </div>
      </Link>
    </div>
  );
}
