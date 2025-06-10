import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
// src/pages/_app.js
import '../styles/components.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
