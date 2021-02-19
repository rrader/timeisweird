// import("./index.js").catch(e => console.error("Error importing `index.js`:", e));
// // 
// import { default as wasm, greet } from "./timeisweird-wasm/pkg/timeisweird.js"
// require('file-loader?name=[name].[ext]!./index.html');
// // require('file-loader?name=[name].[ext]!./timeisweird-wasm/pkg/timeisweird_bg.js');

// wasm().then((module) => {
//   console.log(module);
//   greet("Test");
// })
// console.log(wasm);
// console.log(greet);
// // timeisweird.greet("Test");
// greet("Test");

// ./src/timeisweird-wasm/pkg

const rust = import('./timeisweird-wasm/pkg/timeisweird.js');

rust
  .then(m => m.greet('World!'))
  .catch(console.error);
