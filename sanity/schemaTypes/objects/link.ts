import {defineField, defineType} from "sanity";
import {DocumentIcon, LinkIcon} from "@sanity/icons";

export const linkType = defineType({
    name: 'link',
    type: 'object',
    title: 'Enlace',
    icon: LinkIcon,
    fields: [
        defineField({
            name: 'linkType',
            type: 'string',
            title: 'Tipo de enlace',
            options: {
                list: [
                    {title: 'URL', value: 'href'},
                    {title: 'Página', value: 'page'},
                    {title: 'Artículo', value: 'post'},
                ],
                layout: 'radio',
            },
        }),
        defineField({
            name: 'href',
            type: 'url',
            title: 'URL',
            hidden: ({parent}) => parent?.linkType !== 'href',
            validation: (rule) =>
                rule.custom((value, context: any) => {
                    if (context.parent?.linkType == 'href' && !value) {
                        return 'La URL es obligatoria cuando el tipo de enlace es URL.'
                    }
                    return true
                }),
        }),
        defineField({
            name: 'page',
            type: 'reference',
            title: 'Página',
            to: [{type: 'page'}],
            hidden: ({parent}) => parent?.linkType !== 'page',
            validation: (rule) =>
                rule.custom((value, context: any) => {
                    if (context.parent?.linkType === 'page' && !value) {
                        return 'Se requiere una referencia de página cuando el tipo de enlace es Página.'
                    }
                    return true
                }),
        }),
       defineField({
            name: 'post',
            type: 'reference',
            title: 'Publicación',
            to: [{type: 'post'}],
            hidden: ({parent}) => parent?.linkType !== 'post',
            validation: (rule) =>
                rule.custom((value, context: any) => {
                    if (context.parent?.linkType == 'post' && !value) {
                        return 'Se requiere una referencia a una publicación cuando el tipo de enlace es Publicación.'
                    }
                    return true
                }),
       }),
       defineField({
            name: 'openInNewTab',
            type: 'boolean',
            title: 'Abrir en una pestaña nueva',
            initialValue: false
       })
    ]
});