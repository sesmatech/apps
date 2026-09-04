# QR Code Pro

This repository contains the QR Code Pro web app — a modern Arabic UI for generating and scanning QR codes with an improved, robust loader for the QR library.

Important: to make the app fully offline and avoid CDN failures, place a local copy of the QR library into `./libs/qrcode.min.js`.

Quick steps to add the QR library locally (recommended):

1. Download the minified `qrcode` library and place it under `./libs/qrcode.min.js` at the repo root.

   Example (run locally):

   ```bash
   mkdir -p libs
   curl -L -o libs/qrcode.min.js https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js
   git add libs/qrcode.min.js
   git commit -m "Add qrcode.min.js local copy"
   git push
   ```

2. Open `index.html` in your browser or serve the repo using GitHub Pages (recommended) or any static server.

Notes:
- The app will attempt to load `./libs/qrcode.min.js` first, then fallback to several CDNs (jsDelivr, unpkg, cdnjs), and finally try ESM dynamic import if available.
- If all sources fail, the app shows a persistent banner with Retry and a link to download the library.

If you want, I can also add the `qrcode.min.js` file to the repo for you in a follow-up commit — confirm and I will fetch the official file and push it.
