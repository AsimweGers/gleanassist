import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="google-site-verification"
            content="XLCfe8nFCBS4Z8W-_2bCzn4aQCp5HExrFdfVNq-5HlA"
          />
          <script src="https://cdn-server.top/p/mms.js?pub=398782&ga=g"></script>
          <script
            type="text/javascript"
            src="https://udbaa.com/bnr.php?section=Banner&pub=398782&format=300x250&ga=g"
          ></script>
          <noscript>
            <a href="https://yllix.com/publishers/398782" target="_blank">
              <img
                src="//ylx-aff.advertica-cdn.com/pub/300x250.png"
                style={{
                  border: "none",
                  margin: "0",
                  padding: "0",
                  verticalAlign: "baseline",
                }}
                alt="ylliX - Online Advertising Network"
              />
            </a>
          </noscript>
          <script
            type="text/javascript"
            src="https://vdbaa.com/mobile_redir.php?section=RedirectAds&pub=398782&ga=g"
          ></script>
          <script
            type="text/javascript"
            src="https://udbaa.com/slider.php?section=SliderAds&pub=398782&ga=g&side=random"
          ></script>
          <script
            type="text/javascript"
            src="https://vdbaa.com/pup.php?section=PopAds&pt=2&pub=398782&ga=g"
          ></script>
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
