import 'file-loader?name=[name].[ext]!./index.html';

const rust = import('./timeisweird-wasm/pkg/timeisweird.js');

rust.then(function(m) {
    let palindrome = m.palindrome('World!');
    document.getElementById("nearest-palindrome").innerHTML = palindrome;
  }).catch(console.error);
