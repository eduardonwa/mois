// navbar
interface NavbarItem {
    name: string;
    label: string;
    link: {  // Este objeto link *debe* tener la forma que espera la interfaz Link
      slug: string; // "slug" aquí, no "pageSlug"
      href?: string; // Si necesitas href para los navlinks, inclúyelo aquí
    };
    pageSlug?: string; // Si necesitas pageSlug fuera del objeto link, puedes dejarlo
}

interface NavLink {
    linkType: "page";
    pageSlug: string;
}

// footer
interface FooterItem {
    logoUrl?: string;
    linkGroups?: LinkGroup[];
}

interface Link {
    linkType: "href" | "page" | "post";
    href?: string;
    pageSlug?: string;
    postSlug?: string;
    openInNewTab?: boolean;
}

interface LinkGroup {
    groupTitle: string;
    links?: Link[];
}

interface InnerLink {
    linkType: "href" | "page" | "post" | undefined;
    href: string;
    pageSlug?: string;
    postSlug?: string;
    openInNewTab?: boolean;
}
  
interface Link {
    name: string;
    link: InnerLink;
}