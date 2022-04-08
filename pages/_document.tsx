import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="dark:bg-[#0D2436] dark:text-white bg-gray-300 app">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}