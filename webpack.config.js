import { fileURLToPath } from 'url';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.tsx',
  mode: 'development',
  devServer: {
    port: 9000,
    historyApiFallback: true,
    hot: true,
  },
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@mui/material': path.resolve(__dirname, 'node_modules/@mui/material'),
      '@mui/system': path.resolve(__dirname, 'node_modules/@mui/system'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.container.ModuleFederationPlugin({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        auth: 'auth@http://localhost:9001/remoteEntry.js',
      },
      exposes: {
        // './store': './src/state/store.ts',
      },
      shared: {
        react: { singleton: true, eager: false, requiredVersion: false },
        'react-dom': { singleton: true, eager: false, requiredVersion: false },
        'react-router-dom': { singleton: true, requiredVersion: false },
        '@reduxjs/toolkit': { singleton: true, requiredVersion: false },
        'react-redux': { singleton: true, requiredVersion: false },
        '@mui/material': { singleton: true, requiredVersion: false },
        '@mui/system': { singleton: true, requiredVersion: false },
        '@emotion/react': { singleton: true, requiredVersion: false },
        '@emotion/styled': { singleton: true, requiredVersion: false },
      },
    }),
  ],
};
