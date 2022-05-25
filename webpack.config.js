const path = require("path");

module.exports =  {
  // tslint:disable-next-line: no-console
    mode: 'production',
    entry: "./index.ts",

    devtool: 'inline-source-map',
    target: "node",
    output: {
      path: path.join(__dirname, "dist"),
      filename: "index.js",
      libraryTarget: "commonjs"
    },
    
};