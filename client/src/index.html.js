import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import preview from './preview.png'

export default function({ htmlWebpackPlugin }) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>unbubble.space</title>
        <meta name="description" content="Searching videos outside of your bubble…" />
        <meta property="og:title" content="unbubble.space" />
        <meta property="og:description" content="Searching videos outside of your bubble…" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="unbubble.space" />
        <meta name="twitter:title" content="unbubble.space" />
        <meta name="twitter:description" content="Searching videos outside of your bubble…" />
        <meta property="og:image" content="http://unbubble.space/${preview}" />

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <style>
          body, #root {
            width: 100%;
            height: 100%;
            overflow: hidden;
            margin: 0;
            padding: 0;
            background: #E64369;
          }
        </style>
      </head>
      <body>
        <div id="root">${renderToString(<App />)}</div>
      </body>
    </html>
  `
}
