import {defineField, defineType, type Rule} from "sanity";

export const pageMetadataType = defineType({
    name: 'pageMetadata',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Título',
            validation: (rule) => rule.max(60).error('El máximo de caracteres es hasta 60.'),
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Descripción',
            validation: (rule) => rule.max(160).error('El máximo de caracteres es hasta 160.'),
        }),
        defineField({
            name: 'ogImage',
            type: 'image',
            title: 'Imagen Open Graph',
            description: 'Se muestra en tarjetas sociales y resultados de motores de búsqueda.',
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: 'alt',
                    description: 'Importante para la accesibilidad y SEO.',
                    title: 'Texto alternativo',
                    type: 'string',
                    validation: (rule) => {
                        return rule.custom((alt, context) => {
                            if ((context.document?.ogImage as any)?.asset?._ref && !alt) {
                                return 'Requerido'
                            }
                            return true
                        })
                    }
                }),
                defineField({
                    name: 'baseUrl',
                    type: 'url',
                    title: 'URL Base'
                })
            ],
        }),
    ]
});