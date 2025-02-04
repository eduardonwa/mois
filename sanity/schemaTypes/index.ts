import type { SchemaTypeDefinition } from "sanity";
import { authorType } from "./documents/author";
import { blockContentType } from "./objects/blockContent";
import { categoryType } from "./documents/category";
import { postType } from "./documents/post";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        authorType,
        blockContentType,
        categoryType,
        postType,
    ]
};