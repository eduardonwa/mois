import {defineField, defineType} from "sanity";
import {BulbOutlineIcon} from "@sanity/icons";
import { unsplashAssetSource } from "sanity-plugin-asset-source-unsplash";

export const callToActiontype = defineType({
    name: 'callToAction',
    type: 'object',
    title: 'Llamado a la acción',
    icon: BulbOutlineIcon,
    preview: {
        select: {
            title: 'heading'
        },
        prepare(selection) {
            const {title} = selection

            return {
                title: title,
                subtitle: 'Llamado a la acción',
            }
        },
    },
    validation: (rule) =>
        rule.custom((fields) => {
          const {buttonText, link} = fields || {}
          if ((buttonText && link) || (!buttonText && !link)) {
            return true
          }
          return 'Tanto el texto del botón como el enlace del botón deben estar configurados, o ambos deben estar vacíos.'
        }),
    fields: [
        defineField({
            name: 'heading',
            type: 'string',
            title: 'Encabezado',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'subheading',
            type: 'text',
            title: 'Subtítulo',
            validation: (rule) => rule.max(70).error('El subtítulo no puede superar los 70 caracteres.'),
        }),
        defineField({
            name: 'image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Texto alternativo'
                }
            ]
        }),
        defineField({
            name: 'buttonText',
            type: 'string',
            title: 'Texto del botón',
        }),
        defineField({
            name: 'link',
            type: 'link',
            title: 'Enlace del botón',
        }),
        defineField({
            name: 'order',
            type: 'array',
            title: 'Orden de los elementos',
            of: [
                {
                    type: 'string',
                    options: {
                        list: [
                            {title: 'Encabezado', value: 'heading'},
                            {title: 'Subtitulo', value: 'subheading'},
                            {title: 'Botón', value: 'button'},
                            {title: 'Imagen', value: 'image'},
                        ],
                    },
                },
            ],
            initialValue: ['heading', 'subheading', 'button', 'image'],
        })
    ]
});