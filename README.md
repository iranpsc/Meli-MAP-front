# Meli MAP Frontend

Standalone MapLibre and Three.js frontend for Meli MAP. The map style, vector TileJSON, and FBX models are kept in this repository; map tiles and fonts are requested from the separately deployed backend API.

## Run locally

Requirements: Node.js 22+ and npm.

```powershell
npm ci
Copy-Item .env.example .env
npm run dev
```

Set `VITE_API_BASE_URL` in `.env` to the reachable backend URL. The default is `http://localhost:3001`. Open the URL printed by Vite (usually `http://localhost:5173`).

## Build and run with Docker

Start the frontend with Docker Compose:

```powershell
docker compose up --build
```

Open [http://localhost:8080](http://localhost:8080). Compose uses `http://localhost:3001` as the default backend URL and publishes the frontend on port `8080`. Override either value in a `.env` file next to `docker-compose.yml`:

```dotenv
VITE_API_BASE_URL=http://localhost:3001
FRONTEND_PORT=8080
```

The API URL is embedded in the frontend at build time, so rebuild after changing it. Stop the frontend with `docker compose down`.

The frontend is a static Nginx image. Supply the backend URL when building because Vite embeds it in the frontend bundle:

```powershell
docker build --build-arg VITE_API_BASE_URL=http://localhost:3001 -t meli-map-frontend .
docker run --rm -p 8080:80 meli-map-frontend
```

Open [http://localhost:8080](http://localhost:8080). For deployment, replace the build argument with the public backend API URL and configure the backend's `CORS_ORIGIN` to include the frontend origin.

## Map files

- `src/main.js`: MapLibre configuration, API URL, and FBX placement.
- `src/style.css`: Map container styling.
- `public/styleMap.json`: Map layers, labels, and visual styling.
- `public/tile.json`: Vector tile URL template and metadata.
- `public/*.fbx`: Models placed at map coordinates; click a map marker to zoom to a model.

Models load when the map is zoomed in to level 16 or higher.

## Production build

```powershell
npm run build
```

The generated `dist/` directory is ignored by Git and is created automatically in the Docker build.
