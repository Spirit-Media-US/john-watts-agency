import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'ssbenczy',
    dataset: 'production',
  },
  studioHost: 'johnnywattsagency',
})
