// src/pages/_app.js
import '../styles/components.css'; // Your global CSS
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics /> {/* <- Analytics enabled */}
    </>
  );
}

export default MyApp;
