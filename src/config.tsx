import Head from 'next/head'

const titleDefault = 'トップ|CDC新卒採用サイト'
const url = ''
const description = 'CDC新卒採用サイトです。'
const author = '株式会社キャリアデザインセンター'

export default function Header({ title = titleDefault }) {
  return (
    <Head>
      {/* Recommended Meta Tags */}
      <meta charSet='utf-8' />
      <meta name='language' content='ja' />
      <meta httpEquiv='content-type' content='text/html' />
      <meta name='author' content={author} />
      <meta name='designer' content={author} />
      <meta name='publisher' content={author} />

      {/* Search Engine Optimization Meta Tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content='新卒採用,キャリアデザインセンター,cdc,株式会社キャリアデザインセンター' />
      <meta name='robots' content='index,follow' />
      <meta name='distribution' content='web' />
      {/* 
      Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
      <meta name='og:title' content={title} />
      <meta name='og:type' content='site' />
      <meta name='og:url' content={url} />
      <meta name='og:site_name' content={title} />
      <meta name='og:description' content={description} />

      <link rel='manifest' href='/manifest.json' />

      {/* Meta Tags for HTML pages on Mobile */}
      {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
      <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0' />
      <meta name='theme-color' content='#000' />
      <link rel='shortcut icon' href='/favicon.ico' />
    </Head>
  )
}
