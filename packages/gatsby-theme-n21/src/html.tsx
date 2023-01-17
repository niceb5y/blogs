interface HTMLProps {
    htmlAttributes: React.HTMLAttributes<HTMLHtmlElement>
    headComponents: Array<JSX.Element>
    bodyAttributes: React.HTMLAttributes<HTMLBodyElement>
    preBodyComponents: Array<JSX.Element>
    body: string
    postBodyComponents: Array<JSX.Element>
}

const HTML = (props: HTMLProps) => (
    <html lang="ko" {...props.htmlAttributes}>
    <head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta name="referrer" content="origin-when-cross-origin"/>
        {props.headComponents}
        <meta
            name="theme-color"
            content="#ffffff"
            media="(prefers-color-scheme: light)"
        />
        <meta
            name="theme-color"
            content="#171717"
            media="(prefers-color-scheme: dark)"
        />
        <link rel="alternate" type="application/rss+xml" href="/index.xml"/>
        <link rel="preconnect" href="https://cdnx.shk.im"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
    </head>
    <body {...props.bodyAttributes}>
    {props.preBodyComponents}
    <div
        key={`body`}
        id="___gatsby"
        dangerouslySetInnerHTML={{__html: props.body}}
    />
    {props.postBodyComponents}
    </body>
    </html>
)

export default HTML
