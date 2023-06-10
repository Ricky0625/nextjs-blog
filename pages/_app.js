// `pages/_app.js`
import '../styles/global.css';

// this is a top-level React component that wraps all the pages in your application
// You can use this top-level component to keep state when navigating between pages, or to add global styles.
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}