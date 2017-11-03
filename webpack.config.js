const path = require('path');

module.exports = {
    context: __dirname, 
    entry: "./js/ClientApp.jsx",
    devtool: "cheap-eval-source-map", 
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js' 
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'] 
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, 
                loader: 'babel-loader' 
            }
        ]
    }
}

// module.exports = {
//     context: __dirname, //This forces it to run in the root directory. Node global var to root dir
//     entry: "./js/ClientApp.jsx",
//     devtool: "cheap-eval-source-map", //Inline all my sourcemaps, easier to debug seeing pre-compiled code.
//     output: {
//         path: path.join(__dirname, 'public'),
//         filename: 'bundle.js' 
//     },
//     resolve: {
//         extensions: ['.js', '.jsx', '.json'] //Finds the extensions in the order of const App = require ./App<HERE>
//     },
//     stats: {
//         colors: true,
//         reasons: true,
//         chunks: true
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.jsx?$/, //The file name must be .js or jsx, run thru babel
//                 loader: 'babel-loader' //Name of loader you want to use.
//             }//Loader tool that webpack is going to use on your code.
//         ]
//     }
// }