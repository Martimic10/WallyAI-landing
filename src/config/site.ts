/**
 * Set in `.env.local`: `NEXT_PUBLIC_MAC_DOWNLOAD_HREF=https://…`
 * (.dmg, Mac App Store, or your release host)
 */
export const macDownloadHref =
  process.env.NEXT_PUBLIC_MAC_DOWNLOAD_HREF ?? "#";
