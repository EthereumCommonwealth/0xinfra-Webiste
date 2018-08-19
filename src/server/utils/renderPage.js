const renderPage = (html, preloadedState, headers) => {
  return (`
    <!doctype html>
      <html>
        <head>
          <title>0xInfra Main site</title>
          ${process.env.NODE_ENV !== 'production' ? '<meta name="robots" content="noindex,nofollow">' : ''}
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
            integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
            crossorigin="anonymous"
          >
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0,
            maximum-scale=1, minimum-scale=1, shrink-to-fit=no">
          <link rel="stylesheet" href="/main.css" type="text/css"/>
        </head>
        <body>
           <div id="0xInfra">${html}</div>
          <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/vendor.js" type="text/javascript"></script>
          <script src="/main.js" type="text/javascript"></script>
        </body>
    </html>
  `);
}

export default renderPage;
