import '../styles/components.css';
import dynamic from 'next/dynamic';

const Analytics = dynamic(() =>
  import('@vercel/analytics/react').then(mod => mod.Analytics),
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
