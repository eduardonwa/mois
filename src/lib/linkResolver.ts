/**
 * Resuelve un enlace basado en su tipo.
 * @param link - El objeto link que contiene el tipo y los datos del enlace.
 * @returns La URL resuelta o null si el enlace no es válido.
 */

type Link = {
    linkType?: "href" | "page" | "post"; // Tipos de enlace permitidos
    href?: string; // URL directa
    page?: string; // Página interna
    post?: string; // Post interno
  };
  
  export function linkResolver(link: Link | undefined): string | null {
    // Si el link es undefined o null, retornamos null
    if (!link) return null;
  
    // Si linkType no está definido pero href sí, asumimos que el tipo es "href"
    if (!link.linkType && link.href) {
      link.linkType = "href";
    }
  
    // Resolvemos el enlace basado en el linkType
    switch (link.linkType) {
      case "href":
        return link.href || null; // Retorna href o null si no está definido
  
      case "page":
        // Verificamos que page esté definido y sea un string
        if (link.page && typeof link.page === "string") {
          return `/${link.page}`; // Retorna la ruta de la página
        }
        break; // Si no cumple, salimos del case
  
      case "post":
        // Verificamos que post esté definido y sea un string
        if (link.post && typeof link.post === "string") {
          return `/posts/${link.post}`; // Retorna la ruta del post
        }
        break; // Si no cumple, salimos del case
  
      default:
        // Si el linkType no es válido o no está definido, retornamos null
        return null;
    }
  
    // Si no se cumple ningún caso, retornamos null
    return null;
  }