import MetaHead from "./MetaHead";

export default function HomeMeta() {
  return (
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
  );
}