import "server-only";

import { createClient, type SanityClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/utils/env";

let cached: SanityClient | null = null;

export function getSanityWriteClient(): SanityClient | null {
  const token = process.env.SANITY_WRITE_TOKEN?.trim();
  if (!token) {
    return null;
  }
  if (!cached) {
    cached = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token,
      ignoreBrowserTokenWarning: true,
    });
  }
  return cached;
}
