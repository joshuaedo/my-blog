import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "@/components/BlogCard";
import HomeMeta from "@/components/HomeMeta";

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
      <HomeMeta />
      <main className="pt-[22vh] pb-[9vh] px-[2%] grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
