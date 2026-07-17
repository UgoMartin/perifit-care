const path = require("path");

const ASSETS_PREFIX = "/assets";

const sanitizeHttpServerLocation = (httpServerLocation) => {
  const raw = (httpServerLocation || "").replace(/\\/g, "/");
  const normalized = path.posix.normalize(raw.startsWith("/") ? raw : `/${raw}`);
  const withoutTraversal = normalized.replace(/(?:^|\/)\.\.(?=\/|$)/g, "");
  const trimmed = withoutTraversal.replace(/^\/+/, "");

  if (!trimmed) {
    return ASSETS_PREFIX;
  }

  if (trimmed === ASSETS_PREFIX.slice(1) || trimmed.startsWith(`${ASSETS_PREFIX.slice(1)}/`)) {
    return `/${trimmed}`;
  }

  return `${ASSETS_PREFIX}/${trimmed}`;
};

module.exports = (assetData) => {
  return {
    ...assetData,
    httpServerLocation: sanitizeHttpServerLocation(assetData.httpServerLocation),
  };
};
