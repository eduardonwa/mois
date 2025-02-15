import { defineField, defineType } from "sanity";

export const buttonType = defineType({
    name: 'button',
    type: 'object',
    title: 'Botón',
    fields: [
        defineField({
            name: 'buttonText',
            type: 'string',
            title: 'Texto del botón',
        }),
        defineField({
            name: 'link',
            type: 'link',
            title: 'Enlace',
        }),
        defineField({
            name: 'buttonStyles',
            type: 'array',
            title: 'Ajuste de estilos',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'textColor',
                            type: 'colorPalette',
                            title: 'Color de texto',
                        },
                        {
                            name: 'bgColor',
                            type: 'colorPalette',
                            title: 'Color de fondo',
                        },
                        {
                            name: 'hoverColor',
                            type: 'colorPalette',
                            title: 'Color flotante',
                        },
                        {
                            name: 'borderWidth',
                            type: 'string',
                            title: 'Tamaño de borde',
                            options: {
                                list: [
                                    {title: 'Sutil', value: 'border-1'},
                                    {title: 'Marcado', value: 'border-2'},
                                    {title: 'Sin borde', value: null},
                                ],
                                layout: 'radio',
                            },
                            initialValue: null,
                        },
                        {
                            name: 'borderRadius',
                            type: 'string',
                            title: 'Redondeado',
                            options: {
                                list: [
                                    {title: 'Sutil', value: 'border-radius-1'},
                                    {title: 'Marcado', value: 'border-radius-2'},
                                    {title: 'Sin redondeado', value: null},
                                ],
                                layout: 'radio',
                            },
                            initialValue: 'border-radius-1'
                        },
                        {
                            name: 'borderColor',
                            type: 'colorPalette',
                            title: 'Color del borde',
                        },
                        {
                            name: 'buttonShadowStyle',
                            type: 'string',
                            title: 'Estilo de sombra',
                            options: {
                                list: [
                                    {title: 'Sutil', value: 'filter-shadow-1'},
                                    {title: 'Marcado', value: 'filter-shadow-2'},
                                    {title: 'Sin sombra', value: null},
                                ],
                                layout: 'radio',
                            },
                            initialValue: null,
                        },
                    ],
                },
            ],
        })
    ]
});