import test from "node:test";
import assert from "node:assert/strict";

test("temporary domains work without deployment environment variables", async () => {
  delete process.env.NEXT_PUBLIC_SITE_URL;
  delete process.env.NEXT_PUBLIC_PDF_STUDIO_URL;
  Object.assign(process.env, {
    NODE_ENV: "production",
    VERCEL_ENV: "production",
  });
  const { site, pdfStudioUrl, absoluteUrl, isIndexable } =
    await import("../src/config/site");
  assert.equal(site.url, "https://ishivox.k8pai.com");
  assert.equal(pdfStudioUrl, "https://pdf-studio.k8pai.com/");
  assert.equal(
    absoluteUrl("/projects/pdf-studio"),
    "https://ishivox.k8pai.com/projects/pdf-studio",
  );
  assert.equal(isIndexable, true);
});
