import { defineLocations } from "sanity/presentation";
import type { PresentationPluginOptions } from "sanity/presentation";

export const resolve: PresentationPluginOptions["resolve"] = {
  locations: {
    // Add more locations for other post types
    pageIndex: defineLocations({
      select: {
        name: 'name',
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.name || 'Página principal',
            href: "/",
          },
        ],
        message: "Accede a la información metadata desde \"Configuración\".",
        tone: "positive",
      })
    }),
    
    page: defineLocations({
      select: {
        title: "name",
        slug: "slug.current"
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Sin título",
            href: `/${doc?.slug}`,
          },
        ],
      }),
    }),

    navigation: defineLocations({
      select: {
        title: "title",
        slug: "slug.current"
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Navegación",
            href: doc?.slug || "/",
          },
        ],
        message: "La navegación está presente en todas las páginas",
        tone: "positive",
      }),
    }),
    
    post: defineLocations({
      select: {
        title: "title",
        slug: "slug.current",
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Sin título",
            href: `/post/${doc?.slug}`,
          },
        ],
      }),
    }),

    settings: defineLocations({
      select: {
        title: "title",
        slug: "slug.current",
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Home",
            href: doc?.slug || "/",
          },
        ],
        message: "Información metadata para la página principal.",
        tone: "positive",
      }),
    }),
  },
};
