import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  type: "document",
  title: "Artículos",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Título",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Enlace",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "author",
      type: "reference",
      title: "Autor",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      type: "image",
      title: "Imagen",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Texto alternativo",
        },
      ],
    }),
    defineField({
      name: "categories",
      type: "array",
      title: "Categoría",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      title: "Fecha de publicación",
    }),
    defineField({
      name: "body",
      type: "blockContent",
      title: "Contenido",
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});