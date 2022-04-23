import Document, { Html, Head, Main, NextScript } from 'next/document';
import { tokens } from '~@styles/theme.css';
import { GTM_ID } from '~@utils/gtm';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta
            httpEquiv="Content-Security-Policy"
            content="default-src 'self' ; script-src 'self' 'unsafe-inline' *.eduardosilveira.com *.googletagmanager.com; style-src 'self' 'unsafe-inline' googletagmanager.com *.googleapis.com *.eduardosilveira.com; img-src 'self' data: https: http: ; media-src 'self' ; frame-src eduardosilveira.com googletagmanager.com;"
          />

          <meta name="msapplication-TileColor" content={tokens.colors.primary} />
          <meta name="theme-color" content={tokens.colors.primary} />
          <link rel="apple-touch-icon" sizes="76x76" href={`${process.env.NEXT_PUBLIC_URL}/apple-touch-icon.png`} />
          <link rel="icon" type="image/png" sizes="32x32" href={`${process.env.NEXT_PUBLIC_URL}/favicon-32x32.png`} />
          <link rel="icon" type="image/png" sizes="16x16" href={`${process.env.NEXT_PUBLIC_URL}/favicon-16x16.png`} />
          <link rel="manifest" href={`${process.env.NEXT_PUBLIC_URL}/site.webmanifest`} />
          <link
            rel="mask-icon"
            href={`${process.env.NEXT_PUBLIC_URL}/safari-pinned-tab.svg`}
            color={tokens.colors.primary}
          />

          <meta name="application-name" content="eduardo silveira" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="eduardo silveira" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-config" content={`${process.env.NEXT_PUBLIC_URL}/browserconfig.xml`} />
          <meta name="msapplication-tap-highlight" content="no" />

          <link rel="preload" href={`${process.env.NEXT_PUBLIC_URL}/fonts.css`} as="style" />
          <link href={`${process.env.NEXT_PUBLIC_URL}/fonts.css`} rel="stylesheet" />
        </Head>
        <body>
          {GTM_ID && (
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
          )}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
