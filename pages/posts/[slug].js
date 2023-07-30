import styles from "@/styles/Slug.module.css";
import { GraphQLClient, gql } from "graphql-request";
import MetaHead from "@/components/MetaHead";
import Image from "next/image"

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/clf2r6wkc3she01ug8x5v90uv/master"
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      datePublished
      author {
        id
        name
        avatar {
          url
        }
      }
      content {
        html
      }
      coverPhoto {
        id
        url
      }
    }
  }
`;
const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 30,
  };
}

export default function BlogPost({ post }) {
  return (
    <>
        <MetaHead>
        <title>{post.title}</title>
        {/* OpenGraph */}
        <meta property="og:title" content="Joshua Edo • Blog" />
        <meta property="og:url" content={`https://blog.joshuaedo.com/posts/${post.slug}`} />
        <meta
          property="og:image:url"
          content={post.coverPhoto.url}
        />
        {/* Twitter  */}
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content={post.coverPhoto.url}
        />
      </MetaHead>
      <main className={styles.blog}>
       <div className={`h-[12vh]`} />
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      ></div>
       <Image src={post.coverPhoto.url} alt={post.title} height={1000}
              width={1000}
              className="h-[320px] w-[233px] rounded-sm object-cover md:h-[280px] md:w-[280px]"/>

      </main>
    
    </>
  );
}
