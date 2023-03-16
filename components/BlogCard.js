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
  function titleToTitleCase(title) {
    return title
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
      })
      .join(" ");
  }

  return (
    <div className={styles.card} key={id}>
      <Link href={"/posts/" + slug}>
        <div className={styles.imgContainer}>
          <Image src={coverPhoto.url} alt={title} width={1000} height={1000} />
        </div>

        <div className={styles.text}>
          <h3>{titleToTitleCase(title)}</h3>
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
            <h6 className={styles.date}>{datePublished}</h6>
          </div>
        </div>
      </Link>
    </div>
  );
}
