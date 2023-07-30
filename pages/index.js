import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "@/components/BlogCard";
import MetaHead from "@/components/MetaHead";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/clf2r6wkc3she01ug8x5v90uv/master"
);

const QUERY = gql`
  {
    posts(orderBy: datePublished_DESC) {
      datePublished
      id
      slug
      title
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        url
        id
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default function Home({ posts }) {
  return (
    <>
      <MetaHead>
        <title>Joshua Edo • Blog</title>
        {/* OpenGraph */}
        <meta property="og:title" content="Joshua Edo • Blog" />
        <meta property="og:url" content="https://blog.joshuaedo.com" />
        <meta
          property="og:image:url"
          content="https://res.cloudinary.com/dnw9fplsw/image/upload/v1687950201/%3D%29.png"
        />

        {/* Twitter  */}
        <meta name="twitter:title" content="Joshua Edo • Blog" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dnw9fplsw/image/upload/v1687950201/%3D%29.png"
        />
      </MetaHead>
      <main>
        <div className={`h-[12vh]`} />
        {posts.map((post) => (
          <BlogCard
            title={post.title}
            author={post.author}
            coverPhoto={post.coverPhoto}
            key={post.id}
            datePublished={post.datePublished}
            slug={post.slug}
          />
        ))}
      </main>
    </>
  );
}
