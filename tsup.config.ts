import type {Options} from 'tsup'
import esbuildPluginLicense, {type Dependency} from 'esbuild-plugin-license'

export default {
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
  ] as Options['esbuildPlugins'],
  format: 'esm',
  noExternal: ['@actions/core'],
} as Options
