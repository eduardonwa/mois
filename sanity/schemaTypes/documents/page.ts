import {defineField, defineType} from "sanity";
import {DocumentIcon} from "@sanity/icons";

export const pageType = defineType({
    name: 'page',
    type: 'document',
    title: 'Páginas',
    groups: [
        {
            name: 'metaSeo',
            title: 'Metadata (SEO)'
        },
    ],
    icon: DocumentIcon,
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Nombre',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Enlace',
            validation: (rule) => rule.required(),
            options: {
                source: 'name',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'pageBuilder',
            type: 'array',
            title: 'Constructor de página',
            of: [
                {type: 'callToAction'},
                {type: 'infoSection'},
                {type: 'splitImage'},
            ],
            options: {
                insertMenu: {
                    views: [
                        {name: 'list'},
                        {
                            name: 'grid',
                            previewImageUrl: (schemaTypeName) =>
                                `/public/block-content-previews/preview-${schemaTypeName}.webp`
                        },
                      ],
                },
            },
        }),
        defineField({
            name: 'pageMetadata',
            type: 'pageMetadata',
            title: 'Metadata para la página',
            group: 'metaSeo',
        })
    ],
});