/* eslint-disable @typescript-eslint/no-require-imports */
import type {Options} from 'tsup'
import type {Dependency} from 'esbuild-plugin-license'
const {default: esbuildPluginLicense} = require('esbuild-plugin-license')

const config: Options = {
  clean: true,
  entry: {
    index: 'src/main.ts',
  },
  esbuildPlugins: [
    esbuildPluginLicense({
      thirdParty: {
        output: {
          file: 'licenses.txt',
          template: (dependencies: Dependency[]) =>
            dependencies
              .map(({packageJson, licenseText}) => `${packageJson.name}\n${packageJson.license}\n${licenseText}`)
              .join('\n\n'),
        },
      },
    }),
  ],
  format: 'esm',
  noExternal: ['@actions/core'],
}

module.exports = config
