import { defineField, defineType } from "sanity";

export const subheadingType = defineType({
    name: 'subheading',
    type: 'object',
    title: 'Encabezado',
    fields: [
        defineField({
            name: 'subheading',
            type: 'text',
            title: 'Texto'
        }),
        defineField({
            name: 'subheadingSize',
            type: 'string',
            title: 'Tamaño',
            options: {
                list: [
                    {title: 'Estándar (18px)', value: 'fs-500'},
                    {title: 'Mediano (21px)', value: 'fs-600'},
                    {title: 'Grande (28px)', value: 'fs-700'},
                ],
                layout: 'radio',
            },
            initialValue: 'fs-600',
        }),
        defineField({
            name: 'color',
            type: 'colorPalette',
            title: 'Color',
        }),
    ]
})