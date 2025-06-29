import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { SetAsWebsiteCvAction } from './actions/SetAsWebsiteCvAction'
import { structure } from './desk/structure'


export default defineConfig({
  name: 'default',
  title: 'sanity-cms--cv',

  projectId: 'hrzhogmn',
  dataset: 'production',

  plugins: [
    structureTool({ structure }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    actions: (prev, context) => {
      if (context.schemaType === 'cv') {
        return [...prev, SetAsWebsiteCvAction]
      }
      return prev
    }
  }
})
