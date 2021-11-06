import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';

class TopListDocument extends Document {
  static async getInitialProps(context: DocumentContext): Promise<DocumentInitialProps> {
    const initProps = await Document.getInitialProps(context);
    return {...initProps};
  }

  render() {
    return (
      <Html lang="en">
        <Head/>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  }
}

export default TopListDocument;
