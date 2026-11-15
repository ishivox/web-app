import test from "node:test";
import assert from "node:assert/strict";
import { canIndex, publicOrigin, publicHttpUrl } from "../src/lib/seo-policy";
test("only production builds with a verified origin are indexable", () => {
  assert.equal(
    canIndex({ origin: "https://ishivox.example", nodeEnv: "production" }),
    true,
  );
  assert.equal(
    canIndex({
      origin: "https://ishivox.example",
      nodeEnv: "production",
      deploymentEnv: "preview",
    }),
    false,
  );
  assert.equal(
    canIndex({ origin: "https://ishivox.example", nodeEnv: "development" }),
    false,
  );
  assert.equal(canIndex({ nodeEnv: "production" }), false);
});
test("the canonical origin is normalized, and missing origin stays unset", () => {
  assert.equal(
    publicOrigin("https://ishivox.example/"),
    "https://ishivox.example",
  );
  assert.equal(publicOrigin(undefined), undefined);
  for (const value of [
    "javascript:alert(1)",
    "https://user:secret@example.com",
    "https://example.com/projects",
    "https://example.com?tracking=1",
    "https://example.com/#hash",
  ])
    assert.throws(() => publicOrigin(value));
});
test("project application links cannot use unsafe schemes or credentials", () => {
  assert.equal(publicHttpUrl(undefined), undefined);
  assert.equal(
    publicHttpUrl("https://pdf.example/app"),
    "https://pdf.example/app",
  );
  assert.throws(() => publicHttpUrl("javascript:alert(1)"));
  assert.throws(() => publicHttpUrl("https://user:secret@example.com"));
});
