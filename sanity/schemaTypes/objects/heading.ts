import { defineField, defineType } from "sanity";

export const headingType = defineType({
    name: 'heading',
    type: 'object',
    title: 'Encabezado',
    fields: [
        defineField({
            name: 'heading',
            type: 'string',
            title: 'Texto'
        }),
        defineField({
            name: 'headingSize',
            type: 'string',
            title: 'Tamaño',
            options: {
                list: [
                    {title: 'Estándar', value: 'heading-3'},
                    {title: 'Mediano', value: 'heading-2'},
                    {title: 'Grande', value: 'heading-1'},
                ],
                layout: 'radio',
            },
            initialValue: 'heading-3',
        }),
        defineField({
            name: 'color',
            type: 'colorPalette',
            title: 'Color',
        }),
    ]
})