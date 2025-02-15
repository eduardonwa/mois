import type { SchemaTypeDefinition } from "sanity";
import { authorType } from "./documents/author";
import { blockContentType } from "./objects/blockContent";
import { categoryType } from "./documents/category";
import { postType } from "./documents/post";
import { settingsType } from "./documents/settings";
import { navigationType } from "./documents/navigation";
import { linkType } from "./objects/link";
import { callToActionType } from "./objects/callToAction";
import { pageType } from "./documents/page";
import { infoSectionType } from "./objects/infoSection";
import { pageMetadataType } from "./objects/pageMetadata";
import { pageIndexType } from "./documents/pageIndex";
import { splitImageType } from "./objects/splitImage";
import { colorPaletteType } from "./objects/colorPalette";
import { headingType } from "./objects/heading";
import { subheadingType } from "./objects/subheading";
import { buttonType } from "./objects/button";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        // singletons
        settingsType,
        pageIndexType,
        // documents
        authorType,
        categoryType,
        postType,
        navigationType,
        pageType,
        // objects
        blockContentType,
        linkType,
        callToActionType,
        infoSectionType,
        pageMetadataType,
        splitImageType,
        colorPaletteType,
        headingType,
        subheadingType,
        buttonType,
    ]
};