// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <script>{`try{var t=localStorage.getItem('theme');var m=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;var d=t?t==='dark':m;document.documentElement.classList[d?'add':'remove']('dark');}catch(e){}`}</script>
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));