import { defineField, defineType } from "sanity";

export const settingsType = defineType({
    name: 'settings',
    type: 'document',
    title: 'Configuración',
    preview: {
        prepare() {
            return {
                title: 'Configuración',
            }
        },
    },
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Título del sitio'
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Descripción para el sitio',
            description: 'Se utiliza para la etiqueta de descripción <meta> para SEO.'
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