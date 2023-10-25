// #region shared with https://github.com/paranext/paranext-extension-template/blob/main/webpack/webpack.config.base.ts

import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import webpack from 'webpack';

const isDev = process.env.NODE_ENV !== 'production';
const shouldGenerateSourceMaps = isDev || process.env.DEBUG_PROD;

/** The base directory from which webpack should operate (should be the root repo folder) */
export const rootDir = path.resolve(__dirname, '..');

/**
 * The module format of library we want webpack to use for externals and create for our extensions
 *
 * @see webpack.Configuration['externalsType'] for info about external import format
 * @see webpack.LibraryOptions['type'] for info about library format
 */
// commonjs-static formats the code to export everything on module.exports.<export_name> so it works
// well in cjs or esm https://webpack.js.org/configuration/output/#type-commonjs-static
export const LIBRARY_TYPE: NonNullable<webpack.Configuration['externalsType']> = 'commonjs-static';

// Note: we do not want to do any chunking because neither webViews nor main can import dependencies
// other than those listed in configBase.externals. Each webView must contain all its dependency
// code, and main must contain all its dependency code.
/** webpack configuration shared by webView building and main building */
const configBase: webpack.Configuration = {
  // The operating directory for webpack instead of current working directory
  context: rootDir,
  mode: isDev ? 'development' : 'production',
  // Bundle the sourcemap into the file since webviews are injected as strings into the main file
  devtool: shouldGenerateSourceMaps ? 'inline-source-map' : false,
  watchOptions: {
    ignored: ['**/node_modules'],
  },
  // Use require for externals as it is the only type of importing that Paranext supports
  // https://webpack.js.org/configuration/externals/#externalstypecommonjs
  externalsType: LIBRARY_TYPE,
  // Modules that Paranext supplies to extensions https://webpack.js.org/configuration/externals/
  // All other dependencies must be bundled into the extension
  externals: [
    'react',
    'react/jsx-runtime',
    'react-dom',
    'react-dom/client',
    'papi-frontend',
    'papi-backend',
    '@sillsdev/scripture',
  ],
  module: {
    // Please keep these JSDocs up-to-date with their counterparts in `webpack-env.d.ts`
    rules: [
      /**
       * Import fully loaded and transformed files as strings with "./file?inline"
       *
       * WARNING: These files are NOT bundled. The rules are applied, but webpack does not bundle
       * dependencies into these files before providing them, unfortunately. However, React WebView
       * files are an exception as they are fully bundled.
       */
      // This must be the first rule in order to be applied after all other transformations
      // https://webpack.js.org/guides/asset-modules/#replacing-inline-loader-syntax
      {
        resourceQuery: /inline/,
        type: 'asset/source',
      },
      // Load TypeScript with SWC https://swc.rs/docs/usage/swc-loader
      // If this seems to cause problems, you can try switching to ts-loader for more compatibility
      // https://github.com/TypeStrong/ts-loader#options
      {
        test: /\.tsx?$/,
        use: {
          loader: 'swc-loader',
          options: {
            // Lots of configuration at https://swc.rs/docs/configuration/compilation - if building
            // isn't working because of some error that looks like normal code, it may be something
            // in swc isn't enabled.
            // Found how to configure at https://stackoverflow.com/questions/76671009/how-to-properly-configure-swc-loader-with-webpack-when-switching-from-ts-loader
            jsc: {
              parser: {
                syntax: 'typescript',
                tsx: true,
                decorators: true,
              },
            },
          },
        },
        exclude: /node_modules/,
      },
      /**
       * Import scss, sass, and css files as strings
       */
      // https://webpack.js.org/loaders/sass-loader/#getting-started
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // We are not using style-loader since we are passing styles to papi, not inserting them
          // into dom. style-loader would add html style elements for our styles if we used it
          // We are not using css-loader since we are getting style files using ?inline. css-loader
          // would allow us to import CSS into CommonJS
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      /**
       * Import files with no transformation as strings with "./file?raw"
       */
      // This must be the last rule in order to be applied before all other transformations
      // https://webpack.js.org/guides/asset-modules/#replacing-inline-loader-syntax
      {
        resourceQuery: /raw/,
        type: 'asset/source',
      },
    ],
  },
  resolve: {
    // If no file extension is provided on file path imports, use these extensions left-to-right
    // https://webpack.js.org/guides/typescript/#basic-setup
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [
      // use tsconfig.json paths https://www.npmjs.com/package/tsconfig-paths-webpack-plugin
      new TsconfigPathsPlugin(),
    ],
  },
};

export default configBase;

// #endregion
