import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  type: "document",
  title: "Categorías",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
  ],
});