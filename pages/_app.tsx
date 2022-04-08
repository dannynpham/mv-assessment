import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="dark:bg-gray-700 dark:text-gray-200 bg-gray-300">
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp
