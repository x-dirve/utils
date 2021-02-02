const { join } = require("path")
const buble = require("rollup-plugin-buble")
const babel = require("rollup-plugin-babel");
const typescript = require("rollup-plugin-typescript2")
const cwd = __dirname

const baseConfig = {
    input: join(cwd, "src/index.ts"),
    output: [
        {
            file: join(cwd, "dist/index.js"),
            format: "cjs",
            sourcemap: true,
            exports: "named"
        }
    ],
    plugins: [
        typescript({
            tsconfigOverride: {
                compilerOptions: {
                    preserveConstEnums: true
                }
            }
        }),
        buble()
    ]
}
const esmConfig = Object.assign({}, baseConfig, {
    output: Object.assign({}, baseConfig.output, {
        sourcemap: true,
        format: "es",
        file: join(cwd, "dist/index.esm.js")
    }),
    plugins: [
        typescript()
        , buble()
    ]
})


const mathConfig = {
    input: join(cwd, "src/math.ts"),
    output: [
        {
            file: join(cwd, "dist/math.js"),
            format: "cjs",
            sourcemap: true,
            exports: "named"
        }
    ],
    plugins: [
        typescript({
            tsconfigOverride: {
                compilerOptions: {
                    preserveConstEnums: true
                }
            }
        }),
        buble()
    ]
}

const mathEsmConfig = Object.assign({}, mathConfig, {
    output: Object.assign({}, mathConfig.output, {
        sourcemap: true,
        format: "es",
        file: join(cwd, "dist/math.esm.js")
    }),
    plugins: [
        typescript()
        , buble()
    ]
})

function rollup() {
    const target = process.env.TARGET
    if (target === "umd") {
        return [baseConfig, mathConfig]
    } else if (target === "esm") {
        return [esmConfig, mathEsmConfig]
    } else {
        return [baseConfig, esmConfig, mathConfig, mathEsmConfig]
    }
}
module.exports = rollup()
