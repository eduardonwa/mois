import type { SchemaTypeDefinition } from "sanity";
import { authorType } from "./documents/author";
import { blockContentType } from "./objects/blockContent";
import { categoryType } from "./documents/category";
import { postType } from "./documents/post";
import { settingsType } from "./documents/settings";
import { navigationType } from "./documents/navigation";
import { linkType } from "./objects/link";
import { callToActiontype } from "./objects/callToAction";
import { pageType } from "./documents/page";
import { infoSectionType } from "./objects/infoSection";
import { pageMetadataType } from "./objects/pageMetadata";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        // singletons
        settingsType,
        // documents
        authorType,
        categoryType,
        postType,
        navigationType,
        pageType,
        // objects
        blockContentType,
        linkType,
        callToActiontype,
        infoSectionType,
        pageMetadataType,
    ]
};