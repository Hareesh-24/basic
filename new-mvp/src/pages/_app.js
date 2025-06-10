// src/pages/_app.js
import '../styles/components.css'; // ✅ Global CSS here

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
