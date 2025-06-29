import {defineCliConfig} from 'sanity/cli'
import {InlineConfig} from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineCliConfig({
  api: {
    projectId: 'hrzhogmn',
    dataset: 'production'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
  vite: async (config: InlineConfig): Promise<InlineConfig> => ({
    ...config,
    plugins: [
      ...(config.plugins || []), 
      tsconfigPaths()
    ]
  }),
})
