# ebox86/hello 👋

Tiny Next.js “hello” container for smoke tests and IaC placeholders.

![Screenshot](/screenshot.png)

- Big `hello 👋` in the center  
- Light/dark toggle  
- Gradient background  
- Small debug panel (time + basic connection info)  
- JSON endpoint at `/api/hello`  

---

## Run locally
```
    npm install
    npm run dev
    # http://localhost:3000
```
---

## Docker

Build:
```
    docker build -t ghcr.io/ebox86/hello:latest .
```
Run:
```
    docker run --rm -p 3000:3000 ghcr.io/ebox86/hello:latest
    # http://localhost:3000
    # http://localhost:3000/api/hello
```
Image (distroless Node 22, Next.js standalone):

- ~171 MB uncompressed (see with `docker images ghcr.io/ebox86/hello`)

---

## API

`GET /api/hello` → JSON like:
```
    {
      "message": "hello 👋",
      "time": "2025-12-12T04:41:06.123Z",
      "host": "localhost:3000",
      "path": "/api/hello",
      "protocol": "http",
      "containerHostname": "hello-7c9d4bbf47-abcde",
      "version": "0.1.0"
    }
```
---

## Image reference

Use this in IaC / manifests:
```
    ghcr.io/ebox86/hello:latest
```
