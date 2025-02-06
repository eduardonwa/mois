import { defineField, defineType } from "sanity";
import {LinkIcon} from '@sanity/icons'
import {CubeIcon} from '@sanity/icons'

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
                                    .map((group) => group.groupTitle)
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