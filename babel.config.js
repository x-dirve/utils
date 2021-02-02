module.exports = {
    presets: [
        [
            "@babel/env"
            ,{
                "targets": {
                    browsers: [
                        'last 2 versions',
                        'Firefox ESR',
                        '> 1%',
                        'ie >= 8',
                        'iOS >= 8',
                        'Android >= 4',
                    ]
                }
            }
        ],
        "@babel/typescript"
    ],
    plugins: [
        "@babel/plugin-proposal-class-properties"
    ]
}
