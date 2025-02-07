import type { array, arrayOutputType } from "astro:schema";

// Definición base para enlaces
interface BaseLink {
  linkType: "href" | "page" | "post";
  href?: string;
  pageSlug?: string;
  postSlug?: string;
  openInNewTab?: boolean;
  [key: string]: any;
}

// Para la barra de navegación
interface NavbarItem {
  name: string;
  label: string;
  link: BaseLink & { slug: string };
}

// Para el pie de página
interface FooterItem {
  logoUrl?: string;
  linkGroups?: LinkGroup[];
}

interface LinkGroup {
  groupTitle: string;
  links?: Link[];
}

// Interfaz unificada para Link
interface Link extends BaseLink {
  name?: string;
}

// Para atributos de enlace HTML
export interface LinkAttributes {
  target?: string;
  rel?: string;
  href: string;
  class?: string;
  [key: string]: string | undefined;
}

// Para los campos de metadata
export interface MetadataSettingsProps {
  title: string;
  description: string;
  ogImage?: {
    alt: string;
    baseUrl: string;
    ogImageUrl: SanityAsset;
  };
}

export interface SanityAsset {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

export interface PageSlugProps {
  heading: string;
  subheading: string;
  pageBuilder: BlockComponent[];
}

interface BlockComponents {
  callToAction: (props: CallToActionProps) => any;
  infoSection: (props: InfoSectionProps) => any;
  link: (props: LinkProps) => any;
  image: (props: ImageProps) => any; // Añade el tipo para Image
  block: (props: BlockProps) => any; // Añade el tipo para Block
}

export const blockComponents: BlockComponents = {
  callToAction: CallToAction,
  infoSection: InfoSection,
  link: Link,
  image: Image, // Incluye el componente Image
  block: Block, // Incluye el componente Block
};

interface BlockComponent extends BlockBase {
  _type: "callToAction" | "infoSection" | "image" | "block";
  callToAction?: CallToActionProps;
  infoSection?: InfoSectionProps;
  image?: Image;
  block?: Block;
}

interface BlockBase {
  _type: string;
  _key?: string;
  _id?: string;
}

interface BlockContent {
  _type: "array";
  of: BlockComponent[];
}

interface Block extends BlockBase {
  _type: "block";
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  lists?: { _type: "list"; style: "bullet"; children: ListItem[] }[];
  children: Span[];
  markDefs: Link[];
}

interface Span {
  _type: "span"; // _type en minúsculas
  text: string;
  marks: string[];
}

interface ListItem {
  _type: "listItem";
  children: Span[];
}

interface Image extends BlockBase {
  _type: "image";
  asset: {
    _ref: string;
    _type: string;
  };
  alt?: string;
  hotspot?: boolean;
}

// (components/CallToAction.astro)
interface CallToActionProps extends BlockBase {
  _type: "callToAction";
  heading?: string;
  subheading?: string;
  buttonText?: string;
  link?: Link;
}

// (components/InfoSection.astro)
interface InfoSectionProps extends BlockBase {
  _type: "infoSection";
  heading?: string;
  subheading?: string;
  content?: BlockContent;
}

// (components/Link.astro)
interface LinkProps {
  link: BaseLink;
  class?: string;
}