# libs folder

Place third-party libraries here that you want to serve locally.

To add the QR library locally:

```bash
mkdir -p libs
curl -L -o libs/qrcode.min.js https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js
```

After adding the file, commit and push to make the site fully self-contained (no CDN fallback needed).
