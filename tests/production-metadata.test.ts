import test from "node:test";
import assert from "node:assert/strict";

test("a configured production build emits matching canonicals, robots, and sitemap routes", async () => {
  Object.assign(process.env, {
    NEXT_PUBLIC_SITE_URL: "https://ishivox.example",
    NODE_ENV: "production",
    VERCEL_ENV: "production",
  });
  const [{ pageMetadata }, { default: sitemap }, { default: robots }] =
    await Promise.all([
      import("../src/lib/metadata"),
      import("../src/app/sitemap"),
      import("../src/app/robots"),
    ]);
  const metadata = pageMetadata(
    "PDF Studio",
    "PDF templates and document generation.",
    "/projects/pdf-studio",
  );
  assert.equal(
    metadata.alternates?.canonical,
    "https://ishivox.example/projects/pdf-studio",
  );
  assert.deepEqual(metadata.robots, { index: true, follow: true });
  assert.deepEqual(
    sitemap().map((entry) => entry.url),
    [
      "https://ishivox.example/",
      "https://ishivox.example/projects",
      "https://ishivox.example/projects/pdf-studio",
    ],
  );
  assert.deepEqual(robots(), {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://ishivox.example/sitemap.xml",
  });
});
