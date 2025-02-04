import { defineConfig, isDev } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./sanity/schemaTypes";
import { presentationTool } from 'sanity/presentation';
import { resolve } from "./sanity/lib/resolve";
import {visionTool} from '@sanity/vision'

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
    structureTool(),
    visionTool(),  
  ],
  schema,
});