import groq from 'groq';

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
        ...,
        asset-> {
          ...,
          url
        }
      }
    }
  }
`