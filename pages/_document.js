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
