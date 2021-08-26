import Document,{Head, Html, NextScript,Main} from 'next/document';

export default class MtDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>BrBlog</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}



