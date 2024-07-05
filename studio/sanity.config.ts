import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {presentationTool} from 'sanity/presentation'
import {visionTool} from '@sanity/vision'

import {schemaTypes} from './schemas'

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
export const dataset = process.env.SANITY_STUDIO_DATASET!

export default defineConfig({
  name: 'project-name',
  title: 'YEN-GI',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title('Content')
          .items([
    
            orderableDocumentListDeskItem({
              type: 'post',
              title: 'Sections',
              S,
              context,
            })
  
          ])
      },
    }),
    presentationTool({
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_URL || 'https://yen-gi.com',
        previewMode: {
          enable: '/preview/enable',
          disable: '/preview/disable',
        },
      },
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
