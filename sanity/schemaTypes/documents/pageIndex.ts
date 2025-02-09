import { defineField, defineType } from "sanity";

export const pageIndexType = defineType({
    name: 'pageIndex',
    type: 'document',
    title: 'Inicio',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Nombre',
            initialValue: 'Página principal'
        }),
        defineField({
            name: 'pageBuilder',
            type: 'array',
            title: 'Constructor de página',
            of: [
                {type: 'callToAction'},
                {type: 'infoSection'},
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
    ],
    description: 'Esta es tu página principal. Los datos metadata de esta página se configuran desde "Configuración" desde el menú lateral'
});