import { default as wasm } from "../node_modules/timeisweird-wasm/timeisweird_wasm.js"

wasm().then((module) => {
  module.greet("Test");
})
