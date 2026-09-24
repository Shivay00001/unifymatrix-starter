/**
 * Matrix client factory. matrix-js-sdk is an OPTIONAL dependency —
 * it is lazy-loaded so `npm run build` works without it. Returns null
 * (and logs honestly) when the SDK isn't installed.
 */
export async function createMatrixClient(token, userId) {
  let sdk;
  try {
    // Built at runtime so the bundler leaves it alone (optional dep).
    const specifier = ["matrix", "js-sdk"].join("-");
    sdk = await import(/* @vite-ignore */ specifier);
  } catch {
    console.warn("matrix-js-sdk not installed — chat disabled. Run: npm i matrix-js-sdk");
    return null;
  }
  return sdk.createClient({
    baseUrl: "https://matrix.org",
    accessToken: token,
    userId,
  });
}
