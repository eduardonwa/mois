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

export const pageQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    _type,
    name,
    slug,
    heading,
    subheading,
    "pageBuilder": pageBuilder[]{
      ...,
      _type == "callToAction" => {
        ${linkFields},
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