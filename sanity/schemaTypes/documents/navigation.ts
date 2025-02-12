import { defineField, defineType } from "sanity";
import { LinkIcon } from '@sanity/icons'
import { CubeIcon } from '@sanity/icons'

export const navigationType = defineType({
    name: 'navigation',
    type: 'document',
    title: 'Navegación',
    preview: {
        prepare() {
            return {
                title: 'Navegación',
            }
        },
    },
    fields: [
        defineField({
            name: 'logo',
            type: 'image',
            title: 'Logo',
            description: 'Tamaño permitido: 300px de ancho por 150px de alto.',
            options: { hotspot: true },
            validation: (Rule) =>
                Rule.custom(async (image, context) => {
                    if (!image?.asset?._ref) return true; // Si no hay imagen, permitir
        
                    const client = context.getClient({ apiVersion: "2025-01-28" });
                    try {
                        const asset = await client.fetch(
                            `*[_id == $id][0]{metadata}`,
                            { id: image.asset._ref }
                        );
        
                        if (!asset?.metadata?.dimensions) {
                            return 'No se pudieron obtener las dimensiones de la imagen.';
                        }
        
                        const { width, height } = asset.metadata.dimensions;
        
                        if (width > 300 || height > 150) {
                            return `La imagen es demasiado grande. Tamaño actual: ${width}x${height} píxeles.`;
                        }
        
                        return true;
                    } catch (error) {
                        return 'Error al obtener los datos de la imagen.';
                    }
                }),
        }),                             
        defineField({
            name: 'navbar',
            type: 'array',
            title: 'Navegación principal',
            of: [
                {
                    type: 'object',
                    title: 'Enlace de navegación',
                    icon: LinkIcon,
                    fields: [
                        {
                            name: 'name',
                            type: 'string',
                            title: 'Nombre'
                        },
                        {
                            name: 'link',
                            type: 'reference',
                            title: 'Enlace',
                            to: [{ type: 'page' }],
                        },
                    ]
                }
            ],
        }),
        defineField({
            name: 'footer',
            type: 'array',
            title: 'Navegación de pie',
            of: [
                {
                    type: 'object',
                    title: 'Navegación de pie',
                    fields: [
                        {
                            name: 'logo',
                            type: 'image',
                            title: 'Logo de pie'
                        },
                        {
                            name: 'linkGroups',
                            type: 'array',
                            title: 'Grupos de enlaces',
                            of: [
                                {
                                    type: 'object',
                                    title: 'Grupo',
                                    icon: CubeIcon,
                                    fields: [
                                        {
                                            name: 'groupTitle',
                                            type: 'string',
                                            title: 'Nombre del grupo'
                                        },
                                        {
                                            name: 'links',
                                            type: 'array',
                                            title: 'Enlaces',
                                            of: [
                                                {
                                                    type: 'object',
                                                    icon: LinkIcon,
                                                    fields: [
                                                        {
                                                            name: 'name',
                                                            type: 'string',
                                                            title: 'Nombre',
                                                        },
                                                        {
                                                            name: 'link',
                                                            type: 'link',
                                                            title: 'Enlace',
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                    preview: {
                                        select: {
                                            title: 'groupTitle',
                                            subtitle: 'links',
                                        },
                                        prepare(selection) {
                                            const { title, subtitle } = selection;
                                            const linkCount = subtitle ? subtitle.length : 0;
                                            return {
                                                title: title || 'Sin título',
                                                subtitle: linkCount === 0 ? 'Sin enlaces' : `${linkCount} enlace(s)`
                                            };
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                    preview: {
                        select: {
                            media: 'logo',
                            groups: 'linkGroups',
                        },
                        prepare(selection) {
                            const { groups, media } = selection;
                            
                            const groupTitles = groups
                                ? groups
                                    .slice(0, 3)
                                    .map((group: { groupTitle: any; }) => group.groupTitle)
                                    .join(', ')
                                : 'Sin grupos';

                            return {
                                title: groupTitles,
                                subtitle: groups && groups.length > 3 ? `y ${groups.length - 2} más...` : null,
                                media,
                            };
                        },
                    },
                },
            ],
        }),
    ]
});