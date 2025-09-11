import webpack from "webpack";
import { buildCssLoader } from "./loaders/buildCssLoader";

export function buildLoaders(isDev: boolean): webpack.RuleSetRule[] {

    const svgLoader: webpack.RuleSetRule = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }

    const fileLoader: webpack.RuleSetRule = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const babelLoader: webpack.RuleSetRule = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: [
                    [
                        "i18next-extract",  // Плагин и его конфиг должны быть в одном массиве
                        {
                            locales: ["ru", "en"],
                            keyAsDefaultValue: true
                        }
                    ]
                ]
            },
        },
    }

    const cssLoader: webpack.RuleSetRule = buildCssLoader(isDev);

    const typeScriptLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typeScriptLoader,
        cssLoader,
    ]
}