import type { array, arrayOutputType } from "astro:schema";
import CallToAction from "./CallToAction.astro";
import InfoSection from "./InfoSection.astro";
import Link from "./Link.astro";
import Image from "./Image.astro";
import Block from "./Block.astro";

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

interface PageMetadata {
  [key: string]: unknown; // Firma de índice más segura (o usa un tipo más específico si conoces la estructura)
  title?: string;
  description?: string;
  ogImage?: {
    alt?: string;
    baseUrl?: string;
    ogImageUrl?: SanityAsset;
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
[x: string]: any;
  heading: string;
  subheading: string;
  pageBuilder: BlockComponent[];
}

// Definición de BlockComponent y BlockBase (sin duplicados)
interface BlockBase {
  _type: string;
  _key?: string;
  _id?: string;
}

interface BlockComponent extends BlockBase {
  _type: "callToAction" | "infoSection" | "image" | "block";
  callToAction?: CallToActionProps;
  infoSection?: InfoSectionProps;
  image?: Image;
  block?: Block;
}

// Definición de BlockContent
interface BlockContent {
  _type: "array";
  of: BlockComponent[];
}

// Definición de Block, Span, ListItem, Image (sin duplicados)
interface Block extends BlockBase {
  _type: "block";
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  lists?: { _type: "list"; style: "bullet"; children: ListItem[] }[];
  children: Span[];
  markDefs: Link[];
}

interface Span {
  _type: "span";
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

// Definición de CallToActionProps, InfoSectionProps (sin duplicados)
interface CallToActionProps extends BlockBase {
  _type: "callToAction";
  heading?: string;
  subheading?: string;
  buttonText?: string;
  link?: Link;
}

interface InfoSectionProps extends BlockBase {
  _type: "infoSection";
  heading?: string;
  subheading?: string;
  content?: BlockContent;
}

// Definición de LinkProps
interface LinkProps {
  link: BaseLink;
  class?: string;
}

// Definición de PostProps (sin duplicados)
interface PostProps {
  title?: string;
  slug: { current: string }; // Tipado para slug
  body?: BlockContent;         // Tipado para body
  perspective: "published" | "previewDrafts" | string; // Tipado más flexible para perspective
}

// definicion del backend para los post
export interface Post {
  title: string;
  slug: string;
  author: string;
  mainImage?: {
    url: string;
    alt?: string;
  };
  categories: string[];
  publishedAt?: string;
  body: BlockContent;
  _createdAt: string;
  _updatedAt: string;
  _id: string;
  _type: string;
}

interface BlockComponents {
  callToAction: (props: CallToActionProps) => JSX.Element;
  infoSection: (props: InfoSectionProps) => JSX.Element;
  link: (props: LinkProps) => JSX.Element;
  image: (props: ImageProps) => JSX.Element;
  block: (props: BlockProps) => JSX.Element;
}

export const blockComponents: BlockComponents = {
  callToAction: CallToAction,
  infoSection: InfoSection,
  link: Link,
  image: Image,
  block: Block,
};

interface Props {
  serverDraftMode: boolean;
  visualEditingEnabled: boolean;
  page: PageMetadata | null; // Tipado para page, puede ser null
  settings: MetadataSettingsProps | null;
  metadata: { 
    title: string; 
    description: string; 
    ogImage: { 
      alt: string; 
      baseUrl: string; 
      ogImageUrl: any;
    } | { 
      alt: string; 
      url: string; 
    }; 
  };
  navigation: any; // Tipa navigation también
}

interface LayoutProps {
  serverDraftMode: boolean;
  visualEditingEnabled: boolean;
  // ... otras props que necesites (page, settings, metadata, etc.)
  page: any; // Tipa page
  settings: any; // Tipa settings
  metadata: any; // Tipa metadata
  navigation: any; // Tipa navigation
}