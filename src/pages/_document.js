// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const isProduction = process.env.NODE_ENV === 'production';

    return (
      <Html lang="en">
        <Head>
          {/* Google Analytics - Only in production */}
          {isProduction && (
            <>
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-GQ9PN4RXQG"></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-GQ9PN4RXQG', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;