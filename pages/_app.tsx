import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="dark:bg-[#0D2436] dark:text-white bg-gray-300 app">
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp
