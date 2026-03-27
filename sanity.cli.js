import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'ssbenczy',
    dataset: 'production',
  },
  studioHost: 'johnnywattsagency',
  deployment: {
    appId: 'cb4arw21uwdb1nczgcw1uf84',
  },
})
