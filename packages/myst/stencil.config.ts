import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import tailwind, { PluginOpts } from 'stencil-tailwind-plugin';

const tailwindOpts = {
  ...PluginOpts.DEFAULT,
};

export const config: Config = {
  namespace: 'myst',
  buildEs5: 'prod',
  nodeResolve: {
    preferBuiltins: true,
  },
  plugins: [
    sass({
      includePaths: ['node_modules'],
    }),
    tailwind(tailwindOpts),
    postcss({
      plugins: [
        autoprefixer({
          cascade: false,
        }),
        cssnano(),
      ],
    }),
  ],
  outputTargets: [
    { type: 'dist' },
    { type: 'docs-readme' },
    { type: 'dist-custom-elements-bundle' },
    {
      type: 'www',
      // copy: [{ src: 'global/assets', dest: 'assets' }],
      serviceWorker: null, // disable service workers
    },
  ],
  watchIgnoredRegex: /(custom-elements\.)((d\.ts)|(json))$/g,
  extras: {
    scriptDataOpts: true,
    shadowDomShim: true,
    appendChildSlotFix: true,
    cloneNodeFix: false,
    slotChildNodesFix: true,
  },
  devServer: {
    openBrowser: false,
    port: 8001,
    reloadStrategy: 'hmr',
  },
};
