import groq from 'groq';

const linkReference = /* groq */ `
  _type == "link" => {
    "page": page->slug.current,
    "post": post->slug.current
  }
`;

const linkFields = /* groq */ `
  link {
    ...,
    ${linkReference}
  }
`;

export const navigationQuery = groq`
  *[_type == "navigation"] {
    logoPosition,
    logoAlign,
    linksPosition,
    linksAlign,
    "navLogo": logo.asset->url,
    navbar[]{
      name,
      link-> {
        name,
        "slug": slug.current,
        ${linkReference}
      }
    },
    footer[] {
      "logoUrl": logo.asset->url,
      linkGroups[] {
        groupTitle,
        links[] {
          name,
          link {
            linkType,
            openInNewTab,
            href,
            "pageSlug": page->slug.current,
            "postSlug": post->slug.current
          }
        }
      }
    }
  }
`;

export const pageMetadataQuery = groq`
*[_type == "page" && slug.current == $slug][0] {
  pageMetadata,
  ...,
  pageMetadata {
    title,
    description,
    ogImage {
      alt,
      baseUrl,
      "ogImageUrl": asset->url
    },
  }
}`;

export const pageIndexQuery = groq`
  *[_type == "pageIndex"][0] {
    "pageBuilder": pageBuilder[]{
      ...,
      _type == "callToAction" => {
        ${linkFields},
        "imagenUrl": {
          "url": image.asset->url,
          "alt": image.alt,
        },
        order,
      },
      _type == "infoSection" => {
        content[] {
          ...,
          markDefs[]{
            ...,
            _type == "link" => {
              "link": link {
                linkType,
                openInNewTab,
                href,
                "pageSlug": page->slug.current,
                "postSlug": post->slug.current,
              }
            }
          },
        }
      },
      _type == "splitImage" => {
        ...,
        ${linkFields},
        image {
          ...,
          alt,
        },
      },
    }
  }
`;

export const pageQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    _type,
    name,
    slug,
    "pageBuilder": pageBuilder[]{
      ...,
      _type == "callToAction" => {
        ${linkFields},
        "imagenUrl": image.asset->url
      },
      _type == "infoSection" => {
        content[] {
          ...,
          markDefs[]{
            ...,
            ${linkReference}
          }
        }
      },
      _type == "splitImage" => {
        ...,
        image {
          ...,
          alt,
        },
      },
    },
  }
`;
export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    mainImage {
      asset -> {
        _id,
        _ref,
        _type,
        url
      },
      alt
    },
    body[] {
      ...,
      _type == "image" => {
      "imageUrl": asset->url,
        ...metadata {
          lqip,
          ...dimensions {
            width,
            height
          }
        }
      }
    }
  }
`;

export const allPostsQuery = groq`
  *[_type == "post"] {
    title,
    _createdAt,
    _updatedAt,
    "author": author->name,
    "slug": slug.current,
    "mainImage": {
      "url": mainImage.asset->url,
      "alt": mainImage.alt
    },
    "categories": categories[]->title,
  }
`;

export const settingsQuery = groq`
  *[_type == "settings"] {
    title,
    description,
    ogImage {
      alt,
      baseUrl,
      "ogImageUrl": asset-> url
    }
  }
`;