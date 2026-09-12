import '../styles/globals.css'
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Oreoluwa Ajayi — Portfolio</title>
        <meta name="description" content="Mechanical engineer and software developer building IoT, embedded systems, and full-stack projects." />
        <meta property="og:title" content="Oreoluwa Ajayi — Portfolio" />
        <meta property="og:description" content="Mechanical engineer and software developer building IoT, embedded systems, and full-stack projects." />
        <meta property="og:image" content="https://portfolio-oreoluwa212.vercel.app/og-image.png" />
        <meta property="og:url" content="https://portfolio-oreoluwa212.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}