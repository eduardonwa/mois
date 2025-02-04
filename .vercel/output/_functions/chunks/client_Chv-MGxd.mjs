import { createClient } from '@sanity/client';

function createSanityClient(draftMode = false) {
  return createClient({
    apiVersion: "2025-01-28",
    projectId: "97xwwt5q",
    dataset: "production",
    useCdn: !draftMode,
    perspective: draftMode ? "previewDrafts" : "published",
    stega: {
      studioUrl: "/studio"
    }
  });
}

export { createSanityClient as c };
