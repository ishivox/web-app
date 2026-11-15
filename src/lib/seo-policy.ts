/** Keep preview deployments and builds without a verified origin out of search. */
export function canIndex({
  origin,
  nodeEnv,
  deploymentEnv,
}: {
  origin?: string;
  nodeEnv?: string;
  deploymentEnv?: string;
}): boolean {
  return (
    Boolean(origin) && nodeEnv === "production" && deploymentEnv !== "preview"
  );
}
export function publicOrigin(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const url = new URL(value);
  if (url.protocol !== "https:" && url.protocol !== "http:")
    throw new Error("Public URLs must use HTTP or HTTPS.");
  if (
    url.username ||
    url.password ||
    url.search ||
    url.hash ||
    url.pathname !== "/"
  )
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must be an origin without credentials, path, query, or fragment.",
    );
  return url.origin;
}
export function publicHttpUrl(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const url = new URL(value);
  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.username ||
    url.password
  )
    throw new Error(
      "The application URL must be a public HTTP(S) URL without credentials.",
    );
  return url.href;
}
