const { join } = require("path");
const buble = require("rollup-plugin-buble");
const typescript = require("rollup-plugin-typescript2");
const { terser } = require("rollup-plugin-terser");
const cwd = __dirname;
const fs = require("fs");

const isProduction = process.env.NODE_ENV === 'production';

const libPath = join(cwd, "src", "libs")
const libFilesList = fs.readdirSync(libPath).map(file => join(libPath, file));

const libConfig = {
    "input": libFilesList
    , "output": [
        {
            "entryFileNames": "[name].js"
            , "format": "es"
            , "dir": join(cwd, "dist", "libs")
            , "sourcemap": true
        }
    ]
    , "plugins": [
        typescript({
            "tsconfigOverride": {
                "compilerOptions": {
                    "declarationDir": "./dist"
                }
            }
            , "objectHashIgnoreUnknownHack": true
            , "useTsconfigDeclarationDir": true
        })
        , buble({
            "transforms": {
                "asyncAwait": false
            }
        })
        , isProduction && terser()
    ]
}

const indexConfig = {
    "input": join(cwd, "src", "index.ts")
    , "output": [
        {
            "file": join(cwd, "dist", "index.js")
            , "format": "cjs"
            , "sourcemap": true
            , "exports": "named"
        }
        , {
            "sourcemap": true
            , "format": "es"
            , "file": join(cwd, "dist/index.esm.js")
        }
    ]
    , "plugins": [
        typescript({
            "objectHashIgnoreUnknownHack": true
        })
        , buble({
            "transforms": {
                "asyncAwait": false
            }
        })
    ]
}

function rollup() {
    return [libConfig, indexConfig];
}
module.exports = rollup()
