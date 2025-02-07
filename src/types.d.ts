import type { arrayOutputType } from "astro:schema";

// Definición base para enlaces
interface BaseLink {
    linkType: "href" | "page" | "post";
    href?: string;
    pageSlug?: string;
    postSlug?: string;
    openInNewTab?: boolean;
    [key: string]: any;
}

// Para la barra de navegación (navbar.astro)
interface NavbarItem {
    name: string;
    label: string;
    link: BaseLink & {
        slug: string;
    };
}

// Para el pie de página (footer.astro)
interface FooterItem {
    logoUrl?: string;
    linkGroups?: LinkGroup[];
}

interface LinkGroup {
    groupTitle: string;
    links?: Link[];
}

interface Link {
    name: string;
    link: BaseLink;
}

// Para atributos de enlace HTML
export interface LinkAttributes {
    target?: string;
    rel?: string;
    href: string;
    class?: string;
    [key: string]: string | undefined;
}

// Props para el componente Link (link.astro)
interface LinkProps {
    link: BaseLink;
    class?: string;
}

export interface MetadataSettingsProps {
  title: string;
  description: string;
  ogImage?: {
    alt: string;
    baseUrl: string;
    ogImageUrl: string;
  };
}

export interface PageSlugProps {
  heading: string;
  subheading: string;
  pageBuilder: array;
}

// Interfaz base para todos los bloques
interface BlockBase {
  _type: string;
  _key?: string;
  _id?: string;
}

interface CallToActionProps {

}

interface InfoSectionProps {

}

interface LinkProps {
  
}