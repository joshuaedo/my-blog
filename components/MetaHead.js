import Head from "next/head";
export default function MetaHead(props) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="icon"
        href="https://joshuaedo.sirv.com/joshuaedo/public/images/original/me-modified.png"
      />
      <meta name="description" content="Joshua Edo's Blog" />
      <meta name="url" content="https://blog.joshuaedo.com" />
      <meta name="identifier-URL" content="https://blog.joshuaedo.com" />
      <meta name="pagename" content="Joshua Edo's Blog" />
      <meta property="og:description" content="Joshua Edo's Blog" />
      <meta property="og:site_name" content="joshua edo's blog" />
      <meta property="og:type" content="website" />
      <meta name="twitter:creator" content="joshua edo" />
      <meta name="twitter:description" content="Joshua Edo's Blog" />
      {props.children}
    </Head>
  );
}
