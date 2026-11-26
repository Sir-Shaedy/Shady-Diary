import Head from 'next/head';
import '../styles/globals.css';
import 'katex/dist/katex.min.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#111318" />
        
        {/* Default Meta Tags - Can be overridden by individual pages */}
        <title>AIM's Spot</title>
        <meta 
          name="description" 
          content="My journal on things I've tried, studied and failed. I'm self-reflecting here." 
        />
        <meta name="keywords" content="blockchain security, smart contracts, solidity, security research, DeFi, Ethereum, audit, vulnerability analysis" />
        <meta name="author" content="Musa Ayomide Idris" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shady-ways.netlify.app/" />
        <meta property="og:title" content="AIM's Spot" />
        <meta 
          property="og:description" 
          content="My journal on things I've tried, studied and failed. I'm self-reflecting here." 
        />
        <meta property="og:site_name" content="AIM's Spot" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://shady-ways.netlify.app/" />
        <meta property="twitter:title" content="AIM's Spot" />
        <meta 
          property="twitter:description" 
          content="My journal on things I've tried, studied and failed. I'm self-reflecting here." 
        />
        <meta property="twitter:creator" content="@0xShaedyW" />
        
        {/* Canonical URL */}
        <link rel="canonical" content="https://shady-ways.netlify.app/" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* RSS Feed */}
        <link rel="alternate" type="application/rss+xml" title="AIM's Spot RSS Feed" href="/rss.xml" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
