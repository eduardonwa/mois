// navbar
interface NavbarItem {
    name: string;
    label: string;
    link: { 
      slug: string;
      href?: string;
    };
    pageSlug?: string;
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