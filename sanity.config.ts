import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { media } from 'sanity-plugin-media'
import { schemaTypes } from './studio/schemaTypes'

export default defineConfig({
  name: 'john-watts-agency',
  title: 'Johnny Watts Agency',
  projectId: 'm97wgkat',
  dataset: 'production',
  plugins: [structureTool(), visionTool(), media()],
  schema: {
    types: schemaTypes,
  },
})
