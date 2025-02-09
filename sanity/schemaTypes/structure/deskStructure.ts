import type { StructureResolver } from "sanity/structure";
import {CogIcon} from '@sanity/icons'
import {DocumentTextIcon} from '@sanity/icons'
import {ControlsIcon} from '@sanity/icons'
import {UserIcon} from '@sanity/icons'
import {ListIcon} from '@sanity/icons'
import {EarthGlobeIcon} from '@sanity/icons'
import {MenuIcon} from '@sanity/icons'

export const myStructure: StructureResolver = (S) =>
    S.list()
        .title('Base')
        .items([
            S.listItem()
                .title('Páginas')
                .icon(DocumentTextIcon)
                .child(
                    S.documentList()
                        .title('Todas las páginas')
                        .filter('_type in ["pageIndex", "page"]')
                ),
                S.divider(),
            // todos los articulos
            S.listItem()
                .title('Artículos')
                .icon(DocumentTextIcon)
                .child(
                    S.documentList()
                        .title('Todos los artículos')
                        .filter('_type == "post"')
                ),
            // articulos por categoria y por autor
            S.listItem()
                .title('Filtros del blog')
                .icon(ControlsIcon)
                .child(
                    S.list()
                        .title('Filtros')
                        .items([
                            S.listItem()
                                .title('Por categoría')
                                .icon(ListIcon)
                                .child(categoryId =>
                                    S.documentList()
                                        .title('Artículos')
                                        .filter('_type == "post" && $categoryId in categories[]._ref')
                                        .params({categoryId})
                                ),
                            S.listItem()
                                .title('Por autor')
                                .icon(UserIcon)
                                .child(
                                    S.documentTypeList('author')
                                        .title('Artículos por autor')
                                        .child(authorId =>
                                            S.documentList()
                                                .title('Artículos')
                                                .filter('_type == "post" && $authorId == author._ref')
                                                .params({authorId})
                                        )
                                ),
                        ])
                ),
                S.divider(),
            // configuracion general del sitio
            S.listItem()
                .title('Configuración')
                .icon(CogIcon)
                .child(
                    S.list()
                    // titulo para la lista dentro de configuracion
                    .title('Configuración general')
                    // lista de documentos
                    .items([
                        S.listItem()
                            .title('Metadata')
                            .icon(EarthGlobeIcon)
                            .child(S.document().schemaType('settings').documentId('settings')),
                            S.divider(),    
                        S.listItem()
                            .title('Navegación')
                            .icon(MenuIcon)
                            .child(S.document().schemaType('navigation').documentId('navigation')),
                            S.divider(),
                    ])
                ),
                ...S.documentTypeListItems().filter(
                    (listItem) => ![
                        'settings',
                        'navigation',
                        'post',
                        'author',
                        'category',
                        'page',
                        'pageIndex'
                    ].includes(listItem.getId())            
                ),
    ])