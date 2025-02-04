import { createClient } from "@sanity/client";

export function createSanityClient(draftMode = false) {
    return createClient({
        apiVersion: "2025-01-28",
        projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
        dataset: import.meta.env.PUBLIC_SANITY_DATASET,
        useCdn: !draftMode,
        perspective: draftMode ? 'previewDrafts' : 'published',
        stega: {
            studioUrl: "/studio"
        }
    });
}