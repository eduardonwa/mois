/**
 * Resuelve un enlace basado en su tipo.
 * @param link - El objeto link que contiene el tipo y los datos del enlace.
 * @returns La URL resuelta o null si el enlace no es válido.
 */

type Link = {
    linkType?: "href" | "page" | "post"; // Tipos de enlace permitidos
    href?: string; // URL directa
    pageSlug?: string; // Página interna
    postSlug?: string; // Post interno
    openInNewTab?: boolean;
  };
  
  export function linkResolver(link: Link | undefined): string | null {
    if (!link) return null;
    
    // por defecto "href" si no encuentra un tipo de enlace
    if (!link.linkType && link.href) {
      link.linkType = "href";
    }
  
    switch (link.linkType) {
      case "href":
        return link.href || null;
      case "page":
        return link.pageSlug ? `/${link.pageSlug}` : null;
      case "post":
        return link.postSlug ? `/post/${link.postSlug}` : null;
  
      default:
        return null;
    }
  }