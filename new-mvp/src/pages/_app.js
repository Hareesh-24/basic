// src/pages/_app.js

import '../styles/components.css';

function AnalyticsPlaceholder() {
  return null;
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <AnalyticsPlaceholder />
    </>
  );
}

export default MyApp;
