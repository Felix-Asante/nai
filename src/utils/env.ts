export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-12-12";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

export const token = assertValue(
  process.env.NEXT_PUBLIC_SANITY_ACCESS_TOKEN,
  "Missing environment variable: NEXT_PUBLIC_SANITY_ACCESS_TOKEN"
);
// export const newsletterFormId = assertValue(
//   process.env.NEWSLETTER_FORM_ID,
//   "Missing environment variable: NEWSLETTER_FORM_ID"
// );

export const hookSecret = process.env.NEXT_PUBLIC_SANITY_HOOK_SECRET;
export const mode = process.env.NODE_ENV;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
