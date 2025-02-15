import { defineField, defineType } from "sanity";

export const colorPaletteType = defineType({
    name: 'colorPalette',
    type: 'object',
    title: 'Paleta de Colores',
    fields: [
        defineField({
            name: 'color',
            type: 'color',
            title: 'Paleta de colores',
            options: {
                colorList: [
                // neutrales
                    { h: 0, s: 0, l: 100 },
                    { h: 0, s: 0, l: 95 },
                    { h: 0, s: 0, l: 82.5 },
                    { h: 0, s: 0, l: 70 },
                    { h: 0, s: 0, l: 60 },
                    { h: 0, s: 0, l: 50 },
                    { h: 0, s: 0, l: 40 },
                    { h: 0, s: 0, l: 30 },
                    { h: 0, s: 0, l: 17.5 },
                    { h: 0, s: 0, l: 7.5 },
                // primarios
                    { h: 216, s: 75, l: 95 },
                    { h: 216, s: 75, l: 82.5 },
                    { h: 216, s: 75, l: 70 },
                    { h: 216, s: 75, l: 60 },
                    { h: 216, s: 75, l: 50 },
                    { h: 216, s: 75, l: 40 },
                    { h: 216, s: 75, l: 30 },
                    { h: 216, s: 75, l: 17.5 },
                    { h: 216, s: 75, l: 7.5 },
                // acento
                    { h: 336, s: 75, l: 95 },  
                    { h: 336, s: 75, l: 82.5 },
                    { h: 336, s: 75, l: 70 },   
                    { h: 336, s: 75, l: 60 },   
                    { h: 336, s: 75, l: 50 },   
                    { h: 336, s: 75, l: 40 },   
                    { h: 336, s: 75, l: 30 },   
                    { h: 336, s: 75, l: 17.5 },
                    { h: 336, s: 75, l: 7.5 },
                ],
            },
        }),
    ]
});