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

          <script
            type="text/javascript"
            src="https://kvaaa.com/bnr.php?section=YllixBanner&pub=398782&format=300x250&ga=a"
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
            src="https://kvaaa.com/slider.php?section=YllixSlider&pub=398782&ga=a&side=random"
          ></script>

          <script
            type="text/javascript"
            src="https://xvaaa.com/pup.php?section=YllixPopup&pt=2&pub=398782&ga=a"
          ></script>

          <script src="https://cdn-server.top/p/wl.js?pub=398782&ga=a"></script>
          <script
            type="text/javascript"
            src="//jazzspeechlessarena.com/4a/b6/5f/4ab65f980e1534312892aaebc259bb06.js"
          ></script>

          <script
            type="text/javascript"
            src="//jazzspeechlessarena.com/dc/bd/b1/dcbdb1d44958add56232615bb536fece.js"
          ></script>

          <script
            async="async"
            data-cfasync="false"
            src="//jazzspeechlessarena.com/beb8605f8b477baafb672713df7bef45/invoke.js"
          ></script>
          <div id="container-beb8605f8b477baafb672713df7bef45"></div>
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
