import { type QueryParams } from "sanity";
import { createSanityClient } from "./client";

export async function loadQuery<QueryResponse>({
  query,
  params,
  perspective = "published",
  visualEditingEnabled = false,
}: {
  query: string;
  params?: QueryParams;
  perspective?: "published" | "previewDrafts";
  visualEditingEnabled?: boolean;
}) {

  const client = createSanityClient(perspective === "previewDrafts");
  const token = import.meta.env.SANITY_API_READ_TOKEN;

  if (perspective === "previewDrafts" && !token) {
    throw new Error(
      "The `SANITY_API_READ_TOKEN` environment variable is required for preview drafts.",
    );
  }

  const { result, resultSourceMap } = await client.fetch<QueryResponse>(
    query,
    params ?? {},
    {
      filterResponse: false,
      perspective,
      resultSourceMap: visualEditingEnabled ? "withKeyArraySelector" : false,
      stega: visualEditingEnabled,
      ...(perspective === "previewDrafts" ? { token } : {}),
    },
  );

  return {
    data: result,
    sourceMap: resultSourceMap,
    perspective,
  };
}
