import { defineField, defineType } from "sanity";
import { BlockContentIcon } from "@sanity/icons";

export const splitImageType = defineType({
  name: 'splitImage',
  type: 'object',
  title: 'Imagen + Texto',
  icon: BlockContentIcon,
  preview: {
    select: {
      title: 'heading',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Texto + imagen',
        media: media ?? BlockContentIcon,
      };
    },
  },
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Título',
    }),
    defineField({
      name: 'subheading',
      type: 'text',
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
        name: 'buttonText',
        type: 'string',
        title: 'Texto del botón',
    }),
    defineField({
        name: 'link',
        type: 'link',
        title: 'Enlace',
    }),
  ],
});