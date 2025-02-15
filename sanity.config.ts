import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from 'sanity/presentation';
import { visionTool } from '@sanity/vision'
import { esESLocale } from '@sanity/locale-es-es'
import { schema } from "@back/schemaTypes";
import { resolve } from "@back/lib/resolve";
import { myStructure } from "@back/schemaTypes/structure/deskStructure";
import { unsplashAssetSource } from "sanity-plugin-asset-source-unsplash";
import {colorInput} from '@sanity/color-input'

export default defineConfig({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  plugins: [
    presentationTool({
      resolve,
      title: 'Presentación',
      previewUrl: {
        origin: 'http://localhost:4321',
        previewMode: {
          enable: '/api/draft-mode/enable',
          disable: '/api/draft-mode/disable',
        },
      },
    }),
    structureTool({
      title: 'Estructura',
      structure: myStructure
    }),
    visionTool(),
    esESLocale(),
    colorInput(),
  ],
  form: {
    image: {
      assetSources: (prev) => [...prev, unsplashAssetSource],
      directUploads: true,
    },
  },
  datasets: {
    production: {
      image: {
        metadata: ["dimensions"],
      },
    },
  },
  schema,
});