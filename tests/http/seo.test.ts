import test from "node:test";
import assert from "node:assert/strict";
const base = process.env.TEST_BASE_URL ?? "http://localhost:3000";
const origin = process.env.TEST_SITE_ORIGIN ?? "https://ishivox.k8pai.com";
const indexable = process.env.TEST_INDEXABLE !== "false";
for (const [path, title, content] of [
  ["/", "Ishivox", "PDF Studio"],
  ["/projects", "Our projects", "PDF Studio"],
  ["/projects/pdf-studio", "PDF Studio", "Documents, designed."],
]) {
  test(`${path} serves crawlable content and route-specific metadata`, async () => {
    const response = await fetch(new URL(path, base));
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, new RegExp(`<title>[^<]*${title}`));
    assert.match(html, /<meta name="description" content="[^"]+"/);
    assert.match(html, /<meta property="og:image" content="[^"]+"/);
    assert.match(
      html,
      /<meta name="twitter:card" content="summary_large_image"/,
    );
    assert.match(
      html,
      new RegExp(
        `<meta name="robots" content="${indexable ? "index, follow" : "noindex, nofollow"}"`,
      ),
    );
    assert.match(html, new RegExp(content));
    assert.equal((html.match(/<h1[ >]/g) ?? []).length, 1);
    if (origin) {
      const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
      assert.ok(canonical, "The page must expose a canonical URL");
      assert.equal(new URL(canonical).href, new URL(path, origin).href);
      const blocks = [
        ...html.matchAll(
          /<script type="application\/ld\+json">(.*?)<\/script>/g,
        ),
      ].map((match) => JSON.parse(match[1]));
      assert.ok(blocks.some((block) => block["@type"] === "Organization"));
      if (path.endsWith("pdf-studio"))
        assert.ok(blocks.some((block) => block["@type"] === "BreadcrumbList"));
    } else assert.doesNotMatch(html, /rel="canonical"/);
  });
}
test("robots and sitemap agree with the index policy", async () => {
  const robots = await fetch(`${base}/robots.txt`);
  assert.equal(robots.status, 200);
  const text = await robots.text();
  assert.ok(text.includes(indexable ? "Allow: /" : "Disallow: /"));
  const sitemap = await fetch(`${base}/sitemap.xml`);
  assert.equal(sitemap.status, 200);
  const xml = await sitemap.text();
  assert.equal((xml.match(/<loc>/g) ?? []).length, indexable ? 3 : 0);
  if (indexable && origin)
    assert.ok(xml.includes(`${origin}/projects/pdf-studio`));
});
test("social card is a real PNG and unknown routes return 404", async () => {
  const image = await fetch(`${base}/opengraph-image`);
  assert.equal(image.status, 200);
  assert.match(image.headers.get("content-type") ?? "", /image\/png/);
  assert.ok((await image.arrayBuffer()).byteLength > 1000);
  const missing = await fetch(`${base}/this-page-does-not-exist`);
  assert.equal(missing.status, 404);
});
