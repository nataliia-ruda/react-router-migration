import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

import rescuiFont from "@rescui/typography/lib/font-jb-sans-auto.css?url";
import highlightStyles from "highlight.js/styles/github.css?url";
import globalStyles from "./styles/global.scss?url";
import { Header } from "./components/ktl-components/header/header/Header";
import { Footer } from "./components/ktl-components/footer/Footer";

export function links() {
  return [
    { rel: "stylesheet", href: rescuiFont },
    { rel: "stylesheet", href: highlightStyles },
    { rel: "stylesheet", href: globalStyles },
  ];
}

export default function Root() {
  return (
    <html lang="en" className="page_restyled_v2">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Kotlin Programming Language</title>
        <Meta />
        <Links />
      </head>
      <body className="page__index-new" suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.body.className += ' page_js_yes'`,
          }}
        />
        <Header />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
