import {defineField, defineType} from "sanity";
import {TextIcon} from "@sanity/icons";

export const infoSectionType = defineType({
    name: 'infoSection',
    type: 'object',
    title: 'Sección de información',
    icon: TextIcon,
    preview: {
        select: {
            title: 'heading',
            subtitle: 'subheading',
        },
        prepare({title}) {
            return {
                title: title || 'Sin nombre',
                subtitle: 'Sección de información'
            }
        },
    },
    fields: [
        defineField({
            name: 'heading',
            type: 'string',
            title: 'Encabezado',
        }),
        defineField({
            name: 'subheading',
            type: 'string',
            title: 'Subencabezado',
        }),
        defineField({
            name: 'content',
            type: 'blockContent',
            title: 'Contenido',
        }),
    ]
});