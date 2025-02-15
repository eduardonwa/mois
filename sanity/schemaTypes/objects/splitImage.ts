import { defineField, defineType } from "sanity";
import { BlockContentIcon } from "@sanity/icons";

export const splitImageType = defineType({
  name: 'splitImage',
  type: 'object',
  title: 'Imagen + Texto',
  icon: BlockContentIcon,
  preview: {
    select: {
      title: 'heading.heading',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Sin título',
        subtitle: 'Texto + imagen',
        media: media ?? BlockContentIcon,
      };
    },
  },
  fields: [
    defineField({
      name: 'heading',
      type: 'heading',
      title: 'Encabezado',
    }),
    defineField({
      name: 'subheading',
      type: 'subheading',
      title: 'Subtítulo',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Imagen',
      fields: [
        {
            name: 'alt',
            type: 'string',
            title: 'Texto alternativo',
        },
      ],
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'orientation',
        type: 'string',
        title: 'Orientación',
        options: {
            list: [
            { value: 'imageLeft', title: 'Imagen a la izquierda' },
            { value: 'imageRight', title: 'Imagen a la derecha' },
            ],
        },
    }),
    defineField({
      name: 'bgColorYes',
      type: 'boolean',
      title: '¿Deseas agregar un color de fondo?',
      initialValue: false,
    }),
    defineField({
      name: 'bgColor',
      type: 'colorPalette',
      title: 'Define un color de fondo',
      hidden: ({ parent }) => !parent?.bgColorYes,
    }),
    defineField({
      name: 'button',
      type: 'array',
      title: 'Botón',
      of: [{type: 'button'}]
    })
  ],
});