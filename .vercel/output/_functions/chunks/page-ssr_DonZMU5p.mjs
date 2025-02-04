import { createClient } from '@sanity/client';

const sanityClient = createClient(
            {"apiVersion":"2025-01-28","projectId":"97xwwt5q","dataset":"production","useCdn":false,"stega":{"studioUrl":"\u002Fstudio"}}
          );

globalThis.sanityClient = sanityClient;

export { sanityClient as s };
