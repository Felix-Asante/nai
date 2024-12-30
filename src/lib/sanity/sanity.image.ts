import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from "@/utils/env";

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/;

export function decodeAssetId(id: string) {
  // @ts-ignore
  const [, assetId, dimensions, format] = pattern.exec(id);
  const [width, height] = dimensions
    .split("x")
    .map((v: string) => parseInt(v, 10));

  return {
    assetId,
    dimensions: { width, height },
    format,
  };
}
