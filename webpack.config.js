import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

/** @type {import('webpack).Configuration} **/

const isDev = proccess.env.NODE_ENV === 'development';

export const entry = 'src/index.js';
export const output = {
  path: './dist',
  clean: true, // setiap proses webpack yg dijalankan, by default, dist akan slalu dihapus trs dimasukin yg baru (paling updated)
};
export const module = {
  rules: [
    // ketika menemukan module, modulenya mau diapain (bentuknya array of object)
    {
      test: /\.jsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/, // node_modules udah di transpile, jdi gausa transpile lagi
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'], // CSS Loader -> ubah contents dari file css jdi string, Style Loader -> append styling ke html
    },
    {
      test: /\.png$/,
      type: 'asset/resource',
    },
  ],
};
export const plugins = [
  isDev ? new ReactRefreshPlugin() : null,
  new HtmlWebpackPlugin({
    favicon: './public/favicon.ico',
    template: './public/index.html',
  }),
].filter(Boolean);
export const devServer = {
  hot: true,
};
