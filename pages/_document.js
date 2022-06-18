import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='vi'>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,800&display=swap'
            rel='stylesheet'
          ></link>
          <meta
            name='description'
            content='Chào các bạn trẻ mình là thanh đẹp trai'
          />
          <meta property='og:title' content='Tu todo app'></meta>
          <meta content='INDEX,FOLLOW' name='robots'></meta>
          <meta name='author' content='Thanh đẹp trai'></meta>
          <meta name='copyright' content='Thanh đẹp trai'></meta>
          <meta property='og:type' content='website'></meta>
          <meta property='og:locale' content='vi_VN'></meta>
          <meta
            property='og:description'
            content='Chào các bạn trẻ mình là thanh đẹp trai'
          ></meta>
          <meta
            name='keywords'
            content='Thanh đẹp trai, đẹp trai vcl, thanh pro'
          ></meta>
          <meta
            property='og:image'
            content='https://res.cloudinary.com/sonobe/image/upload/v1655565508/ipx766_p4ybm9.jpg'
          ></meta>
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
