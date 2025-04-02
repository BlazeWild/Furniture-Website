import { getAssetFromKV } from "@cloudflare/kv-asset-handler";

addEventListener("fetch", (event) => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  try {
    // Try to get the static asset from KV
    return await getAssetFromKV(event);
  } catch (e) {
    // If there's an error, return the index.html for SPA routing
    try {
      let notFoundResponse = await getAssetFromKV(event, {
        mapRequestToAsset: (req) =>
          new Request(`${new URL(req.url).origin}/index.html`, req),
      });

      return new Response(notFoundResponse.body, {
        ...notFoundResponse,
        status: 200,
      });
    } catch (e) {
      return new Response("Not Found", { status: 404 });
    }
  }
}
